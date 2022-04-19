const theme = {
  colors: {
    background: '#21243D',
    text: '#FD9CB6',
    primary: '#9d4edd',
    secondary: '#F5F5F5',
    var: '#ff7096',
    varName: '#30338e',
  },
  animation: {
    fadeIn: (delay = 0.5) => `slideIn 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) ${delay}s both`,
  },
  // se for fazer light theme mas acho q nao
  light: {
    background: '#F4F4F4',
    text: '#252A34',
    primary: '#FF7315',
    secondary: '#232020',
  },
};

export default theme;

// background: '#364F6B',
// text: '#3FC1C9',
// primary: '#FC5185',
// secondary: '#F5F5F5',

// background: '#21243D',
// text: '#FF7C7C',
// primary: '#FFD082',
// secondary: '#88E1F2',

// background: '#192965',
// text: '#F0EFEF',
// primary: '#BBCFFF',
// secondary: '#FAAFFF',

// background: '#21243D',
// text: '#FF7C7C',
// primary: '#FFD082',
// secondary: '#88E1F2',
