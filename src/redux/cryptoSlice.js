import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData } from '../components/data/Initialdata';


const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptoData,
    loading: false,
    error: null,
  },
  reducers: {
    updateAssetPrice: (state, action) => {
      const { id, newPrice } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      
      if (asset) {
        // Calculate percentage changes based on previous price
        const priceChange = (newPrice - asset.price) / asset.price;
        
        // Update volume with random fluctuation
        const volumeChange = 1 + (Math.random() * 0.02 - 0.01); // -1% to +1%
        
        // Update asset data
        asset.price = newPrice;
        asset.marketCap = asset.price * asset.circulatingSupply * 1000000; // simplified calculation
        asset.volume = asset.volume * volumeChange;
        
        // Update percentage changes (simulated for demonstration)
        asset.change1h += priceChange * 100 * (Math.random() * 0.5);
        asset.change24h += priceChange * 100 * (Math.random() * 0.8);
        asset.change7d += priceChange * 100 * (Math.random() * 0.3);
        
        // Ensure percentages stay within reasonable bounds
        asset.change1h = Math.max(-15, Math.min(15, asset.change1h));
        asset.change24h = Math.max(-30, Math.min(30, asset.change24h));
        asset.change7d = Math.max(-50, Math.min(50, asset.change7d));
        
        // Update chart data
        asset.chartData = [...asset.chartData.slice(1), newPrice];
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { updateAssetPrice, setLoading, setError } = cryptoSlice.actions;

// Selectors
export const selectAllAssets = state => state.crypto.assets;
export const selectAssetById = (state, assetId) => 
  state.crypto.assets.find(asset => asset.id === assetId);
export const selectLoading = state => state.crypto.loading;
export const selectError = state => state.crypto.error;

export default cryptoSlice.reducer;