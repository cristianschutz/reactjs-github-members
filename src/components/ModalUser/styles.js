import styled from "styled-components";
import InfoBox from "../../styles/InfoBox";

export const Container = styled.div`
  align-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 10599;

  .ModalBackdrop {
    background: rgba(0, 0, 0, 0.5);
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  ${InfoBox} {
    margin-bottom: 0;
  }

  button.close {
    position: absolute;
    background: none;
    border: 0;
    cursor: pointer;
    right: -30px;
    top: -30px;

    svg {
      width: 20px;
    }
  }

  .ModalContent {
    background-clip: padding-box;
    background-color: #fff;
    border-radius: 0.3rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    margin: 1.75rem;
    outline: 0;
    pointer-events: auto;
    position: relative;
    position: relative;
    width: 300px;
  }

  @media (max-width: 800px) {
    align-items: flex-start;
  }
`;
