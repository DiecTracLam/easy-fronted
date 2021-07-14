import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useRouteMatch } from 'react-router-dom';

Countdown.propTypes = {
  
};

function Countdown(props) {
  const match = useRouteMatch();
  console.log(match)
  const [value,setValue]=useState();
  const typingTimoutRef=useRef(null);
  function change(e){
    typingTimoutRef.current=setTimeout(() => {

    }, 1000);
    if(typingTimoutRef.current){
      console.log('dadadadaada')
      clearTimeout(typingTimoutRef.current)
    }
    console.log(typingTimoutRef.current)
    console.log(e.target.value)
    setValue(e.target.value)
    console.log(value)
  }
  console.log("Value : "+value)
  return (
    <form>
      <input type="text" onKeyUp={change} />
    </form>
  );
}

export default  Countdown;