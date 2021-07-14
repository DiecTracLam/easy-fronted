import React, { useState } from "react";
import PropTypes from "prop-types";

const CountButton=React.memo(function CountButton({onClick, count,index}) {
    console.log(index)
    return <button onClick={onClick}>{count}</button>
  })
  function DualCounter() {
    const [count1, setCount1] = React.useState(0)
    const increment1 = React.useCallback(() => setCount1(c => c + 1),[count1])
    const [count2, setCount2] = React.useState(0)
    const increment2 = React.useCallback(() => setCount2(c => c + 1),[count2])
    const data=React.useMemo(() => {console.log("123") }, [])
    return (
      <>
        <CountButton index="1" count={count1} onClick={increment1} />
        <CountButton index="2" count={count2} onClick={increment2} />
      </>
    )
  }
export default DualCounter
