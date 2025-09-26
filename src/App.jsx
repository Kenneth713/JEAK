import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import SearchFilter from "./components/SearchFilter";
import Cart from "./components/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🛒E-Commerce Shop</h1>

      <SearchFilter search={search} setSearch={setSearch} />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          {selected ? (
            <ProductDetail product={selected} onBack={() => setSelected(null)} addToCart={addToCart} />
          ) : (
            <ProductList products={filtered} onSelect={setSelected} />
          )}
        </div>
        <div>
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}
