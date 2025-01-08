import { useEffect, useState } from 'react'

import './App.css'
import { add,remove ,edit} from './components/store/crudSlice'
import {useDispatch,useSelector} from 'react-redux'

function App() {
  let [ipTask,setIpTask] = useState('');
  const [iD,setId] = useState('')
  const dispatch = useDispatch()
  const allData = useSelector(state=>state.crud)
  const addTask = (data)=>{
    // console.log(iD)
    if(iD){
      let editArr = allData.map(ele=>{
          if(ele.id == iD){
            return {...ele,data:ipTask}
          }
          return ele;
      })
      // console.log(editArr)
      dispatch(edit(editArr))
      setId('')
      setIpTask('')
    }else{
      dispatch(add({data,id:Date.now()}))
      setIpTask('')
    }
    
  }

  const removeItem = (id)=>{
    dispatch(remove(id))
  }

  const editItem = (id)=>{
    // console.log(id)
    setId(id)
    let findId = allData.find(ele=> ele.id === id)
    // console.log(findId)
    setIpTask(findId.data)
  }
  // useEffect(()=>{
  //   if(iD){
  //     let findId = allData.find(ele=> ele.id === iD)
  //     // console.log(findId)
  //     setIpTask(findId.data)
  //   }
  // },[iD])
  return (
   <div className='App'>
    <>
    <label htmlFor="task">Add Something:<input type="text" name='task' id='task' value={ipTask} onChange={(e)=>setIpTask(e.target.value)}/></label>
    <button onClick={()=>addTask(ipTask)}>Add</button><br />
    </>
    {
      allData?allData.map(ele=>{
        return <><h1 key={ele.id}>{ele.data}</h1><button onClick={()=>removeItem(ele.id)}>remove</button><button onClick={()=>editItem(ele.id)}>edit</button></>
        // return <><input id={ele.id} value={iD===ele.id?editIp?editIp:ele.data:ele.data} onChange={(e)=>setEditIp(e.target.value)} readOnly={state}/><button onClick={()=>removeItem(ele.id)}>remove</button><button onClick={()=>editItem(ele.id)}>edit</button></>
      }):''
    }
   </div>
  )
}

export default App
