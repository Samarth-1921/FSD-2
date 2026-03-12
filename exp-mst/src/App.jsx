import { useState } from "react";
import ProductList from "./ProductList";
import FavoriteCount from "./FavoriteCount";

function App() {

  const [favorites, setFavorites] = useState(0);

  const addFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div>
      <h1>Product List</h1>

      <FavoriteCount count={favorites} />

      <ProductList addFavorite={addFavorite} />
    </div>
  );
}

export default App;
