import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background-color: #111;
  color: #fff;
  font-family: "Luxurious Script", cursive;
  letter-spacing: 5px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  cursor: pointer;
  user-select: none;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  .show {
    transform: scale(1);
  }
  .hidden {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(0);
  }
`;
export const Logo = styled.h3`
  font-size: 35px;
`;
export const Overlay = styled.div`
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #dfdbd5;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;
