const Home = ({ setPage }) => {
  const [search, setSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const fuse = new Fuse([...shops, ...Object.values(items).flat()], {
    keys: ['name', 'address', 'tags', 'category'],
    threshold: 0.3,
    includeScore: true
  });

  const handleSearch = () => {
    if (search.trim()) {
      setPage('store_list');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      const results = fuse.search(value).map(result => result.item.name);
      setSuggestions(results.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
    setPage('store_list');
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610348725531-843dff563e2c')" }}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 p-8 rounded-xl shadow-2xl max-w-2xl w-full animate-slide-in">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">Find Your Nearest Grocery Store</h2>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder="Search for shops or products (e.g., Fresh Mart, Apples)"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
              aria-label="Search shops or products"
            />
            {suggestions.length > 0 && (
              <div className="autocomplete-suggestions">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="autocomplete-suggestion" onClick={() => selectSuggestion(suggestion)} role="button" aria-label={`Select ${suggestion}`}>
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleSearch} className="px-5 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" aria-label="Search">Search</button>
        </div>
      </div>
    </div>
  );
};