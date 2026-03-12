import Button from "./button";

function ProductList({ addFavorite }) {

  const products = ["Laptop", "Phone", "Headphones", "Camera"];

  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <Button addFavorite={addFavorite} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;