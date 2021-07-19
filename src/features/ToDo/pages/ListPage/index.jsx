import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import classnames from 'classnames';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
ListPage.propTypes = {};

function ListPage(props) {
  const inittodoList = useMemo(
    () => [
      {
        id: 1,
        title: 'Eat',
        status: 'new',
      },
      {
        id: 2,
        title: 'Sleep',
        status: 'new',
      },
      {
        id: 3,
        title: 'Code',
        status: 'completed',
      },
    ],
    []
  );
  const history = useHistory();
  const location = useLocation();
  const [todoList, setTodoList] = useState(inittodoList);
  const [filterState, setFilterState] = useState(() => {
    const URLparams = queryString.parse(location.search);
    return URLparams.status || 'all';
  });
  console.log('adadadad');
  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params.status);
    setFilterState(params.status || 'all');
  }, [location.search]);

  const HandleTodoclick = (todo, ind) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[ind],
      status: newTodoList[ind].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[ind] = newTodo;
    setTodoList(newTodoList);
  };

  // All todo
  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  // Todo Completed
  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  // New Todo
  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    console.log('nnnnnnnnnnnnnnnnnnnn   ' + filterState);
    return todoList.filter((todo) => filterState === 'all' || todo.status === filterState);
  }, [todoList, filterState]);

  const handleTodoFormSubmit=(values)=>{
    const newTodo={
      id:todoList.length+1,
      title:values.Newtodo,
      status:'new'
    }
    const newArray=[...todoList,newTodo]
    setTodoList(newArray)
  }
  return (
    <div>
      <h3>TodoForm</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <h3>TodoList</h3>
      <TodoList todoList={renderTodoList} onTodoclick={HandleTodoclick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
