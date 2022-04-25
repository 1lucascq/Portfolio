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
const speed = 0.7;
const duration = 1;

const delay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const AnimationWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: .5em;
  display: flex;
  /* display: none; */
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
    margin-left: 1.5em;
    color: whitesmoke;
    animation: slideOut 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) 13s both
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
      blink 800ms steps(${lines[0].length * 5}) ${delay[0]}s ${duration};
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
      blink 800ms steps(${lines[1].length * 5}) ${delay[1]}s ${duration};
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
      blink 800ms steps(${lines[2].length * 5}) ${delay[2]}s ${duration};
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
      blink 800ms steps(${lines[3].length * 5}) ${delay[3]}s ${duration};
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
      blink 800ms steps(${lines[4].length * 7}) ${delay[4]}s ${duration};
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
      blink 800ms steps(${lines[5].length * 7}) ${delay[5]}s ${duration};
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
      blink 800ms steps(${lines[6].length * 7}) ${delay[6]}s ${duration};
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
      blink 800ms steps(${lines[7].length}) ${delay[7]}s ${duration};
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
      blink 800ms steps(${lines[8].length * 5}) ${delay[8]}s ${duration};
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

  @keyframes identifier {
    
  }

`;

const Animation = (): JSX.Element => {
  const line1 = useRef<HTMLParagraphElement>(null);
  const animation = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (animation.current) {
      setTimeout(() => {
        document.body.style.overflow = 'visible';
        if (animation.current) {
          animation.current.style.display = 'none';
        }
      }, 14100);
    }
  }, []);
  return (
    <AnimationWrapper ref={animation}>
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
