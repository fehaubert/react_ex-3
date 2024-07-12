import React, { useState, useMemo } from 'react'; 
import '../App.css';

const calcularFatorial = (n) => (n <= 1 ? 1 : n * calcularFatorial(n - 1));

const Calculador = () => {
  const [numero, setNumero] = useState(1);
  const [inputValue, setInputValue] = useState('1'); 

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div className="container">
      <h3>Calculadora Fatorial</h3>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        min="0"
      />
      <button onClick={() => setNumero(parseInt(inputValue, 10))}>
        Calcular
      </button>
      <p>Fatorial de {numero} é {fatorial}</p>
    </div>
  );
};

export default Calculador;
