import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

CounDownEdit.propTypes = {
    
};

function CounDownEdit(props) {
    console.log(useRouteMatch().path)
    console.log(useParams())
    console.log(useLocation().search);
    return (
        <div>
            CountDownEdit
        </div>
    );
}

export default CounDownEdit;