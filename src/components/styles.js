import styled from "styled-components/";
import { motion } from "framer-motion";
export const Back = styled.div`
  background-image: url("../assets/bg.svg");
`;

export const BgImage = styled.img`
  position: absolute;
  height: 50rem;
  width: 50rem;
  top: -10%;
  left: 50%;
`;
export const BgCover = styled.div`
  position: absolute;
  background: #000;
  background: #c4c4c445;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
`;

export const Left = styled(motion.div)`
  text-align: left;
  padding: 1rem;
  h1 {
    font-weight: 600;
    font-size: 3rem;
  }

  p {
    opacity: 0.7;
    margin-bottom: 0px;
  }

  h2 {
    font-weight: 400;
    margin-top: 0px;
    color: black;
  }

  h3,
  p {
    cursor: pointer;
  }
`;

export const TitleBar = styled.div`
  height: 1.4rem;
  width: 100%;
  background-color: #b4b4b4;
`;

export const Wrap = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Right = styled(motion.div)`
  scroll-behavior: smooth;
  height: 80vh;
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 5rem;
  overflow: auto;
`;

export const Flex = styled.div`
  display: flex;
`;
export const Window = styled.div`
  margin: auto;
  width: 90%;
  height: 90%;
  margin-top: 2rem;
  /* box-shadow:1px 1px 5px 15px #00000011; */
  border: 1px solid #00000044;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -3px 3px 40px 20px #99999921;
  background: #c4c4c445;
  backdrop-filter: blur(60px);
`;
export const NoteTitle = styled.div`
  /* background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "#FF8769"}; */
  background-image: linear-gradient(90deg, #ff63a0, #ff8769);

  position: relative;
  bottom: 0px;
  height: 0.25rem;
  width: 120%;
  margin-left: -10px;
`;
export const Note = styled(motion.div)`
  margin: 0.5rem;
  border: 0.5px solid #80808031;
  border-bottom: none;
  padding: 0px;
  overflow: hidden;
  box-shadow: 0px 1px 0px 0px #ff63a0;
  padding: 0px;
  border-radius: 5px;
  box-sizing: border-box;
  /* padding-bottom:5px; */
  background-color: ${({ color }) => color || "#ffffff41"};
  backdrop-filter: blur(10px);
  padding-bottom: 1em;
  z-index: 100;
  h6 {
    margin: 1rem;
    text-align: left;
    font-size: 1.2rem;
  }
  p {
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: left;
    max-height: 7rem;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    font-size: 0.8rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .icons {
    visibility: hidden;
    position: absolute;
    right: 0;
    padding: 0.5rem;
    display: inline-block;
    right: 0;
  }
  #del {
    transition-duration: 200ms;
    padding: 0.5rem;
  }
  #del:hover {
    color: red;
  }
  &:hover {
    .icons {
      visibility: visible;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 90%;
  height: 2rem;
  background: none;
  border: none;
  /* border-bottom: 1px solid gray; */
  margin: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "poppins";
  font-weight: bold;
  font-weight: 500;
  &:focus {
    outline: none;
  }

  &:first-child {
    text-transform: uppercase;
  }
`;
export const TextArea = styled.textarea`
  display: block;
  font-family: "poppins";
  font-weight: 300;
  max-width: 90%;
  min-width: 90%;
  max-height: 25rem;
  min-height: 25rem;
  background: none;
  font-size: 1.4rem;
  border: none;
  margin: 2rem;

  &:focus {
    border: none;
    outline: none;
  }
`;
export const New = styled(motion.div)`
  /* border: 1px solid green; */
  height: 90%;
  width: 100%;
  margin-top: 2rem;
`;
