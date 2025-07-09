import React from 'react';

const EstrelasGoogle = () => {
  const estrelaAmarela = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#FFD700"  // amarelo ouro
      viewBox="0 0 24 24"
      key={Math.random()} // único para React
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.176L12 18.897l-7.334 3.85 1.4-8.176-5.934-5.787 8.2-1.192z" />
    </svg>
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '300px', // Largura máxima
        width: '100%', // Responsivo, ocupa a largura disponível
        margin: '0 auto', // Centraliza horizontalmente
      }}
    >
      {[...Array(5)].map((_, i) => (
        <span key={i}>{estrelaAmarela}</span>
      ))}
    </div>
  );
};

export default EstrelasGoogle;
