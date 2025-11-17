import React from 'react';

const ThermalMap = ({ data }) => {
  return (
    <div className="thermal-map">
      <h2>Тепловая карта штабеля</h2>
      <div className="map-container">
        {data ? (
          <div className="map-placeholder">
            {/* Здесь будет тепловая карта */}
            <p>Тепловая карта для выбранного штабеля</p>
          </div>
        ) : (
          <p>Выберите штабель для отображения тепловой карты</p>
        )}
      </div>
    </div>
  );
};

export default ThermalMap;
