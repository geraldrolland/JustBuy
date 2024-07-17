

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {


    keyframes: {
      notbounce: {
        "0%": {transform: "translateY(1000px)"},
        "100%": {transform: "translateY(0)"},
      },

      wiggle: {
        "0%": {transform: "translateY(25px)"},
        "25%": {transform: "translateY(0px)"},
        "50%": {transform: "translateY(25px)"},
        "75%": {transform: "translateY(0px)"},
        "100%": {transform: "translateY(25px)"}
      }
    },
    
    extend: {


      boxShadow: {
        "sha-bbr1124": "1px 1px 2px 4px #efecec",
        "sha-bbr0124": "0 1px 2px 4px #efecec",
        "sha-bbr1024": "1px 0 2px 4px #efecec",
        "sha-bbr0024": "0 0 2px 4px #efecec",
        "sha-btl1124": "-1px -1px 2px 4px #efecec",
        "sha-btl0124": "0 -1px 2px 4px #efecec",
        "sha-btl1024": "-1px 0 2px 4px #efecec",
        "sha-btl0024": "0 0 2px 4px #efecec",
        "sha-gbr1124": "1px 1px 2px 4px #e7eaf6",
        "sha-gbr1024": "1px 0 2px 4px #e7eaf6",
        "sha-gbr0124": "0 1px 2px 4px #e7eaf6",
        "sha-gbr0024": "0 0 2px 4px #e7eaf6",
      },

      colors: {
        favblk: {
          "50blk": "#233142",
          "100blk": "#222831",
          "150blk": "#141010",
          "200blk": "#222831",
          "250blk": "#060608",
          "300blk": "#000000",
          "350blk": "#020205",
          "400blk": "#010101",
          "450blk": "#0b0b0d",
        },

        favblue: {
          "50bl": "#00bbf0",
          "100bl": "#005792",
          "150bl": "#0092ca",
          "200bl": "#007cb9",
          "250bl": "#2772db",
          "300bl": "#5fc9f3",
          "350bl": "#8bffff",
          "400bl": "#3ab1c8",
          "450bl": "#2e79ba",
          "500bl": "#1e549f",
          "550bl": "#22b2da",
          "600bl": "#1e549f",
          "650bl": "#2e94b9",
          "700bl": "#64c4ed",
          "750bl": "#2470a0",
          "800bl": "#8aacff",
          "850bl": "#3b50b2",
          "900bl": "#22559c",
          "950bl": "#0d0cb5",
          "1000bl": "#0962ea",
          "1050bl": "#0e7cf4",
          "1100bl": "#0aa0f6",
          "1150bl": "#645fce",
          "1200bl": "#5b70f3",
          "1250bl": "#4850b9",
          "1300bl": "#6173f4",
          "1350bl": "#4d12ee",
          "1400bl": "#4586ff",
          "1450bl": "#3d289b",
          "1500bl": "#354abf",
          "1550bl": "#3994d6"
        },

        favcol: {
          "col1": "#dbd8e3",
          "col2": "#5c5470",
          "col3": "#e3e3e3",
          "col4": "#f2f2f2",
          "col5": "#e4f1fe",
          "col6": "#ffffff",
          "col7": "#e3f6f5",
          "col8": "#bae8e8",
          "col9": "#e4f1fe",
          "col10": "#8dc6ff",
          "col11": "#22313f",
          "col12": "#34495e",
          "col13": "#eeeeee",
          "col14": "#e0e0e0",
          "col15": "#d3d6db",
          "col16": "#eeeeee",
          "col17": "#f0ab8d",
          "col18": "#f6e4ad",
          "col19": "#90f6d7",
          "col20": "#35bcbf",
          "col21": "#606470",
          "col22": "#93deff",
          "col23": "#f7f7f7",
          "col24": "#fad3cf",
          "col25": "#e8d5b7",
          "col26": "#a696c8",
          "col27": "#363b4e",
          "col28": "#4f3b78",
          "col29": "#927fbf",
          "col30": "#c4bbf0",
          "col31": "#e1eacd",
          "col32": "#bad8b6",
          "col33": "#61b390",
          "col34": "#f638dc",
          "col35": "#ff5da2",
          "col36": "#b643cd",
          "col37": "#fecea8",
          "col38": "#ffcee4",
        }
      },

      margin: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px"
      },
      Top: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px"

      },

      width: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px"

      },

      height: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
      },

      fontSize: {

      },

      fontFamily: {
        sans : ["poppins", "Graphik", "sans-serif"],
      },

      maxWidth: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
      },

      maxHeight: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
      },

      borderWidth: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px"
      },

      borderRadius: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px"

      },

      left: {
        "100": "26rem",
        "104": "30rem",
        "108": "34rem",
        "112": "38rem",
        "116": "42rem",
        "120": "46rem",
        "124": "50rem",
        "128": "54rem",
        "132": "58rem",
        "136": "62rem",
        "140": "66rem",
        "144": "70rem",
        "146": "74rem",
        "150": "80rem",
        "154": "84rem",
        "158": "88rem",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px"
      },

      

      animation: {
        "notbounce": "notbounce 2s ease-in-out",
        "wiggle": "wiggle 4s ease-in-out 2s infinite",
      }
    },
  },

  plugins: [],
}