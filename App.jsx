
import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    hotMetalTemp: '',
    windPressure: '',
    furnacePressure: '',
    blastVol: '',
    oxygenEnrich: '',
    humidity: '',
    oreCokeRatio: '',
    slagRatio: '',
  });

  const [results, setResults] = useState({});

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const oreCoke = parseFloat(inputs.oreCokeRatio) || 0;
    const slagRatio = parseFloat(inputs.slagRatio) || 0;
    const pigIronTon = 1300;
    const slag = pigIronTon * (slagRatio / 100);
    const pigIron = pigIronTon;
    const totalIron = slag + pigIron;

    setResults({
      slag: slag.toFixed(2),
      pigIron: pigIron.toFixed(2),
      totalIron: totalIron.toFixed(2),
    });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">고로 계산기 🔥</h1>
      {['hotMetalTemp', 'windPressure', 'furnacePressure', 'blastVol', 'oxygenEnrich', 'humidity', 'oreCokeRatio', 'slagRatio'].map(field => (
        <div key={field} className="mb-2">
          <label className="block text-sm capitalize">{field}</label>
          <input
            type="number"
            name={field}
            value={inputs[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
      ))}
      <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">계산하기</button>
      <div className="mt-4">
        <p>슬래그량: {results.slag} 톤</p>
        <p>용선량: {results.pigIron} 톤</p>
        <p>총 저선량: {results.totalIron} 톤</p>
      </div>
    </div>
  );
}

export default App;
