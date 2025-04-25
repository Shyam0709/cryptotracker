import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auton flex flex-col items-center">
        <h1 className="text-2xl font-bold">CRYPTO TRACKER</h1>
        <br></br>
        <p className="text-sm">Real-time cryptocurrency prices and market data</p>
      </div>
    </header>
  );
};

export default Header;