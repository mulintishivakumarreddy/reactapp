import React from "react"
import ProductCard from "./Productcard"
import "bootstrap/dist/css/bootstrap.min.css";
function Products(){
    const[products,setP]=React.useState([])
    React.useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=> {setP([...data.products])})
    },[])
    return(
        <div className="border rounded border-success m-2">
            <ul className="p-0 bg-light d-flex flex-wrap justify-content-evenly" >
                {products.map((prod) => {
          return <ProductCard product={prod}></ProductCard>;
                })}
            </ul>
        </div>
    )
}
export default Products