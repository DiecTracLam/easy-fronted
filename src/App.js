import Countdown from './features/CountDownList';
import Todo from './Components/Todo';
import MagicBox from './Components/MagicBox';
import DualCounter from './Components/TodoList';
import TodoFeature from './features/ToDo';
import { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import productApi from './api/productApi';
import Header from 'Components/Header'

function App() {

  useEffect(()=>{
    async function fetchData(){
      const params={
        _limit:10
      }
      // const productList= await productApi.getAll(params);
      // console.log(productList)
    }
    fetchData()
  },[])

  const [count,setCount]=useState(false)

  function change(e){
    setCount(Count=>!Count)
  }
  return (
    <div className="App">
        <Header />

        <Route path="/" component={MagicBox}/>
        <Route path="/Countdown" component={Countdown} />
        <Route path="/Todo" component={TodoFeature} />
        <p onClick={change}>do</p>
        {/* {count &&<Todo/>}
        <Countdown/>
        <MagicBox/>
        <DualCounter/> */}
    </div>
  );
}

export default App;
