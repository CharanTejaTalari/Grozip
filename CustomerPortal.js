const CustomerPortal = ({ setPage }) => {
  const { logout } = React.useContext(AuthContext);
  const [activeModule, setActiveModule] = React.useState('Home / Dashboard');

  const modules = [
    { name: 'Home / Dashboard', description: 'Quick access to offers, order summary, recommendations', icon: '🏠' },
    { name: 'Browse Products', description: 'Categories, search, filters, featured items', icon: '🛒' },
    { name: 'My Orders', description: 'List of past orders, order details, reorder option', icon: '📜' },
    { name: 'Track Order', description: 'Real-time order status and delivery tracking', icon: '🚚' },
    { name: 'Cart', description: 'Current cart items with update and checkout options', icon: '🛍️' },
    { name: 'Wallet / Payments', description: 'Payment history, add money, saved cards, refund status', icon: '💳' },
    { name: 'Address Book', description: 'Add/edit multiple delivery addresses', icon: '📍' },
    { name: 'Offers & Coupons', description: 'Available promo codes and applicable items', icon: '🎟️' },
    { name: 'Support / Chat', description: 'Contact store or support via chat/call/email', icon: '📞' },
    { name: 'Profile Settings', description: 'Name, phone, password, notification preferences', icon: '👤' },
    { name: 'Logout', description: 'Exit the portal securely', icon: '🚪' }
  ];

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'Home / Dashboard':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Home / Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">Welcome to your dashboard! Here are some quick links:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Latest Offers</h3>
                <p className="text-gray-600 dark:text-gray-400">20% off on Fresh Apples at Fresh Mart!</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="View offers">View All Offers</button>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Order Summary</h3>
                <p className="text-gray-600 dark:text-gray-400">You have 2 active orders.</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={() => setActiveModule('My Orders')} aria-label="View orders">View Orders</button>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-400">Try our organic fruits!</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={() => setActiveModule('Browse Products')} aria-label="Browse products">Browse Now</button>
              </div>
            </div>
          </div>
        );
      case 'Browse Products':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Browse Products</h2>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200 mb-4"
              aria-label="Search products"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Vegetables', 'Fruits', 'Dairy', 'Snacks'].map(category => (
                <div key={category} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">{category}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Explore our {category.toLowerCase()} collection.</p>
                  <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={() => setPage('store_list')} aria-label={`Browse ${category}`}>Shop Now</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'My Orders':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">My Orders</h2>
            <p className="text-gray-600 dark:text-gray-400">Your past orders:</p>
            <div className="mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2">
                <p className="font-bold text-gray-800 dark:text-gray-200">Order #1234</p>
                <p className="text-gray-600 dark:text-gray-400">Date: July 18, 2025 | Total: ₹350</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Reorder">Reorder</button>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-bold text-gray-800 dark:text-gray-200">Order #1235</p>
                <p className="text-gray-600 dark:text-gray-400">Date: July 15, 2025 | Total: ₹200</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Reorder">Reorder</button>
              </div>
            </div>
          </div>
        );
      case 'Track Order':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Track Order</h2>
            <p className="text-gray-600 dark:text-gray-400">Track your order status:</p>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter order ID"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200 mb-4"
                aria-label="Enter order ID"
              />
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-bold text-gray-800 dark:text-gray-200">Order #1234</p>
                <p className="text-gray-600 dark:text-gray-400">Status: Out for delivery</p>
                <p className="text-gray-600 dark:text-gray-400">Estimated Delivery: July 20, 2025</p>
              </div>
            </div>
          </div>
        );
      case 'Cart':
        setPage('cart');
        return null;
      case 'Wallet / Payments':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Wallet / Payments</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your payments:</p>
            <div className="mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2">
                <p className="font-bold text-gray-800 dark:text-gray-200">Payment History</p>
                <p className="text-gray-600 dark:text-gray-400">Last payment: ₹350 on July 18, 2025</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="font-bold text-gray-800 dark:text-gray-200">Saved Cards</p>
                <p className="text-gray-600 dark:text-gray-400">Visa ending in 1234</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Add new card">Add New Card</button>
              </div>
            </div>
          </div>
        );
      case 'Address Book':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Address Book</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your delivery addresses:</p>
            <div className="mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2">
                <p className="font-bold text-gray-800 dark:text-gray-200">Home</p>
                <p className="text-gray-600 dark:text-gray-400">123 Main Street, Hyderabad</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Edit address">Edit</button>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Add new address">Add New Address</button>
            </div>
          </div>
        );
      case 'Offers & Coupons':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Offers & Coupons</h2>
            <p className="text-gray-600 dark:text-gray-400">Available offers:</p>
            <div className="mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2">
                <p className="font-bold text-gray-800 dark:text-gray-200">SUMMER20</p>
                <p className="text-gray-600 dark:text-gray-400">20% off on orders above ₹500</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Apply coupon">Apply</button>
              </div>
            </div>
          </div>
        );
      case 'Support / Chat':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Support / Chat</h2>
            <p className="text-gray-600 dark:text-gray-400">Contact us:</p>
            <div className="mt-4 flex flex-col gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Start chat">Start Chat</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Call support">Call Support</button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Email support">Email Support</button>
            </div>
          </div>
        );
      case 'Profile Settings':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Profile Settings</h2>
            <p className="text-gray-600 dark:text-gray-400">Update your profile:</p>
            <div className="mt-4 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                aria-label="Name"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                aria-label="Phone"
              />
              <input
                type="password"
                placeholder="New Password"
                className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                aria-label="New Password"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Save profile">Save</button>
            </div>
          </div>
        );
      case 'Logout':
        logout();
        setPage('home');
        return null;
      default:
        return <div className="text-gray-600 dark:text-gray-400">Select a module to view content.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <div className="sidebar bg-white dark:bg-gray-800">
        <h2 className="text-xl font-bold text-green-600 dark:text-green-400 p-4">Customer Portal</h2>
        {modules.map(module => (
          <div
            key={module.name}
            className={`sidebar-item ${activeModule === module.name ? 'active' : ''}`}
            onClick={() => setActiveModule(module.name)}
            role="button"
            aria-label={`View ${module.name}`}
          >
            <span className="mr-2">{module.icon}</span> {module.name}
          </div>
        ))}
      </div>
      <div className="flex-1 p-8" style={{ marginLeft: '250px' }}>
        {renderModuleContent()}
      </div>
    </div>
  );
};