import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import classnames from "classnames";
import { Switch , Route, useRouteMatch , Link, useLocation } from "react-router-dom";
TodoFeature.propTypes = {};

function TodoFeature(props) {
    // console.log("ppppppp")
    const match=useRouteMatch()
    useEffect(()=>{
        // console.log("wwwwwwwwwwwwwwwwww")
    },[useLocation().search])
  return (
      <div>
          <Link to={`${match.url}/todoList`}>List</Link>
          <Switch>
              <Route path={`${match.url}/todoList`} component={TodoList} exact/>
              <Route path={`${match.url}/:id`} component={DetailPage}/>
          </Switch>
      </div>
  );
}

export default TodoFeature;
