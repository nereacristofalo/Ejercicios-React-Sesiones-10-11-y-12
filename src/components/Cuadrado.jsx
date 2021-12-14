import React, { useState } from 'react';
import '../styles/cuadrado.css';

const Cuadrado = () => {
  const [intervalo, setIntervalo] = useState(null);

  const [colorDeFondo, setColorDeFondo] = useState('rgb(0, 0, 0)');

  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const cambiarColor = () => {
    const intervaloDeCambio = setInterval(() => {
      const rgb = `rgb(${getRandom(0, 256)},${getRandom(0, 256)},${getRandom(
        0,
        256
      )})`;

      setColorDeFondo(rgb);
    }, 800);
    setIntervalo(intervaloDeCambio);
  };

  const pararColor = () => {
    setIntervalo((intervaloViejo) => {
      clearInterval(intervaloViejo);
      return null;
    });
  };

  return (
    <div
      className="cuadrado"
      style={{ backgroundColor: colorDeFondo }}
      onMouseEnter={cambiarColor}
      onDoubleClick={pararColor}
      onMouseLeave={pararColor}
    />
  );
};

export default Cuadrado;
