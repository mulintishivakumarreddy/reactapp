import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
function Recipecard({recipe}){
function AddtoCart(){
    console.log("added to cart:",recipe.name)
}

return(<div className=" p-3 m-3 border border-2 rounded " style={{width:"200px"}}>
    <img src={recipe.image} style={{width:"100%"}} alt=""/>
    <h2>{recipe.name}</h2>
    <button onClick={AddtoCart}>Add to Cart</button>
</div>)
}
export default Recipecard