/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'barber-red': '#E31E24',
                'barber-gold': '#D4B896',
                'barber-gold-dark': '#C4A574',
                'barber-teal': '#4A9B8E',
                'barber-cream': '#F5F5DC',
                'barber-black': '#0A0A0A',
            },
            fontFamily: {
                'heading': ['Bebas Neue', 'sans-serif'],
                'body': ['Roboto', 'sans-serif'],
                'serif': ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'wood-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"wood\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"%3E%3Crect fill=\"%231a1a1a\" width=\"100\" height=\"100\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\"url(%23wood)\" width=\"100\" height=\"100\"/%3E%3C/svg%3E')",
            }
        },
    },
    plugins: [],
}
