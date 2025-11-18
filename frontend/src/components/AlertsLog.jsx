import React from 'react';

const AlertsLog = ({ alerts }) => {
  const alertList = alerts || [
    { id: 1, message: 'Температура превышает норму', timestamp: new Date(), level: 'warning' },
    { id: 2, message: 'Высокий риск самовозгорания', timestamp: new Date(), level: 'danger' }
  ];

  return (
    <div className="alerts-log">
      <h2>Журнал оповещений</h2>
      <div className="alerts-list">
        {alertList.map(alert => (
          <div key={alert.id} className={`alert-item ${alert.level}`}>
            <span className="alert-time">
              {alert.timestamp.toLocaleTimeString()}
            </span>
            <span className="alert-message">{alert.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsLog;
