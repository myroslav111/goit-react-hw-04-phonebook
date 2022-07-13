import styled from '@emotion/styled';

// export const ButtonSubmit = styled.button`
//   position: relative;
//   font-family: inherit;
//   font-size: 25px;
//   padding: 0;
//   width: 200px;
//   height: 50px;
//   margin-top: 30px;
//   border: 2px solid #888888;
//   outline: none;
//   /* background-color: #f4f5f6; */
//   border-radius: 8px;
//   box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff,
//     -20px 0px 30px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.2);
//   transition: 0.13s ease-in-out;
//   cursor: pointer;
//   &:active {
//     box-shadow: none;
//   }

//   background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
//   background-size: 400%;
//   z-index: 1;
//   &:hover {
//     animation: animate 8s linear infinite;
//   }
//   &:before {
//     content: '';
//     position: absolute;
//     top: -5px;
//     left: -5px;
//     right: -5px;
//     bottom: -5px;
//     z-index: -1;
//     background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
//     background-size: 400%;
//     border-radius: 8px;
//     opacity: 0;
//     transition: 0.5s;
//   }
//   &:hover:before {
//     filter: blur(20px);
//     opacity: 1;
//     animation: animate 8s linear infinite;
//   }
// `;

export const ButtonSubmit = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: relative;
  display: inline-block;
  padding: 15px 10px;
  margin: 40px 0;
  font-size: 24px;
  text-decoration: none;
  /* text-transform: uppercase; */
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
  background-color: rgba(227, 9, 9, 0.5);
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  -webkit-box-reflect: below -3px linear-gradient(transparent, #0005);

  &:hover {
    background-color: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  & span {
    position: absolute;
    display: block;
  }
  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animation1 1s linear infinite;
    animation-delay: 0.25s;
  }
  & span:nth-child(2) {
    top: -100;
    right: 0%;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animation2 1s linear infinite;
    animation-delay: 0.25s;
  }
  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animation3 1s linear infinite;
    animation-delay: 0.5s;
  }
  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animation4 1s linear infinite;
    animation-delay: 0.75s;
  }
`;
