import React, { useEffect, useRef } from 'react';

const Minichart = ({ data, width = 120, height = 40, color }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Find min and max for scaling
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1; // Avoid division by zero
    
    // Draw the line
    ctx.beginPath();
    ctx.strokeStyle = color || (data[data.length - 1] >= data[0] ? '#16c784' : '#ea3943');
    ctx.lineWidth = 2;
    
    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
  }, [data, width, height, color]);
  
  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Minichart;