import styled from "styled-components";

export const Wrap = styled.div`
  cursor: pointer;
  
  div {
    width: 20px;
    height: 15px;
    border-bottom: solid 2px #ccc;
    transition: 0.3s ease;
    position: relative;

    &:after{
      content: '';
      position: absolute;
      top: 0px;
      left: 50%;
      width: 20px;
      transition: 0.3s ease;
      transform: translate(-50%, -50%);
      border-bottom: solid 2px #ccc;
    }

    &:before{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      transition: 0.3s ease;
      border-bottom: solid 2px #ccc;
    }
  }

  .open {
    border: solid 1px #ccc;
    border-radius: 20px;
    height: 20px;
    margin-top: -2.5px;
    padding: 0px;
    
    &:after{
      top: 50%;
      transform: translate(-50%, -50%)rotate(45deg);
      width: 15px;
      border-bottom: solid 1px #ccc;
    }
    &:before{
      transform: translate(-50%, -50%)rotate(-45deg);
      width: 15px;
      border-bottom: solid 1px #ccc;
    }
  }
`;
