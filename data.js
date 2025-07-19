const shops = [
  { name: 'Fresh Mart', address: '123 Main Street, Hyderabad', lat: 17.3850, lng: 78.4867, contact: '9876543210', hours: '9 AM - 9 PM', category: 'Supermarket', rating: 4.5, payment: 'Cash, Card, UPI', delivery: 'Yes (within 5 km)', established: 2012, staff: 25, tags: ['Organic', 'Discounted Items', 'Loyalty Program'] },
  { name: 'Daily Needs', address: '456 Subhash Nagar, Vizag', lat: 17.6868, lng: 83.2185, contact: '9001234567', hours: '8 AM - 10 PM', category: 'Grocery Store', rating: 4.3, payment: 'Card, UPI', delivery: 'No', established: 2015, staff: 18, tags: ['Daily Essentials', 'Cold Storage'] },
  { name: 'Super Bazaar', address: '789 Market Road, Vijayawada', lat: 16.5062, lng: 80.6480, contact: '8899776655', hours: '10 AM - 8 PM', category: 'Hypermarket', rating: 4.7, payment: 'All modes', delivery: 'Yes (within 10 km)', established: 2010, staff: 40, tags: ['Groceries', 'Electronics', 'Household Items'] },
  { name: 'Green Grocers', address: '101 Park Lane, Guntur', lat: 16.3067, lng: 80.4365, contact: '9123456789', hours: '7 AM - 9 PM', category: 'Grocery Store', rating: 4.4, payment: 'Cash, UPI', delivery: 'Yes (within 3 km)', established: 2018, staff: 15, tags: ['Organic', 'Local Produce', 'Eco-Friendly'] },
  { name: 'Mega Mart', address: '202 Coastal Road, Visakhapatnam', lat: 17.7231, lng: 83.3167, contact: '8912345678', hours: '9 AM - 10 PM', category: 'Supermarket', rating: 4.6, payment: 'All modes', delivery: 'Yes (within 7 km)', established: 2014, staff: 30, tags: ['Bulk Purchase', 'Imported Goods', 'Loyalty Discounts'] },
  { name: 'City Store', address: '303 Gandhi Nagar, Tirupati', lat: 13.6288, lng: 79.4192, contact: '8776655443', hours: '8 AM - 8 PM', category: 'Convenience Store', rating: 4.2, payment: 'Cash, Card', delivery: 'No', established: 2016, staff: 12, tags: ['Quick Shop', 'Daily Needs', 'Local Brands'] }
];

const items = {
  'Fresh Mart': [
    { name: 'Fresh Apples', category: 'Fruits', price: 150, priceDisplay: '₹150/kg', stock: '50 kg', tags: ['Organic', 'Fresh'] },
    { name: 'Whole Wheat Bread', category: 'Bakery', price: 40, priceDisplay: '₹40/loaf', stock: '100 loaves', tags: ['Healthy', 'Fresh'] },
    { name: 'Milk', category: 'Dairy', price: 60, priceDisplay: '₹60/liter', stock: '200 liters', tags: ['Full Cream', 'Pasteurized'] },
    { name: 'Potatoes', category: 'Vegetables', price: 30, priceDisplay: '₹30/kg', stock: '300 kg', tags: ['Fresh', 'Local'] },
    { name: 'Chips', category: 'Snacks', price: 20, priceDisplay: '₹20/pack', stock: '500 packs', tags: ['Spicy', 'Crunchy'] }
  ],
  'Daily Needs': [
    { name: 'Fresh Apples', category: 'Fruits', price: 140, priceDisplay: '₹140/kg', stock: '40 kg', tags: ['Organic'] },
    { name: 'Milk', category: 'Dairy', price: 55, priceDisplay: '₹55/liter', stock: '150 liters', tags: ['Pasteurized'] }
  ],
  'Super Bazaar': [
    { name: 'Chips', category: 'Snacks', price: 18, priceDisplay: '₹18/pack', stock: '600 packs', tags: ['Spicy', 'Crunchy'] },
    { name: 'Potatoes', category: 'Vegetables', price: 25, priceDisplay: '₹25/kg', stock: '400 kg', tags: ['Fresh', 'Local'] }
  ],
  'Green Grocers': [
    { name: 'Organic Bananas', category: 'Fruits', price: 60, priceDisplay: '₹60/kg', stock: '60 kg', tags: ['Organic', 'Fresh'] },
    { name: 'Carrots', category: 'Vegetables', price: 40, priceDisplay: '₹40/kg', stock: '200 kg', tags: ['Fresh', 'Local'] },
    { name: 'Almond Milk', category: 'Dairy', price: 120, priceDisplay: '₹120/liter', stock: '50 liters', tags: ['Vegan', 'Organic'] },
    { name: 'Brown Rice', category: 'Grains', price: 80, priceDisplay: '₹80/kg', stock: '100 kg', tags: ['Healthy', 'Organic'] }
  ],
  'Mega Mart': [
    { name: 'Imported Oranges', category: 'Fruits', price: 200, priceDisplay: '₹200/kg', stock: '30 kg', tags: ['Imported', 'Fresh'] },
    { name: 'Pasta', category: 'Grains', price: 90, priceDisplay: '₹90/pack', stock: '200 packs', tags: ['Imported', 'Whole Wheat'] },
    { name: 'Cheese', category: 'Dairy', price: 250, priceDisplay: '₹250/kg', stock: '40 kg', tags: ['Imported', 'Premium'] },
    { name: 'Cookies', category: 'Snacks', price: 50, priceDisplay: '₹50/pack', stock: '300 packs', tags: ['Sweet', 'Crunchy'] }
  ],
  'City Store': [
    { name: 'Milk', category: 'Dairy', price: 58, priceDisplay: '₹58/liter', stock: '100 liters', tags: ['Pasteurized', 'Local'] },
    { name: 'White Bread', category: 'Bakery', price: 35, priceDisplay: '₹35/loaf', stock: '80 loaves', tags: ['Fresh', 'Local'] },
    { name: 'Tomatoes', category: 'Vegetables', price: 35, priceDisplay: '₹35/kg', stock: '150 kg', tags: ['Fresh', 'Local'] }
  ]
};