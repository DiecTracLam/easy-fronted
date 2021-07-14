import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useMagicColor.propTypes = {
    
};
function randomColor(){
    const ArrayColor=['green','yellow','red'];
    const randomIndex = Math.trunc(Math.random()*3)
    // console.log(ArrayColor[randomIndex]);
    return ArrayColor[randomIndex];
}

function useMagicColor(props) {
    const [color,setColor]=useState('transparent')

    useEffect(()=>{
        let i=0;
        const colorInterval=setInterval(() => {
            const newColor=randomColor()
            // console.log(i)
            i++;
            setColor(newColor);
            // console.log(color)
        }, 1000);
        return ()=>{
            clearInterval(colorInterval)
        }
    },[])
    // console.log(color)
    return color;
}

export default useMagicColor;