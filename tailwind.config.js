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
      'vvsmall':{'max':'320px'},
      'vsmall':{'max':'750px'},
      'small':{'max':'1030px'}
    }
  },
  plugins: [
    
  ],
}

