import React from 'react';

const RiskChart = ({ data }) => {
  return (
    <div className="risk-chart">
      <h2>График уровня риска</h2>
      <div className="chart-container">
        {data ? (
          <div className="chart-placeholder">
            {/* Здесь будет график риска */}
            <p>График уровня риска самовозгорания</p>
          </div>
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
};

export default RiskChart;
