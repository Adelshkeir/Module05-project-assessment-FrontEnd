const Productscard = ({ product }) => {
    // const addToCart = (item) => {
    //   let cart = [];
  
    //   if (localStorage.getItem('cart')) {
    //     cart = JSON.parse(localStorage.getItem('cart'));
    //   }
  
    //   const foundIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
  
    //   if (foundIndex !== -1) {
    //     cart[foundIndex].quantity += item.quantity;
    //   } else {
    //     cart.push(item);
    //   }
  
    //   localStorage.setItem('cart', JSON.stringify(cart));
    // };
  
    return (
      <div className="product-card-container">
        <img src={`http://localhost:8080/${product.imageURLs}`} className="products-card-image" />
        <div className="products-card-details">
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price}$</p>
          <button>Add to cart</button>
        </div>
      </div>
    );
  };
  
  export default Productscard;