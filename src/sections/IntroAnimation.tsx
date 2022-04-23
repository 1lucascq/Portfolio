import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const lines = [
  'const dev = [',
  "name: 'Lucas',",
  "level: 'Jr',",
  'techStack: [',
  "'HTML/CSS', 'JavaScript'],",
  "'TypeScript', 'React'",
  "'SQL', 'Node.js',",
  '],',
  'openToWork: true,',
  '}',
];

// TODO: check if it is necessary to regulate the overall speed
const speed = 0.5;

const delay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const AnimationWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Courier New', Courier, monospace;
  
  div {
    display: flex;
    text-align: start;
  }

  .wrapper {
    flex-direction: column;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
    width: 17em;
    margin-left: 4em;
    color: whitesmoke;
  }

  div.wrapper div:not(:first-child) {
    margin-left: 1em;
  }

  .tech-stack-wrapper {
    display: grid;
    flex-wrap: wrap;
  }

  .tech-stack-wrapper p:nth-child(2), p:nth-child(3), p:nth-child(4) {
    margin-left: 1em;
  }

  .line1 {
    position: relative;
  }

  .line1::before, .line1::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line1::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[0].length}) ${delay[0]}s forwards;
  }

  .line1::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[0].length}) ${delay[0]}s forwards,
      blink 800ms steps(${lines[0].length * 5}) ${delay[0]}s 1.25;
  }

  .line2 {
    position: relative;
  }

  .line2::before, .line2::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line2::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[1].length}) ${delay[1]}s forwards;
  }

  .line2::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[1].length}) ${delay[1]}s forwards,
      blink 800ms steps(${lines[1].length * 5}) ${delay[1]}s 1.25;
  }

  .line3 {
    position: relative;
  }

  .line3::before, .line3::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line3::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[2].length}) ${delay[2]}s forwards;
  }

  .line3::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[2].length}) ${delay[2]}s forwards,
      blink 800ms steps(${lines[2].length * 5}) ${delay[2]}s 1.25;
  }

  .line4 {
    position: relative;
  }

  .line4::before, .line4::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line4::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[3].length}) ${delay[3]}s forwards;
  }

  .line4::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[3].length}) ${delay[3]}s forwards,
      blink 800ms steps(${lines[3].length * 5}) ${delay[3]}s 1.25;
  }

  .line5 {
    position: relative;
  }

  .line5::before, .line5::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line5::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[4].length}) ${delay[4]}s forwards;
  }

  .line5::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[4].length}) ${delay[4]}s forwards,
      blink 800ms steps(${lines[4].length * 7}) ${delay[4]}s 1.25;
  }

  .line6 {
    position: relative;
  }

  .line6::before, .line6::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line6::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[5].length}) ${delay[5]}s forwards;
  }

  .line6::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[5].length}) ${delay[5]}s forwards,
      blink 800ms steps(${lines[5].length * 7}) ${delay[5]}s 1.25;
  }

  .line7 {
    position: relative;
  }

  .line7::before, .line7::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line7::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[6].length}) ${delay[6]}s forwards;
  }

  .line7::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[6].length}) ${delay[6]}s forwards,
      blink 800ms steps(${lines[6].length * 7}) ${delay[6]}s 1.25;
  }

  .line8 {
    position: relative;
  }

  .line8::before, .line8::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line8::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[7].length}) ${delay[7]}s forwards;
  }

  .line8::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[7].length}) ${delay[7]}s forwards,
      blink 800ms steps(${lines[7].length}) ${delay[7]}s 1.25;
  }

  .line9 {
    position: relative;
  }

  .line9::before, .line9::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line9::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[8].length}) ${delay[8]}s forwards;
  }

  .line9::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(${lines[8].length}) ${delay[8]}s forwards,
      blink 800ms steps(${lines[8].length * 5}) ${delay[8]}s 1.25;
  }

  .line10 {
    position: relative;
  }

  .line10::before, .line10::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .line10::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${speed}s steps(${lines[9].length}) ${delay[9]}s forwards;
  }

  .line10::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${speed}s steps(2) ${delay[9]}s forwards,
      blink 800ms steps(2) ${delay[9]}s infinite
    /* animation:
      typewriter ${speed}s steps(${lines[9].length}) ${delay[9]}s forwards,
      blink 800ms steps(${lines[9].length}) ${delay[9]}s infinite; */
  }

  .const-highlight {
    color: #e00070;
  }

  .constName-highlight {
    color: blueviolet;
  }

  .string-highlight {
    color: #ecec47;
  }

  .bracket-highlight {
    color: #62bedd;
  }

  .white-highlight {
    color: whitesmoke;
  }

