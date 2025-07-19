const Header = ({ setPage, toggleTheme, isDark }) => {
  const { user, logout } = React.useContext(AuthContext);
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-green-600 cursor-pointer" onClick={() => setPage('home')} role="button" aria-label="Go to homepage">Grozip</div>
          <nav className="flex gap-6">
            <div className="relative group">
              <button className="text-green-600 dark:text-green-400 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded" aria-label="Categories menu">Categories</button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded mt-2">
                {['Vegetables', 'Fruits', 'Snacks', 'Dairy'].map(category => (
                  <a key={category} href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label={`View ${category}`}>{category}</a>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-green-600 dark:text-green-400 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded" aria-label="Offers menu">Offers</button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded mt-2">
                {['Today’s Deals', 'Weekend Sale', 'Combo Packs'].map(offer => (
                  <a key={offer} href="#" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label={`View ${offer}`}>{offer}</a>
                ))}
              </div>
            </div>
            {user && (
              <>
                {user.role === 'customer' && (
                  <button
                    className="text-green-600 dark:text-green-400 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded"
                    onClick={() => setPage('customer_portal')}
                    aria-label="Customer Portal"
                  >
                    Customer Portal
                  </button>
                )}
                {user.role === 'store' && (
                  <button
                    className="text-green-600 dark:text-green-400 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded"
                    onClick={() => setPage('store_portal')}
                    aria-label="Store Portal"
                  >
                    Store Portal
                  </button>
                )}
              </>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-6 text-green-600 dark:text-green-400 font-bold">
          <span aria-label="Contact number">📞 1800-123-456</span>
          <span className="text-2xl cursor-pointer" onClick={() => setPage('cart')} role="button" aria-label="View cart">🛒</span>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle dark mode">🌙</button>
          {user ? (
            <div className="relative group">
              <span className="cursor-pointer" aria-label={`User menu for ${user.name}`}>{user.name}</span>
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded mt-2">
                <button onClick={logout} className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Logout">Logout</button>
              </div>
            </div>
          ) : (
            <button onClick={() => setPage('login')} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Login">Login</button>
          )}
        </div>
      </div>
    </header>
  );
};