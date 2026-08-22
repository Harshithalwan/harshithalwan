---
title: "CPU doesn't do additions like we do"
date: "2026-08-22"
excerpt: "A visual tour of the carry bit: why it makes addition slow, how carry lookahead works, and why carry-select adders still matter."
tags: ["Computer Architecture", "Logic Gates"]
---

<script>
  import AdditionDemo from '$lib/components/AdditionDemo.svelte';
  import CarryEquationDemo from '$lib/components/CarryEquationDemo.svelte';
</script>

Computers perform billions of calculations each second, but even the simplest operation of addition has a timing problem. The culprit is a tiny extra bit called a **carry**.

This article follows that carry through an adder, then shows the addition algorithm CPUs use to avoid waiting for it.

## Background: From transistors to clock cycles

A CPU is built from transistors. Arrange transistors in particular patterns and they become logic gates; connect logic gates and they can add, compare and store bits.

While the logic gates process electrical signals continuously, the CPU state moves discretely. CPU uses something called an oscillator to trigger the memory registers that sit between logic gates. An oscillator supplies a regular clock pulse, giving the CPU a rhythm for moving work forward. A processor advertised at 4 GHz receives roughly four billion clock pulses per second. A single clock pulse is also called a **CPU cycle**. The exact work completed per CPU cycle depends on the design but a general goal is to make the CPU cycle as short as possible so we can increase the clock frequency. If a CPU operation requires more time to get completed, CPU cycle would have to be kept higher and we stay stuck with the 4 GHz PC for life. 

Addition is the first operations we learn at school. We add from right to left. If a column reaches ten, we write a carry of 1 into the next column. Binary addition is the same story with only two digits: 0 and 1.

Before moving to bits, here is that familiar decimal process.

<AdditionDemo mode="decimal" />

## If computer does additions like us

To add 2 binary numbers together we need 3 bit adder, also called a **Full adder**.

A **full adder** is a small logic circuit with three inputs: two number bits to add and the carry arriving from the bit to its right. It produces a sum bit and a carry-out bit.

We can combine multiple full adders in a series and create something called **ripple-carry adder**, where the carry output from one adder is the carry input to the next.

Here is `1011 + 0001`. In a ripple-carry adder, each highlighted box is one full adder. Use the controls to watch the carry ripple from right to left.

<AdditionDemo mode="ripple" />

The first full adder cannot finish the next one’s job; it can only hand it a carry. In this four-bit example, the result needs up to four full-adder delays to become valid. For an *n*-bit ripple-carry adder, the worst case grows linearly with *n*. 

> In algorithmic language this addition approach is of time complexity O(n).

That is a poor fit for a wide CPU addition. A 64-bit adder should not have to wait for a carry to crawl through 64 stages.

## I don't wanna wait

If we want to make the additions faster, we need a way so the left most bits don't have to wait for all the calculations on its right to get completed. We need a way to calculate the carry early.

Carry lookahead is the answer. It calculates the carry for all bit columns in a single go.

How does it do it ? This is where the addition gets little complicated. Rather than waiting to learn whether a carry arrives, each bit column first reports two facts about itself:

- **Generate (G):** this bit column creates a carry regardless of the incoming carry. e.g. `1 + 1` always generates a carry regardless if the column received a carry or not.
- **Propagate (P):** this bit column will pass an incoming carry to the next column. e.g. `1 + 0` and `0 + 1` propagates. if either of the bit is 1 then if current column will create a carry for the next column depends upon the carry it received. we can also write it as `P = A XOR B`.

Using these 2 values we can calculate the carry value for each column. The right most column doesn't have a carry so `C₀ = 0`, carry for 2nd column depends upon the rightmost column and we can calculate it with `C₁ = G₀ + P₀C₀` i.e. `C₁` would be 1 if the right column generated a carry or it propagated it's carry of `1` (In this case since `C₀ = 0` we can also say `C₁ = G₀`). 
Similary we can write the expressions for all columns.

`C₀ = 0`  
`C₁ = G₀ + P₀C₀`  
`C₂ = G₁ + P₁C₁`  
`C₃ = G₂ + P₂C₂`

or

`C₀ = 0`  
`C₁ = G₀ + P₀C₀`  
`C₂ = G₁ + P₁G₀ + P₁P₀C₀`  
`C₃ = G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀`

> Don't confuse `+` here with addition, we're not adding numbers here. The `+` here means logical OR, and multiplication means logical AND. These equations let hardware derive several carry values at once, using a tree of gates, rather than treating a carry as a message that must physically visit every full adder in sequence. 

<CarryEquationDemo />

Once we have the carry value for each column, we're good to proceed with our goal, which was a simple addition of the 2 binary numbers.

Addition became a 3 step process now. 
1. Calculate `P` and `G` values for each column.
2. Calculate carry value for each column.
3. Do addition for all columns using full adder.

<AdditionDemo mode="lookahead" />

Notice the difference: first every bit produces its P/G signals in parallel; then the carry logic resolves; then all sum bits can resolve together. **It costs more gates and wiring, but it removes the long serial dependency.**

> At the cost of gates and wiring, we reduced the time complexity of the addition from O(n) to O(1).

## Why not look ahead across the whole CPU word?

The equations get unwieldy very quickly. In our example 4th column carry is `C₃ = G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀`. That would be 3 OR operations and 6 AND operations (With a requirement of a 4 input AND gate). A direct 64-bit lookahead expression require lot of logic gates with increasing input size. Those costs can make the circuit complex, larger, and more power-hungry than the simple equation suggests.

Real adders therefore use **hierarchy**. A small group—often four bits—computes its own group-propagate and group-generate signals. Another layer looks ahead between groups. The carry path becomes a shallow tree instead of one enormous gate or a 64-stage line.

## Carry select: It always comes down to space vs time

Another practical compromise is the **carry-select adder**. Split a wide number into blocks. The first block computes normally. Every later block computes *two* possible answers simultaneously: one assuming carry-in is 0, another assuming it is 1. When the real carry arrives, a multiplexer selects the already-computed answer.

That trades duplicate adders and multiplexers for speed. Carry lookahead predicts carries through logic; carry select prepares for both possibilities and chooses late. Modern CPU adders often combine these ideas plus other refinements such as prefix trees to hit a balance of latency, complexity, and power.

Addition itself is cheap. Waiting for information is expensive. CPU design is largely the craft of arranging logic so that as little as possible has to wait.
