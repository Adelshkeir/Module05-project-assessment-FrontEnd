const Productscard = ({product}) =>{

    // const addToCart = (item) => {
    //     let cart = [];
      
    //     if (localStorage.getItem('cart')) {
    //       cart = JSON.parse(localStorage.getItem('cart'));
    //     }
      
    //     if (cart.find((cartItem) => cartItem.name === item.name)) {
    //       let foundItem = cart.find((cartItem) => cartItem.name === item.name);
    //       foundItem.quantity = parseInt(foundItem.quantity) + parseInt(item.quantity);
      
    //       cart = [
    //         ...cart.filter((cartItem) => cartItem.name !== item.name),
    //         foundItem,
    //       ];
    //     } else {
    //       cart.push(item);
    //     }
      
    //     localStorage.setItem('cart', JSON.stringify(cart));
      
    //   };
    
      




    return (
        <div className="product-card-container">
            <img src={`http://localhost:8080/${product.imageURLs}`} className="products-card-image" />
            <div className="products-card-details">
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.price}$</p>
                <button >Add to cart</button>

            </div>
        </div>
    )
}
export default Productscard