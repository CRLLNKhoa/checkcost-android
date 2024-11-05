import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#f6f8f7",
            "100": "#eaefec",
            "200": "#dee5e0",
            "300": "#d2dcd5",
            "400": "#c5d2c9",
            "500": "#b9c9be",
            "600": "#99a69d",
            "700": "#78837c",
            "800": "#585f5a",
            "900": "#383c39",
            "foreground": "#000",
            "DEFAULT": "#b9c9be"
          },
          "primary": {
            "50": "#ecf9f0",
            "100": "#d1f0dc",
            "200": "#b6e7c7",
            "300": "#9cdeb3",
            "400": "#81d59e",
            "500": "#66cc8a",
            "600": "#54a872",
            "700": "#42855a",
            "800": "#306142",
            "900": "#1f3d29",
            "foreground": "#000",
            "DEFAULT": "#66cc8a"
          },
          "secondary": {
            "50": "#e6efff",
            "100": "#c3d8fe",
            "200": "#a0c1fd",
            "300": "#7daafc",
            "400": "#5a93fc",
            "500": "#377cfb",
            "600": "#2d66cf",
            "700": "#2451a3",
            "800": "#1a3b77",
            "900": "#11254b",
            "foreground": "#000",
            "DEFAULT": "#377cfb"
          },
          "success": {
            "50": "#dff4ed",
            "100": "#b3e5d4",
            "200": "#86d6ba",
            "300": "#59c7a1",
            "400": "#2db887",
            "500": "#00a96e",
            "600": "#008b5b",
            "700": "#006e48",
            "800": "#005034",
            "900": "#003321",
            "foreground": "#000",
            "DEFAULT": "#00a96e"
          },
          "warning": {
            "50": "#fff7df",
            "100": "#ffecb3",
            "200": "#ffe086",
            "300": "#ffd559",
            "400": "#ffc92d",
            "500": "#ffbe00",
            "600": "#d29d00",
            "700": "#a67c00",
            "800": "#795a00",
            "900": "#4d3900",
            "foreground": "#000",
            "DEFAULT": "#ffbe00"
          },
          "danger": {
            "50": "#ffeaeb",
            "100": "#ffcdd0",
            "200": "#ffb0b4",
            "300": "#ff9298",
            "400": "#ff757d",
            "500": "#ff5861",
            "600": "#d24950",
            "700": "#a6393f",
            "800": "#792a2e",
            "900": "#4d1a1d",
            "foreground": "#000",
            "DEFAULT": "#ff5861"
          },
          "background": "#F7F7F7",
          "foreground": {
            "50": "#dfe9e3",
            "100": "#b3c9bb",
            "200": "#86aa93",
            "300": "#598b6b",
            "400": "#2d6b43",
            "500": "#004c1b",
            "600": "#003f16",
            "700": "#003112",
            "800": "#00240d",
            "900": "#001708",
            "foreground": "#fff",
            "DEFAULT": "#004c1b"
          },
          "content1": {
            "DEFAULT": "#e0f5e8",
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#c2ebd0",
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#a3e0b9",
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#85d6a1",
            "foreground": "#000"
          },
          "focus": "#66cc8a",
          "overlay": "#000000",
          "divider": "#111111"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#151215",
            "100": "#241f24",
            "200": "#322b32",
            "300": "#413841",
            "400": "#6c656c",
            "500": "#979297",
            "600": "#c1bec1",
            "700": "#ecebec",
            "foreground": "#fff",
            "DEFAULT": "#322b32"
          },
          "primary": {
            "50": "#472f18",
            "100": "#785029",
            "200": "#aa713a",
            "300": "#db924b",
            "400": "#e3ab74",
            "500": "#ebc39c",
            "600": "#f3dcc5",
            "700": "#fbf4ed",
            "foreground": "#000",
            "DEFAULT": "#aa713a"
          },
          "secondary": {
            "50": "#1d2b2c",
            "100": "#32494a",
            "200": "#466668",
            "300": "#5a8486",
            "400": "#7fa0a1",
            "500": "#a4bbbc",
            "600": "#c9d7d8",
            "700": "#eff3f3",
            "foreground": "#fff",
            "DEFAULT": "#466668"
          },
          "success": {
            "50": "#333b2c",
            "100": "#56654a",
            "200": "#7a8e69",
            "300": "#9db787",
            "400": "#b3c7a2",
            "500": "#c9d7bd",
            "600": "#dfe8d8",
            "700": "#f5f8f3",
            "foreground": "#000",
            "DEFAULT": "#7a8e69"
          },
          "warning": {
            "50": "#53441f",
            "100": "#8c7434",
            "200": "#c6a34a",
            "300": "#ffd25f",
            "400": "#ffdc83",
            "500": "#ffe6a7",
            "600": "#fff0cb",
            "700": "#fffbef",
            "foreground": "#000",
            "DEFAULT": "#c6a34a"
          },
          "danger": {
            "50": "#52302a",
            "100": "#8b5247",
            "200": "#c37364",
            "300": "#fc9581",
            "400": "#fdad9d",
            "500": "#fdc5ba",
            "600": "#feddd6",
            "700": "#fff4f2",
            "foreground": "#000",
            "DEFAULT": "#c37364"
          },
          "background": "#20161F",
          "foreground": {
            "50": "#40341f",
            "100": "#6c5735",
            "200": "#997b4a",
            "300": "#c59f60",
            "400": "#d2b584",
            "500": "#dfcaa8",
            "600": "#ece0cb",
            "700": "#f9f5ef",
            "foreground": "#000",
            "DEFAULT": "#997b4a"
          },
          "content1": {
            "DEFAULT": "#2c1f2b",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#3e2b3c",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#50374d",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#62435f",
            "foreground": "#fff"
          },
          "focus": "#db924b",
          "overlay": "#ffffff",
          "divider": "#ffffff"
        }
      }
    },
    "layout": {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
  })],
}
