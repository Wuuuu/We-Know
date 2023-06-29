/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "swiper-btn-bg":
          "linear-gradient(270deg, #030303 0%, rgba(3, 3, 3, 0.80) 55.46%, rgba(3, 3, 3, 0.00) 100%)",
        "g-gradient-type1": "bg-gradient-to-b from-[#38C1A5] to-[#0891D5]",
      },
      fontFamily: {
        NextPoster: ["NEXT-Poster"],
        neuemachina: ["neuemachina"],
        NextBook: ["NEXT-Book"],
        NextBookThin: ["NEXT-Book-Thin"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 默认button 背景设置为透明的，导致antd Button组件显示不了背景色
  },
};
