import React,{useState,useEffect} from 'react';
import "./App.css"




export default () => {
  const[text,setText]=useState("")
  const[todos,setTodos]=useState([])
  const[edit,setEdit]=useState(true)
  const[index,setIndex]=useState("")
  const[value,setValue]=useState("")

// useEffect(()=>
// localStorage.getItem("items") &&
// setTodos(JSON.parse( localStorage.getItem("items")))
// )


  function addItem(e){
      setTodos([...todos,{id:Date.now(),text:text}])
      setText("")
  }
  
  function delItem(id){
     setTodos(todos.filter((todo)  =>todo.id !== id))
  }
  
  function clearAll(){
      setTodos([])
  }
  function handleEdit(todo,index){
    setEdit(false)
    setValue(todo.text)
    setIndex(index)
    console.log(index)
  }
   function handleSave(index,value){
    let todo = todos[index]
    console.log(todo)
    todo.text= value
    let items=todos.filter((index,i)  => i !== index)
    items[index]=todo
    setTodos(items)
     setEdit(true)
  }
  // useEffect((a,b)=>
  //     localStorage.setItem("items",JSON.stringify(b.todos))
  // )
  
  var editStyle={}
  if(edit===true){
      editStyle.display="none"

  }

  return(
   
      <div className="App">
         <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter Text"/>
         <button onClick={addItem}>ADD</button>
         <button onClick={clearAll}>clearAll</button>
            {todos.map((todo,id)=>{
              return(
                <li key={todo.id}>
                  <input
                   value={todo.text}
                   disabled
                   />
                   <button onClick={() => delItem(todo.id)}>DELETE</button>
                   <button onClick={() => handleEdit(todo,id)}>Edit</button>
                </li>
                
           
              )
            })
          }
              <input className="ab"
                         type="text"
                         value={value}
                          style={editStyle}
                         onChange={(e) =>setValue(e.target.value)}/>
            <button className="b"
                onClick={() => handleSave(index,value)}
                style={editStyle}
            >
                Save
            </button> 
      </div>
      
            )      
}


