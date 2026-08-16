/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#f1faf2',
          100: '#dcf2df',
          200: '#bbe5c0',
          300: '#a6ddab',
          400: '#8ed495',
          500: '#5bb664',
          600: '#397740',
          700: '#315f37',
          800: '#294e2f',
          900: '#294e2f',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h2: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            h3: {
              color: theme('colors.gray.900'),
              fontFamily: theme('fontFamily.serif').join(', '),
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.primary.400'),
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
