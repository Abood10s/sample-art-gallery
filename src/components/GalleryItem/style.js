import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: "Luxurious Script", cursive;
  border-right: 2px solid rgba(0, 0, 0, 0.25);
  letter-spacing: 5px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  user-select: none;
  cursor: pointer;
  &:hover {
    letter-spacing: 2px;
  }
  &:hover .overlay {
    top: -100%;
  }
  &:hover .img {
    transform: scale(1);
  }
  &:hover .txt {
    color: #fff;
    font-weight: bold;
  }
  &:hover .num {
    opacity: 1;
    bottom: 10%;
  }
`;
export const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;
export const Num = styled.p`
  font-size: 70px;
  color: red;
  opacity: 0.7;
  text-align: center;
  background-color: #000;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 0.5rem;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  bottom: -110%;
  left: 50%;
  transform: translateX(-50%);
`;
export const Overlay = styled.div`
  background-color: #dfdbd5;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
`;
export const Text = styled.h2`
  z-index: 9;
  font-size: 42px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  line-height: 120%;
  font-weight: 550;
`;

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.6);
`;
export const Grid = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Music = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: fixed;
  bottom: 4%;
  right: 2%;
  z-index: 989;
  font-size: 30px;
  cursor: pointer;
  color: red;
  text-align: center;
  background-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.2);
  }
`;
