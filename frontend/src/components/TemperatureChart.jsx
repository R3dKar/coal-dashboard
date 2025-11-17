import React from 'react';

const TemperatureChart = ({ data }) => {
  return (
    <div className="temperature-chart">
      <h2>График температуры</h2>
      <div className="chart-container">
        {data ? (
          <div className="chart-placeholder">
            {/* Здесь будет график температуры */}
            <p>График температурных показателей</p>
          </div>
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
};

export default TemperatureChart;
