/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'text': 'text 5s linear infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'float-0': 'float 6s ease-in-out infinite',
        'float-1': 'float 6s ease-in-out infinite 0.2s',
        'float-2': 'float 6s ease-in-out infinite 0.4s',
        'grow-line': 'growLine 1.5s ease-out forwards',
        'fade-in-slide': 'fadeInSlide 0.8s ease-out forwards',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-slow': 'spin-slow 6s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'circuit-path': 'circuit-path 8s linear infinite',
        'node': 'node 20s linear infinite',
      },
      
      keyframes: {
        gradient: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) translateZ(0) rotateY(0deg)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          },
          '25%': {
            transform: 'translateY(-10px) rotateY(5deg)'
          },
          '50%': {
            transform: 'translateY(-10px) translateZ(50px) rotateY(10deg)',
            boxShadow: '0 25px 15px rgba(0,0,0,0.2)'
          },
          '75%': {
            transform: 'translateY(10px) rotateY(-5deg)'
          }
        },
        growLine: {
          '0%': {
            height: '0%'
          },
          '100%': {
            height: '100%'
          }
        },
        fadeInSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(300px) rotate(0deg)',
            opacity: 1
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            transform: 'rotate(360deg) translateX(300px) rotate(-360deg)',
            opacity: 1
          }
        }
      },
      transforms: {
        'perspective-1000': 'perspective(1000px)',
        'rotateY-180': 'rotateY(180deg)',
        'rotateY-0': 'rotateY(0deg)'
      },
      transformStyle: {
        '3d': 'preserve-3d'
      },
      backfaceVisibility: {
        'hidden': 'hidden'
      }
    }
  },
  plugins: [],
  safelist: [
    // Colors
    'bg-blue-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-pink-500',
    'text-blue-500',
    'text-purple-500',
    'text-indigo-500',
    'text-pink-500',
    // Gradients
    'from-blue-500',
    'from-purple-500',
    'from-indigo-500',
    'from-pink-500',
    'to-blue-500',
    'to-purple-500',
    'to-indigo-500',
    'to-pink-500',
    // Borders
    'border-blue-500',
    'border-purple-500',
    'border-indigo-500',
    'border-pink-500',
    // Opacity variations
    'bg-blue-500/10',
    'bg-blue-500/20',
    'bg-purple-500/10',
    'bg-purple-500/20',
    'bg-indigo-500/10',
    'bg-indigo-500/20',
    'bg-pink-500/10',
    'bg-pink-500/20',
    // Border opacity
    'border-blue-500/20',
    'border-blue-500/50',
    'border-purple-500/20',
    'border-purple-500/50',
    'border-indigo-500/20',
    'border-indigo-500/50',
    'border-pink-500/20',
    'border-pink-500/50',
    // Animations
    'animate-float',
    'animate-text',
    'animate-pulse',
    'animate-grow-line',
    'animate-fade-in-slide',
    'animate-float-0',
    'animate-float-1',
    'animate-float-2'
  ]
};