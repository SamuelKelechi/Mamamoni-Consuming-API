import React, { useEffect } from 'react'
import "./shop.css"
import Review from "../pic/review.png"
import axios from "axios"

const Shop = () => {
    const [products, setProducts] = React.useState([])

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data)
        })
    }

console.log(products)

    useEffect(()=> {
        getProducts()
    }, [])
  return (
    <div className='container'>
        <div className='wrapper'>
            {
                products.map((props) => (
                    <div className='card' key={props.id}>
                <div className='up'>
                <img src={props.image} alt='img1' className='imagehold'/>
                </div>
                <div className='down'>
                    <div className='downhold'>
                        <div>
                            <strong>{props.title}</strong>
                            <img src={Review} alt='img2'/>
                            <p><b>{props.price}</b></p>
                        </div>
                       <div  className='buttnhold' >
                         <button className='butt'>Add to cart</button>
                     </div>
                    </div>
                
                </div>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Shop