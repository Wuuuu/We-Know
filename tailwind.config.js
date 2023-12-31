/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   NextPoster: ["NEXT-Poster"],
      //   neuemachina: ["neuemachina"],
      //   NextBook: ["NEXT-Book"],
      //   NextBookThin: ["NEXT-Book-Thin"],
      // },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 默认button 背景设置为透明的，导致antd Button组件显示不了背景色
  },
};
