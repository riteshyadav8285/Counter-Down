import React,{ useContext, useState } from "react";
import Nav from "./Navigation/Nav";
//import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import products from "./db/data";
import Recommended from "./Recommmended/Recommended";
import Sidebar from "./Silders/Sidebar";
import Card from "./component/Card"
import Carts from "./Navigation/Carts";
export const Pass = React.createContext()


function App1() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart]= useState([])
  const [warning, setWarning]=useState(false)
   const [show,setShow]=useState(false)

 const  handleClick=(item)=>{
  let isitemAvaiable=false
  cart.forEach((product)=>{
    if(item.id===product.id){
      isitemAvaiable=true
      
    }
  })
 
  if(isitemAvaiable){
    setWarning(true);
    setTimeout(()=>{
      setWarning(false)
    },2000)
    return
  }
  setCart([...cart,item])

  }
  // let handChange=(item,d)=>{
  //   let ind=-1;
  //   cart.forEach((data,index)=>{
  //     if(item.id===data.id){
  //       ind=index
  //     }
  //   })

  //   let tampArr=cart
  //   console.log(tampArr)
  //   console.log(tampArr.amount)
  //   tampArr[ind].amount+=d

  //   if(tampArr[ind].amount===0){
  //     tampArr[ind].amount=1
     
  //   }
  //   setCart([...tampArr])
  // }

  
  const handChange = (item,d) => {
    let ind = -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
     
    const tempArr = cart;
    console.log(tempArr[ind],d)
      tempArr[ind].amount+=d;
   


    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1;

      
    }
    setCart([...tempArr])
  }

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClicks = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    
    // Filtering Input Items
    // if (query) {
    //   filteredProducts = filteredItems;
    // }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id,img, title, star, reviews, prevPrice, newPrice,amount }) => (
     
        <Pass.Provider  value={handleClick}> 
        <Card
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          amount={amount}
        />
         </Pass.Provider>
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
     

      <Nav query={query} handleInputChange={handleInputChange} size={cart.length} setShow={setShow}  />
      {/* <Recommended handleClick={handleClick} /> */}
      {
        show?  <Products result={result} />:<Carts setCart={setCart} cart={cart} handChange={handChange}/>
      }
       
    
    </>
  );
}

export default App1;
