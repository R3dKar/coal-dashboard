import React from 'react';

const MetricsCards = ({ data }) => {
  const metrics = data?.metrics || {
    avgTemperature: 0,
    maxTemperature: 0,
    riskLevel: 'Низкий',
    sensorsCount: 0
  };

  return (
    <div className="metrics-cards">
      <div className="metric-card">
        <h3>Средняя температура</h3>
        <p className="metric-value">{metrics.avgTemperature}°C</p>
      </div>
      <div className="metric-card">
        <h3>Максимальная температура</h3>
        <p className="metric-value">{metrics.maxTemperature}°C</p>
      </div>
      <div className="metric-card">
        <h3>Уровень риска</h3>
        <p className={`metric-value risk-${metrics.riskLevel?.toLowerCase()}`}>
          {metrics.riskLevel}
        </p>
      </div>
      <div className="metric-card">
        <h3>Активные датчики</h3>
        <p className="metric-value">{metrics.sensorsCount}</p>
      </div>
    </div>
  );
};

export default MetricsCards;
