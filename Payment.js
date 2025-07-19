const Payment = ({ setPage }) => {
  const [selectedMethod, setSelectedMethod] = React.useState(null);
  const [cardDetails, setCardDetails] = React.useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = React.useState('');

  const handlePayment = () => {
    if (selectedMethod === 'Credit/Debit Card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill in all card details.');
      return;
    }
    if (selectedMethod === 'UPI' && !upiId) {
      alert('Please enter a valid UPI ID.');
      return;
    }
    if (selectedMethod) {
      alert(`Payment successful with ${selectedMethod}!`);
      localStorage.setItem('cart', JSON.stringify([]));
      setPage('home');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">Select Payment Method</h2>
      </div>
      <div className="container mx-auto p-8 flex flex-col items-center gap-6">
        {['Credit/Debit Card', 'Cash on Delivery', 'UPI'].map(method => (
          <div key={method} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-md text-center animate-slide-in">
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400">{method}</h3>
            <p className="text-gray-600 dark:text-gray-400">{method === 'Credit/Debit Card' ? '💳 Pay securely with your card' : method === 'Cash on Delivery' ? '💵 Pay when you receive your order' : '📱 Pay instantly via UPI apps'}</p>
            {method === 'Credit/Debit Card' && selectedMethod === method && (
              <div className="mt-4 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                  aria-label="Card number"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                  aria-label="Card expiry date"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200"
                  aria-label="Card CVV"
                />
              </div>
            )}
            {method === 'UPI' && selectedMethod === method && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-gray-200 w-full"
                  aria-label="UPI ID"
                />
              </div>
            )}
            <button
              className={`mt-4 w-full py-2 rounded-lg font-bold text-white ${selectedMethod === method ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}
              onClick={() => setSelectedMethod(method)}
              aria-label={`Select ${method} as payment method`}
            >
              {selectedMethod === method ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
        <button className="w-full max-w-md py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700" onClick={handlePayment} aria-label="Confirm payment">Confirm Payment</button>
      </div>
    </div>
  );
};