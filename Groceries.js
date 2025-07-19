const Groceries = ({ setPage, selectedStore }) => {
  const [cart, setCart] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = React.useState('');

  const addToCart = (itemName) => {
    if (!cart.includes(itemName)) {
      const newCart = [...cart, itemName];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const filteredItems = (items[selectedStore] || []).filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.category.toLowerCase().includes(filter.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedStore} - Groceries</h2>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name, category, or tags"
          className="mt-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg max-w-md w-full dark:bg-gray-700 dark:text-gray-200"
          aria-label="Filter groceries"
        />
      </div>
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{item.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">🛒 Category: {item.category}</p>
            <p className="text-gray-600 dark:text-gray-400">💰 Price: {item.priceDisplay}</p>
            <p className="text-gray-600 dark:text-gray-400">📦 Stock: {item.stock}</p>
            <p className="text-gray-600 dark:text-gray-400">🏷️ Tags: {item.tags.join(', ')}</p>
            <button
              className={`mt-4 w-full py-2 rounded-lg font-bold text-white ${cart.includes(item.name) ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
              onClick={() => addToCart(item.name)}
              disabled={cart.includes(item.name)}
              aria-label={cart.includes(item.name) ? `${item.name} added to cart` : `Add ${item.name} to cart`}
            >
              {cart.includes(item.name) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};