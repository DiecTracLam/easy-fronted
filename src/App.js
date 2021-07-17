import TodoLices from './RTK/CreateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from './RTK/CreateSlice';

function App() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTodoClick = (todo, idx) => {
    const action = removePost(idx);
    console.log(dispatch)
    dispatch(action);
  };

  return (
    <div className="App">
      <ul>
        {todoList.map((todo, idx) => (
          <li key={todo.id} onClick={() => handleTodoClick(todo, idx)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
