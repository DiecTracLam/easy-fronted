import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from './useMagicColor';

MagicBox.propTypes = {
    
};

function MagicBox(props) {
    const color=useMagicColor();
    // console.log("magic Bxo")
    return (
        <div style={{backgroundColor:color}}>
            dasdsadsa
        </div>
    );
}

export default MagicBox;