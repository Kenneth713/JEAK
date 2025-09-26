export default function Cart({ cart }) {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i} className="text-sm mb-1">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    
    </div>
  );
}
