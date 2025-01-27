/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme colors for buttons and UI elements
    'bg-blue-50',
    'bg-blue-100',
    'bg-blue-600',
    'bg-blue-700',
    'text-blue-600',
    'text-blue-700',
    'text-blue-800',
    'text-blue-900',
    'border-blue-500',
    'border-blue-200',
    'hover:bg-blue-700',
    'hover:text-blue-700',
    'hover:bg-blue-50',
    
    'bg-green-50',
    'bg-green-100',
    'bg-green-600',
    'bg-green-700',
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-green-900',
    'border-green-500',
    'border-green-200',
    'hover:bg-green-700',
    'hover:text-green-700',
    'hover:bg-green-50',
    
    'bg-sky-50',
    'bg-sky-100',
    'bg-sky-600',
    'bg-sky-700',
    'text-sky-600',
    'text-sky-700',
    'text-sky-800',
    'text-sky-900',
    'border-sky-500',
    'border-sky-200',
    'hover:bg-sky-700',
    'hover:text-sky-700',
    'hover:bg-sky-50',
    
    'bg-red-50',
    'bg-red-100',
    'bg-red-600',
    'bg-red-700',
    'text-red-600',
    'text-red-700',
    'text-red-800',
    'text-red-900',
    'border-red-500',
    'border-red-200',
    'hover:bg-red-700',
    'hover:text-red-700',
    'hover:bg-red-50',

    // Additional new theme colors
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-600',
    'bg-purple-700',
    'text-purple-600',
    'text-purple-700',
    'text-purple-800',
    'text-purple-900',
    'border-purple-500',
    'border-purple-200',
    'hover:bg-purple-700',
    'hover:text-purple-700',
    'hover:bg-purple-50',

    'bg-indigo-50',
    'bg-indigo-100',
    'bg-indigo-600',
    'bg-indigo-700',
    'text-indigo-600',
    'text-indigo-700',
    'text-indigo-800',
    'text-indigo-900',
    'border-indigo-500',
    'border-indigo-200',
    'hover:bg-indigo-700',
    'hover:text-indigo-700',
    'hover:bg-indigo-50',

    'bg-amber-50',
    'bg-amber-100',
    'bg-amber-600',
    'bg-amber-700',
    'text-amber-600',
    'text-amber-700',
    'text-amber-800',
    'text-amber-900',
    'border-amber-500',
    'border-amber-200',
    'hover:bg-amber-700',
    'hover:text-amber-700',
    'hover:bg-amber-50',

    'bg-emerald-50',
    'bg-emerald-100',
    'bg-emerald-600',
    'bg-emerald-700',
    'text-emerald-600',
    'text-emerald-700',
    'text-emerald-800',
    'text-emerald-900',
    'border-emerald-500',
    'border-emerald-200',
    'hover:bg-emerald-700',
    'hover:text-emerald-700',
    'hover:bg-emerald-50',

    'bg-teal-50',
    'bg-teal-100',
    'bg-teal-600',
    'bg-teal-700',
    'text-teal-600',
    'text-teal-700',
    'text-teal-800',
    'text-teal-900',
    'border-teal-500',
    'border-teal-200',
    'hover:bg-teal-700',
    'hover:text-teal-700',
    'hover:bg-teal-50',

    'bg-cyan-50',
    'bg-cyan-100',
    'bg-cyan-600',
    'bg-cyan-700',
    'text-cyan-600',
    'text-cyan-700',
    'text-cyan-800',
    'text-cyan-900',
    'border-cyan-500',
    'border-cyan-200',
    'hover:bg-cyan-700',
    'hover:text-cyan-700',
    'hover:bg-cyan-50',

    // Additional safelist for dynamic color classes
    'bg-yellow-50',
    'bg-yellow-100',
    'bg-yellow-600',
    'bg-yellow-700',
    'text-yellow-600',
    'text-yellow-700',
    'text-yellow-800',
    'border-yellow-200',
    'hover:bg-yellow-700',
    
    // Explicit color variations for correct/incorrect states
    'bg-green-100',
    'bg-red-100',
    'border-green-500',
    'border-red-500',
    'text-green-600',
    'text-red-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
