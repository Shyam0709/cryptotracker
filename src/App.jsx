import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import CryptoTable from './components/CryptoTable';
import { setLoading } from './redux/cryptoSlice';
import MockWebSocket from './services/MockWebSocket';
import { store } from './redux/Store';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Simulate initial loading
    dispatch(setLoading(true));
    
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    
    // Set up mock WebSocket
    const socket = new MockWebSocket(store);
    socket.connect();
    
    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-6 px-4">
        <h2 className="text-xl font-semibold mb-4">Cryptocurrency Prices by Market Cap</h2>
        <CryptoTable />
      </main>
      <footer className="container mx-auto p-4 text-center text-gray-600 text-sm">
        Data updates every 1-2 seconds 
      </footer>
    </div>
  );
};

export default App;