const Login = ({ setPage, login }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('customer');

  const handleLogin = () => {
    if (email && password) {
      login({ name: email.split('@')[0], email, role });
      setPage(role === 'customer' ? 'customer_portal' : 'store_portal');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 animate-slide-in">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">Login to Grozip</h2>
        <div className="flex justify-center gap-4 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="customer"
              checked={role === 'customer'}
              onChange={() => setRole('customer')}
              className="form-radio text-green-600"
              aria-label="Customer Login"
            />
            <span className="text-gray-800 dark:text-gray-200">Customer</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="store"
              checked={role === 'store'}
              onChange={() => setRole('store')}
              className="form-radio text-green-600"
              aria-label="Store Login"
            />
            <span className="text-gray-800 dark:text-gray-200">Store</span>
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
            required
            aria-label="Email address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
            required
            aria-label="Password"
          />
          <button onClick={handleLogin} className="px-5 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" aria-label="Login">Login</button>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Don’t have an account? <span className="text-green-600 dark:text-green-400 cursor-pointer" onClick={() => setPage('signup')} role="button" aria-label="Go to signup">Sign Up</span>
        </p>
      </div>
    </div>
  );
};