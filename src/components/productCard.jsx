import "./productCard.css";

export default function ProductCard(props) {
  console.log(props);

  return (
    <div className="product-card">
      <img src={props.image} alt="product" />
      <h2>Price: {props.price}</h2>
      <span>{props.name}</span>
      <p>{props.description}</p>
      <button className="btn">Add to Cart</button>
      <h1>Product Card</h1>
      
    </div>
  );
}
