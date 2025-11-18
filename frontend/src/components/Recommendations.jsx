import React from 'react';

const Recommendations = ({ riskLevel }) => {
  const recommendations = {
    low: ['Продолжайте регулярный мониторинг', 'Проверьте работу датчиков'],
    medium: ['Увеличьте частоту измерений', 'Проверьте вентиляцию'],
    high: ['Немедленно примите меры', 'Уведомите ответственных', 'Подготовьте средства тушения'],
    critical: ['ЭВАКУАЦИЯ!', 'Немедленно начинайте тушение', 'Отключите электрооборудование']
  };

  const currentRisk = riskLevel?.toLowerCase() || 'low';
  const currentRecommendations = recommendations[currentRisk] || recommendations.low;

  return (
    <div className="recommendations">
      <h2>Рекомендации</h2>
      <div className="recommendations-list">
        {currentRecommendations.map((rec, index) => (
          <div key={index} className="recommendation-item">
            {rec}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
