---
title: "Ant Colony: Swarm Intelligence"
date: "2026-05-10"
excerpt: "An asthetic implementation of ant colony algorithm, and mention of some key ideas which turns an ant colony intelligent"
tags: ["AI", "HTML Canvas"]
---

I'm a fan of procedural animations, where a few simple rules somehow create something that looks beautifully complex.

Ant Colony Optimization (ACO) is one such example. Introduced in the 90s, It was pitched as an approximate solution for NP-hard problems like the Traveling Salesman Problem. I've implemented a simpler version of this algorithm. Adding the link below. It looks little choppy on mobile, Better checkout on a desktop.

> Try here : https://harshithalwan.github.io/ant-colony/

> Code here : https://github.com/Harshithalwan/ant-colony 

The core idea is that a seemingly "dumb" creature like an ant can solve complex problems when working in a group. That's called Swarm Intelligence.

In the simulation, ants wander randomly around a canvas. When they find food, they collect it and head back home.

> So how do they know where home is? Dead Reckoning!

This is one of the coolest things I learned while reading about ants. They have an unbelievable system called path integration, or "dead reckoning" (such a cool name for something an ant does). They keep track of how far they've traveled and which direction they're facing. If you pick up an ant away from its nest, it can draw a direct vector pointing straight back to its nest. So once a wandering ant finds food, it knows exactly how to return back home.

While returning, ants lay down pheromone trails. Other ants can sense these trails and follow them toward the food. The more ants follow the same path, the stronger the trail gets, so it becomes a self-reinforcing loop.

>    A few things I kept simple in the implementation:

>    In reality, lot of ants leave different kinds of pheromones, for e.g. for finding food, returning home, wandering, etc. In the implementation, you'll see a wandering trail but that's just for the aesthetics of it and it's not used in any calculations.

>    The original ACO algorithm also lets ants choose after finding food: either follow the trail (exploitation) or keep wandering (exploration). That's closer to real ant behavior.

Over time, pheromones evaporate. This ensures that faraway food gets penalized compared to nearby food. Shorter paths accumulate more pheromones because ants complete round trips faster, leaving less time for evaporation before more pheromones get deposited.

>    I've added an evaporation rate slider — try tweaking it. If the evaporation rate is too low, you'll see similar numbers of ants gathering on the trails of close and far-away food sources.

With just these rules of depositing pheromones, evaporating them, let ants follow trails, and the dead reckoning, a beautiful behavior emerges. Try adding a few food sources. Usually the closer ones get depleted faster. I say usually because the algorithm is probabilistic. There's always a chance that no wandering ant stumbles upon a nearby food source before a far-away one gets found and emptied.

This is built using JavaScript canvas to paint the ants and their trails. The wandering behavior has randomness built in, so it actually looks like an ant moving around. I also added a little randomness to the return trails cause ants don't follow the exact same line every time also because it looks cooler.

If you let it run a while, You'll see beautiful patterns.

I hope to write more about how this can solve problems like the Traveling Salesman Problem. But for now, I'll just stare at the ants for a while.