`;

const Animation = (): JSX.Element => {
  const line1 = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (line1.current !== null) {
      console.log(line1.current?.classList);
    }
    console.log(line1.current?.style.animation);
  }, [line1]);

  console.log('render');
  return (
    <AnimationWrapper>
      <div className="wrapper">
        <div>
          <p className="line1" ref={line1}>
            <span className="const-highlight">const</span>
          &nbsp;
            <span className="constName-highlight">dev&nbsp;</span>
            <span className="const-highlight">
              =
              {' '}
              {'{'}
            </span>
          </p>
        </div>
        <div>
          <p className="line2">
            <span className="objKey-highlight">name</span>
            <span className="const-highlight">:</span>
          &nbsp;
            <span className="string-highlight">&apos;Lucas&apos;</span>
            ,
          </p>
        </div>

        <div>
          <p className="line3">
            level
            <span className="const-highlight">:</span>
          &nbsp;
            <span className="string-highlight">&apos;Jr&apos;</span>
            ,
          </p>
        </div>

        <div className="tech-stack-wrapper">
          <div>
            <p className="line4">
              techStack
              <span className="const-highlight">:</span>
            &nbsp;
              <span className="bracket-highlight">[</span>
            </p>
          </div>
          <div>
            <p className="line5">
              <span className="string-highlight">&apos;HTML/CSS&apos;</span>
              ,
              {' '}
              <span className="string-highlight">&apos;JavaScript&apos;</span>
              ,
            </p>
          </div>
          <div>
            <p className="line6">
              <span className="string-highlight">&apos;TypeScript&apos;</span>
              ,
              {' '}
              <span className="string-highlight">&apos;React&apos;</span>
              ,
            </p>
          </div>
          <div>
            <p className="line7">
              <span className="string-highlight">&apos;SQL&apos;</span>
              ,
              {' '}
              <span className="string-highlight">&apos;Node.js&apos;</span>
              ,
            </p>
          </div>

          <div>
            <p className="line8">
              <span className="bracket-highlight">
                ]
                <span className="white-highlight">,</span>
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="line9">
            openToWork
            <span className="const-highlight">:</span>
          &nbsp;
            <span className="constName-highlight">true</span>
            ,
          </p>
        </div>
        <div>
          <p className="line10 const-highlight">
            {'}'}
          </p>
        </div>

      </div>

    </AnimationWrapper>

  );
};

export default Animation;

// import React from 'react';
// import styled from 'styled-components';
// // import TypewriterAnimation from '../components/TypewriterAnimation';

// const AnimationWrapper = styled.section`
//   .const-highlight {
//     color: #c0ad60;
//   }
//   .string-highlight {
//     color: rgba(253, 149, 90, 0.8);
//   }

//   #typewriter {
//     font-size: 2em;
//     margin: 0;
//     font-family: "Courier New";

//     &:after {
//       content: "|";
//       animation: blink 500ms linear infinite alternate;
//     }
//   }

//   @-webkit-keyframes blink {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }

//   @-moz-keyframes blink {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }

//   @keyframes blink {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

// const Animation = (): JSX.Element => {
//   function setupTypewriter(t) {
//     const HTML = t.innerHTML;

//     t.innerHTML = '';

//     let cursorPosition = 0;
//     let tag = '';
//     let writingTag = false;
//     let tagOpen = false;
//     const typeSpeed = 100;
//     let tempTypeSpeed = 0;

//     const type = (): void => {
//       if (writingTag === true) {
//         tag += HTML[cursorPosition];
//       }

//       if (HTML[cursorPosition] === '<') {
//         tempTypeSpeed = 0;
//         if (tagOpen) {
//           tagOpen = false;
//           writingTag = true;
//         } else {
//           tag = '';
//           tagOpen = true;
//           writingTag = true;
//           tag += HTML[cursorPosition];
//         }
//       }
//       if (!writingTag && tagOpen) {
//         tag.innerHTML += HTML[cursorPosition];
//       }
//       if (!writingTag && !tagOpen) {
//         if (HTML[cursorPosition] === ' ') {
//           tempTypeSpeed = 0;
//         } else {
//           tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//         }
//         t.innerHTML += HTML[cursorPosition];
//       }
//       if (writingTag === true && HTML[cursorPosition] === '>') {
//         tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//         writingTag = false;
//         if (tagOpen) {
//           const newSpan = document.createElement('span');
//           t.appendChild(newSpan);
//           newSpan.innerHTML = tag;
//           tag = newSpan.firstChild;
//         }
//       }

//       cursorPosition += 1;
//       if (cursorPosition < HTML.length - 1) {
//         setTimeout(type, tempTypeSpeed);
//       }
//     };

//     return {
//       type,
//     };
//   }

//   const typer = document.getElementById('typewriter');

//   const typewriter = setupTypewriter(typewriter);

//   typewriter.type();

//   return (
//     // <TypewriterAnimation />
//     <AnimationWrapper>
//       <pre id="typewriter">
//         <span className="const-highlight">const</span>
//         {' '}
//         dev =
//         {' '}
//         {'{'}
//         name:
//         {' '}
//         <span className="string-highlight">&apos;Foo&apos;</span>
//         , type:
//         {' '}
//         <span className="string-highlight">&apos;Bar&apos;</span>
//         , location:
//         {' '}
//         <span className="string-highlight">&apos;Earth&apos;</span>
//         , properties:[
//         <span className="string-highlight">&apos;Javascript&apos;</span>
//         ,
//         <span className="string-highlight">&apos;HTML&apos;</span>
//         ,
//         <span className="string-highlight">&apos;CSS&apos;</span>
//         ];
//         {'}'}
//         ;
//       </pre>
//     </AnimationWrapper>

//   );
// };

// export default Animation;
