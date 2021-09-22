import React, { useState } from "react";
import { Wrap } from "./styles"

const TransitionRoundX = () => {
  const [active, setActive] = useState('');

  const handleClick = () => {
    if(active === '') {
      setActive('open')
    } else {
      setActive('')
    }
  }

  return (
    <Wrap onClick={handleClick}>
        <div className={active}></div>
    </Wrap>
  );
}

export default TransitionRoundX