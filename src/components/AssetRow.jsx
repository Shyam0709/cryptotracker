import React, { memo } from 'react';
import MiniChart from './Minichart';

const AssetRow = ({ asset }) => {
  // Format numbers for display
  const formatPrice = (price) => {
    return price >= 1
      ? price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
      : price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 6 });
  };
  
  const formatLargeNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    return num.toLocaleString();
  };
  
  const formatPercentage = (value) => {
    return value >= 0 
      ? `+${value.toFixed(2)}%` 
      : `${value.toFixed(2)}%`;
  };
  
  const getPercentageColor = (value) => {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  };
  
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="py-4 px-10 text-black">{asset.id}</td>
      <td className="py-4 px-8 text-black">
        <div className="flex items-center">
          <img src={asset.logo} alt={asset.name} className="w-6 h-6 mr-2" 
            
           />
          <div>
            <div className="font-medium text-black ">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-9 font-medium text-black">{formatPrice(asset.price)}</td>
      <td className={`py-4 px-10  ${getPercentageColor(asset.change1h)}`}>
        {formatPercentage(asset.change1h)}
      </td>
      <td className={`py-4 px-10 ${getPercentageColor(asset.change24h)}`}>
        {formatPercentage(asset.change24h)}
      </td>
      <td className={`py-4 px-10 ${getPercentageColor(asset.change7d)}`}>
        {formatPercentage(asset.change7d)}
      </td>
      <td className="py-4 px-10 text-black">${formatLargeNumber(asset.marketCap)}</td>
      <td className="py-4 px-10 text-black">${formatLargeNumber(asset.volume)}</td>
      <td className="py-4 px-8 text-black">
        {asset.circulatingSupply.toFixed(2)}M {asset.symbol}
      </td>
      <td className="py-4 px-4">
        <MiniChart 
          data={asset.chartData} 
          color={asset.chartData[asset.chartData.length - 1] >= asset.chartData[0] ? '#16c784' : '#ea3943'} 
        />
      </td>
    </tr>
  );
};


export default memo(AssetRow);