const Cart = ({ setPage }) => {
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });
  const [quantities, setQuantities] = React.useState({});

  const updateQuantity = (item, delta) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(1, (prev[item] || 1) + delta)
    }));
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter(i => i !== item);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[item];
      return newQuantities;
    });
  };

  const total = cart.reduce((sum, item) => {
    const itemInfo = Object.values(items).flat().find(i => i.name === item) || { price: 0 };
    return sum + itemInfo.price * (quantities[item] || 1);
  }, 0);

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">Your Cart</h2>
      </div>
      <div className="container mx-auto flex gap-5 p-8">
        <div className="flex-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.length === 0 ? (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-400 text-lg">Your cart is empty.</div>
          ) : (
            cart.map(item => {
              const itemInfo = Object.values(items).flat().find(i => i.name === item) || {};
              return (
                <div key={item} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{item}</h3>
                  <p className="text-gray-600 dark:text-gray-400">🛒 Category: {itemInfo.category}</p>
                  <p className="text-gray-600 dark:text-gray-400">💰 Price: {itemInfo.priceDisplay}</p>
                  <p className="text-gray-600 dark:text-gray-400">📦 Stock: {itemInfo.stock}</p>
                  <p className="text-gray-600 dark:text-gray-400">🏷️ Tags: {itemInfo.tags?.join(', ')}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded" onClick={() => updateQuantity(item, -1)} aria-label={`Decrease quantity of ${item}`}>-</button>
                    <span>{quantities[item] || 1}</span>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded" onClick={() => updateQuantity(item, 1)} aria-label={`Increase quantity of ${item}`}>+</button>
                  </div>
                  <button className="mt-4 w-full py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600" onClick={() => removeFromCart(item)} aria-label={`Remove ${item} from cart`}>Remove</button>
                </div>
              );
            })
          )}
        </div>
        <div className="flex-1 sticky top-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">Order Summary</h3>
          <p className="text-gray-600 dark:text-gray-400">Items: {cart.length}</p>
          <p className="text-gray-600 dark:text-gray-400">Total: ₹{total}</p>
          <button
            className={`mt-5 w-full py-2 rounded-lg font-bold text-white ${cart.length === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            onClick={() => cart.length > 0 && setPage('payment')}
            disabled={cart.length === 0}
            aria-label="Proceed to payment"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};