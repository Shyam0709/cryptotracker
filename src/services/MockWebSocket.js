import { updateAssetPrice } from '../redux/cryptoSlice';

class MockWebSocket {
  constructor(store) {
    this.store = store;
    this.interval = null;
    this.connected = false;
  }

  connect() {
    if (this.connected) return;
    
    this.connected = true;
    
    // Simulate WebSocket by updating prices every 1-2 seconds
    this.interval = setInterval(() => {
      const state = this.store.getState();
      const assets = state.crypto.assets;
      
      // Update a random subset of assets
      const assetsToUpdate = Math.floor(Math.random() * 3) + 1; // 1 to 3 assets
      
      for (let i = 0; i < assetsToUpdate; i++) {
        const randomAssetIndex = Math.floor(Math.random() * assets.length);
        const asset = assets[randomAssetIndex];
        
        // Generate a new price with small random fluctuation (-2% to +2%)
        const priceChange = 1 + (Math.random() * 0.04 - 0.02);
        const newPrice = parseFloat((asset.price * priceChange).toFixed(2));
        
        this.store.dispatch(updateAssetPrice({
          id: asset.id,
          newPrice
        }));
      }
    }, 1500); // Update every 1.5 seconds
  }

  disconnect() {
    if (!this.connected) return;
    
    this.connected = false;
    clearInterval(this.interval);
  }
}

export default MockWebSocket;