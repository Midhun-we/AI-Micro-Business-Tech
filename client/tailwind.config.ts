import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb", // Royal Blue for primary actions/links
                secondary: "#0f172a", // Slate 900 for Headings/Dark backgrounds
                accent: "#dc2626", // Red 600 for "Top Pick" / Urgent CTAs
                background: "#ffffff",
                surface: "#f8fafc", // Slate 50
                text: "#334155", // Slate 700 for body text
                success: "#16a34a",
                warning: "#fab005",
                danger: "#ef4444",
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            }
        },
    },
    plugins: [],
};
export default config;
