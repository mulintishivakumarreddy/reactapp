import React from "react"

function Todolist(){
    const [todos,setTodo]=React.useState(["play cricket","watch movie","eat food"])
    const [ntd,setntd]=React.useState("")
    function AddTodo(){
        setTodo((ctodo)=>{
            return [...ctodo, ntd]
        })
    }
return (<div>
<input type="text" value={ntd} onChange={(e)=>setntd(e.target.value)}/>    <button onClick={AddTodo}>Addtodo</button>
    {todos.map((todo,i)=>{
        return<li key={i}>{todo}</li>
    })}
</div>)
}
export default Todolist;