import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Switch, useRouteMatch, Route, Link } from "react-router-dom";
import CountDown from "./CountDown/CountDown";
import CountDownEdit from "./CounDownEdit/CounDownEdit";
Countdown.propTypes = {};

function Countdown(props) {
  const match = useRouteMatch();
  return (
    <>
      <Link to={`${match.url}/id`}>Edit</Link>
      <Switch>
        <Route path={"/Countdown"} component={CountDown} exact />
        <Route path={"/Countdown/:id"} component={CountDownEdit} />
      </Switch>
    </>
  );
}

export default Countdown;
