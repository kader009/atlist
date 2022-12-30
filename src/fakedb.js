
const addToDb = id =>{
  let Cart = {};
  // add to cart

  const storeCart = localStorage.getItem('cartnew')
  if(storeCart){
    console.log(storeCart);
    Cart = JSON.parse(storeCart)
  }
  
  // add quantity

  const quantity = Cart[id]
  if(quantity){
    const newqua = quantity + 1
    console.log(newqua);
    Cart[id] = newqua
  }
  else{
    // console.log('object');
    Cart[id] = 1;
  }
  localStorage.setItem('cartnew', JSON.stringify(Cart))
  
  // const quantity = Cart[id]
  // if(quantity){
  //   const newQuantity = parseInt(quantity ) + 1;
  //   Cart[id] = newQuantity;
  //   // localStorage.setItem(id, newQuantity)
  //   console.log('object');
  // }
  // else{
  //   console.log('neww add');
  //   Cart[id] = 1;
  //   // localStorage.setItem(id, 1)
  // }
  // localStorage.setItem('cart-item', JSON.stringify(Cart) )
}

const RemoveDb = id =>{
  const storeCart = localStorage.getItem('cartnew')
  if(storeCart){
    const shopCart  = JSON.parse(storeCart)
    if(id in shopCart){
      delete shopCart[id]
      localStorage.setItem('cartnew', JSON.stringify(shopCart) )
    }
  }
}

export  {addToDb, RemoveDb};  //export {addToDb}