import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets, selectLoading } from '../redux/cryptoSlice';
import AssetRow from './AssetRow';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);
  const loading = useSelector(selectLoading);
  
  if (loading) {
    return <div className="text-center py-8">Loading crypto data...</div>;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="py-2 px-12 text-left text-black">#</th>
            <th className="py-2 px-10 text-left text-black">Name</th>
            <th className="py-2 px-10 text-left text-black">Price</th>
            <th className="py-2 px-13 text-left text-black">1h%</th>
            <th className="py-2 px-10 text-left text-black">24h%</th>
            <th className="py-2 px-10 text-left text-black">7d%</th>
            <th className="py-2 px-10 text-left text-black">MarketCap</th>
            <th className="py-2 px-10 text-left text-black">Volume(24h)</th>
            <th className="py-2 px-10 text-left text-black">Circulating Supply</th>
            <th className="py-2 px-10 text-left text-black">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <AssetRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;