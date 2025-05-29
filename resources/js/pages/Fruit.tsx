// resources/js/pages/Fruit.tsx

import React, { useState } from 'react';

const exchangeRates: Record<string, Record<string, number>> = {
  THB: { USD: 0.028, VND: 700 },
  USD: { THB: 35.5, VND: 24500 },
  VND: { THB: 0.0014, USD: 0.000041 },
};

function Fruit() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('THB');
  const [toCurrency, setToCurrency] = useState('USD');
  const [converted, setConverted] = useState<number | null>(null);

  const convert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    setConverted((amount * rate));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{ padding: '10px', margin: '10px' }}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {Object.keys(exchangeRates).map((cur) => <option key={cur}>{cur}</option>)}
      </select>
      <span> ➡️ </span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {Object.keys(exchangeRates[fromCurrency]).map((cur) => <option key={cur}>{cur}</option>)}
      </select>
      <button onClick={convert} style={{ marginLeft: '10px' }}>แปลง</button>
      {converted !== null && (
        <h3>ผลลัพธ์: {converted.toFixed(2)} {toCurrency}</h3>
      )}
    </div>
  );
}

export default Fruit;
