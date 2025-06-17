/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontWeight:
    {
      "ssbold":"500"
    },
    extend: {},
    screens:
    {
      'vsmall':{'max':'370px'},
      'small':{'max':'1030px'}
    }
  },
  plugins: [],
}

