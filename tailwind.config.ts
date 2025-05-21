/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan the ENTIRE src folder
    "./public/**/*.html", // Scan public files
  ],
  theme: {
    extend: {
      colors: {
        background: "#2A7C76", // Teal for the background
        foreground: "#333333", // Dark text for readability
        cardBg: "#FFF9E6", // Cream color for cards
        
        /* Primary Brand Colors */
        primary: "#F5A623", // Yellow like Quilly’s name
        "primary-foreground": "#402C12", // Darker shade for contrast

        secondary: "#F28C38", // Orange like the feather
        "secondary-foreground": "#50341A", // Adjusted for readability

        accent: "#F06292", // Pink like the feather dots
        "accent-foreground": "#612341", // Improved contrast
        
        muted: "#A0D9D9", // Soft teal tone
        "muted-foreground": "#174C4C", // Darker teal for readable contrast

        border: "#DADADA", // Subtle gray border
        ring: "#F5A623", // Orange ring glow effect for focus
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Clean modern text
        serif: ["Playfair Display", "serif"], // Elegant for headings
        comic: ["Comic Neue", "sans-serif"], // Fun option for playful UI
      },
      borderRadius: {
        DEFAULT: "1rem", // Nice round corners for everything
        lg: "1.5rem", // Extra-rounded elements
        xl: "2rem", // Large round UI components
      },
    },
  },
  plugins: [],
};
