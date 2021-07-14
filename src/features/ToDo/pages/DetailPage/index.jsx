import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    console.log(useRouteMatch().params)
    return (
        <div>
            Todo DetailPage
        </div>
    );
}

export default DetailPage;