const StoreList = ({ setPage, setSelectedStore, search }) => {
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    const mapInstance = L.map('map').setView([17.3850, 78.4867], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    const markers = L.markerClusterGroup();
    shops.forEach(shop => {
      const marker = L.marker([shop.lat, shop.lng])
        .bindPopup(`<b>${shop.name}</b><br>${shop.address}<br><button class="shop-now-button px-3 py-1 bg-green-600 text-white rounded" data-shop="${shop.name}">Shop Now</button>`);
      markers.addLayer(marker);
    });
    mapInstance.addLayer(markers);
    setMap(mapInstance);

    const handleShopNowClick = (e) => {
      if (e.target.classList.contains('shop-now-button')) {
        const shopName = e.target.getAttribute('data-shop');
        setSelectedStore(shopName);
        setPage('groceries');
      }
    };
    mapInstance.getContainer().addEventListener('click', handleShopNowClick);

    return () => {
      mapInstance.getContainer().removeEventListener('click', handleShopNowClick);
      mapInstance.remove();
    };
  }, [setSelectedStore, setPage]);

  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(search.toLowerCase()) ||
    shop.address.toLowerCase().includes(search.toLowerCase()) ||
    shop.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 text-center mb-4">Search Again</h3>
        <div className="flex justify-center gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setPage('store_list', e.target.value)}
            placeholder="Enter shop or supermarket name"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg max-w-md w-full dark:bg-gray-700 dark:text-gray-200"
            aria-label="Search shops"
          />
          <button onClick={() => setPage('store_list', search)} className="px-5 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" aria-label="Search">Search</button>
        </div>
      </div>
      <div className="container mx-auto flex gap-5 p-8">
        <div className="flex-3">
          {filteredShops.map(shop => (
            <div key={shop.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4 shadow-md animate-slide-in">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{shop.name}</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-600 dark:text-gray-400">
                <p>📍 Address: {shop.address}</p>
                <p>📞 Contact: {shop.contact}</p>
                <p>⏰ Open Hours: {shop.hours}</p>
                <p>🛒 Category: {shop.category}</p>
                <p>⭐ Rating: {shop.rating}/5</p>
                <p>💳 Payment: {shop.payment}</p>
                <p>🚚 Delivery: {shop.delivery}</p>
                <p>📅 Established: {shop.established}</p>
                <p>👥 Staff: {shop.staff}</p>
                <p>🏷️ Tags: {shop.tags.join(', ')}</p>
              </div>
              <button
                className="mt-4 px-5 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                onClick={() => { setSelectedStore(shop.name); setPage('groceries'); }}
                aria-label={`Shop at ${shop.name}`}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1 sticky top-0 h-screen">
          <div id="map" className="h-full"></div>
        </div>
      </div>
    </div>
  );
};