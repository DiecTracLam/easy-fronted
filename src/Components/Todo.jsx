import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

Todo.propTypes = {};

function Todo(props) {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);
  const [count,setCount]=useState(0);
  useEffect(() => {
      console.log(`side ${count}`)
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
    }, 1000);
    // setCount(Count=>Count+1);
      console.log("=================================================")
    return () => {
        console.log('cleanup')
      clearInterval(intervalRef.current);
    };
  },[]);

  return <div>dasda</div>;
}

export default Todo;
