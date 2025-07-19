const StorePortal = ({ setPage }) => {
  const modules = [
    { name: 'Inventory Management', description: 'Manage stock levels and product listings.', icon: '📦', action: () => alert('Inventory Management feature coming soon!') },
    { name: 'Order Management', description: 'View and process customer orders.', icon: '📋', action: () => alert('Order Management feature coming soon!') },
    { name: 'Store Profile', description: 'Update store details and settings.', icon: '🏪', action: () => alert('Store Profile feature coming soon!') },
    { name: 'Analytics', description: 'View sales and performance metrics.', icon: '📊', action: () => alert('Analytics feature coming soon!') },
    { name: 'Promotions', description: 'Create and manage discounts or offers.', icon: '🎉', action: () => alert('Promotions feature coming soon!') }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 text-center mb-8">Store Portal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(module => (
            <div key={module.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md animate-slide-in">
              <div className="text-3xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{module.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{module.description}</p>
              <button
                className="mt-4 w-full py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                onClick={module.action}
                aria-label={`Access ${module.name}`}
              >
                Go to {module.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};