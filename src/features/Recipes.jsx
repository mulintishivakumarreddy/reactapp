import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Recipecard from "./Recipecard"

function Recipes(){
const [recipe,setRecipe]=React.useState([])

React.useEffect(()=>{
    fetch("https://dummyjson.com/recipes")
    .then(res=>res.json())
    .then(data=>{setRecipe(data.recipes)})
},[])
return(
     <div className="border rounded border-success m-2">
            <ul className="p-0 bg-light d-flex flex-wrap justify-content-evenly" >
            {recipe.map((prop)=>{
               return <Recipecard key={prop.id} recipe={prop}></Recipecard>
            })}
            </ul>
           </div>
)

}
export default Recipes