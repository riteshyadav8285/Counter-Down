import React,{useState,useEffect} from 'react'
import "./Carts.css"

const Carts = ({setCart,cart,handChange}) => {

    const [price,setPrice] = useState(0);

    const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
    }

    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => {
      
        ans+= item.amount * item.newPrice;
   
      })
      setPrice(ans)
    }
    

    useEffect(() => {
      handlePrice();
    })
    
  return (
      <article>
        {
            cart?.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img}/>
                        <p>{item.title}</p>
                    </div>
                    <div className='amount_box'>
                    <button onClick={() => {
                      handChange( item ,+1)
                    }}>+</button>
                    <span>{item.amount}</span>
                    <button onClick={() => {
                      handChange(item ,-1)
                    }}>-</button>
                    </div>
                    <div>
                      <span>{item.newPrice}</span>
                     
                      <button onClick={() => handleRemove(item.id)}>Remove</button>
                      
                    </div>
                </div>
            ))
        }
        <div className='total'>
          <span>Total Price of your Cart</span>
          <span> Rs - {price}</span>
        </div>
      </article>
  )
}

export default Carts