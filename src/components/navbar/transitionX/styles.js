import styled from "styled-components";

export const Wrap = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-bottom: solid 2px #ccc;
    width: 20px;
    transition: 0.3s ease;

    &:after{
      content: '';
      position: absolute;
      top: -8px;
      width: 100%;
      transition: 0.3s ease;
      border-bottom: solid 2px #ccc;
    }

    &:before{
      content: '';
      position: absolute;
      top: 8px;
      width: 100%;
      transition: 0.3s ease;
      border-bottom: solid 2px #ccc;
    }
  }

  .open {
    border-bottom: rgba( 0, 0, 0, 0);
    
    &:after{
      top: 0px;
      transform: rotate(45deg);
    }
    &:before{
      top: 0px;
      transform: rotate(-45deg);
    }
  }
`;
