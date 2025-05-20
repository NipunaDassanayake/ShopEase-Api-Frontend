import "./App.css";

import ProductCard from "./components/productCard";

function App() {
  return (
    <>
    <div className="container bg-amber-600 border-2 mx-auto"> 
      <h1>Product Card</h1>
    </div>

      <ProductCard
        name="Jbl Mini 4 Original"
        price="$32.25"
        image="https://m.media-amazon.com/images/I/71gNS1OH3qL.jpg"
        description="Portable Bluetooth Speaker"
      />

      <ProductCard
        name="2024 New Summer Super Soft Outdoor Slippers PU Insole Men's And Women's Non-slip Sandals Couple Shoes"
        price="$10.00"
        image="https://ae01.alicdn.com/kf/S19ed3330d87342b495ded5360e88a318f.jpg"
        description="2024 New Summer Super Soft Outdoor Slippers PU Insole Men's And Women's Non-slip Sandals Couple Shoes"
      />
    </>
  );
}

export default App;
