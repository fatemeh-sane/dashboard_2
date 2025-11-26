/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontfamily:{
      'sans':['Pinar']
    },
    extend: {
      colors:{
        // bgColor:linearGradient("F8F9FA,F4F9FF"),
        primary:"#B5C0D0",
        secondary:"#CCD3CA",
        Third:"#EED3D9",
        subOrange:"#FFA800",
        mainPink:"#F6D9DF",
        subPink:"#FF9F9F",
        mainBlue:"#A7B8D0",
        subBlue:"#294D62",
        subBlue1:"#0B4359",
        mainGreen:"#CCD3CA",
        subGreen:"#44713D",
        mainPurple:"#F3EFFB",
        subPurple:"#8950FC",
        colorActive:"#A6BBA0",
        colorInactive:"#C9CDC7",
        white:"#FFFFFF",
        number:"#585858",
        subNumber:"#505D6F",
        blackText:"#000000",



      }
    },
    fontFamily:{
      pinar:['pinar','sans-serif'],
      pinarB:['pinar','sans-serif']

    }
  },
  plugins: [],
}

