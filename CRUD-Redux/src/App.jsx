import { useState } from 'react'

import './App.css'
import { add,remove } from './components/store/crudSlice'
import {useDispatch,useSelector} from 'react-redux'

function App() {

  let [ipTask,setIpTask] = useState('')
  const dispatch = useDispatch()
  const allData = useSelector(state=>state.crud)
  const addTask = (data)=>{
    dispatch(add({data,id:Date.now()}))
  }
 
  const removeItem = (id)=>{
    dispatch(remove(id))
  }
  return (
 
   <div className='App'>
    <>
    <label htmlFor="task">Add Something:<input type="text" name='task' id='task' value={ipTask} onChange={(e)=>setIpTask(e.target.value)}/></label>
    <button onClick={()=>addTask(ipTask)}>Add</button>
    </>
    {
      allData.map(ele=>{
        return <><h1 key={ele.id}>{ele.data}</h1><button onClick={()=>removeItem(ele.id)}>remove</button></>
      })
    }

   </div>
  )
}

export default App
