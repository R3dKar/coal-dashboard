import { useState, useEffect } from 'react';
import Header from './components/Header';
import MetricsCards from './components/MetricsCards';
import ThermalMap from './components/ThermalMap';
import TemperatureChart from './components/TemperatureChart';
import RiskChart from './components/RiskChart';
import AlertsLog from './components/AlertsLog';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
  const [selectedPile, setSelectedPile] = useState(null);
  const [dateRange, setDateRange] = useState({ 
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date() 
  });
  const [sensorData, setSensorData] = useState(null);
  const [theme, setTheme] = useState('light');

  // Загрузка темы из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Сохранение темы в localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Загрузка данных
  useEffect(() => {
    if (selectedPile) {
      const mockData = {
        metrics: {
          avgTemperature: 45,
          maxTemperature: 78,
          riskLevel: 'Средний',
          sensorsCount: 24
        },
        thermalData: {},
        temperatureHistory: {},
        riskHistory: {},
        alerts: [
          { id: 1, message: 'Температура в зоне A превышает 70°C', timestamp: new Date(), level: 'warning' }
        ],
        currentRisk: 'medium'
      };
      setSensorData(mockData);
    } else {
      setSensorData(null);
    }
  }, [selectedPile, dateRange]);

  return (
    <div className="app" data-theme={theme}>
      <Header
        selectedPile={selectedPile}
        onPileChange={setSelectedPile}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        theme={theme}
        onThemeChange={setTheme}
      />
      
      <div className="dashboard-grid">
        {/* Остальной код без изменений */}
        <div className="row">
          <div className="col metrics-col">
            <MetricsCards data={sensorData} />
          </div>
          <div className="col map-col">
            <ThermalMap data={sensorData?.thermalData} />
          </div>
        </div>

        <div className="row">
          <div className="col chart-col">
            <TemperatureChart data={sensorData?.temperatureHistory} />
          </div>
          <div className="col chart-col">
            <RiskChart data={sensorData?.riskHistory} />
          </div>
        </div>

        <div className="row">
          <div className="col log-col">
            <AlertsLog alerts={sensorData?.alerts} />
          </div>
          <div className="col recommendations-col">
            <Recommendations riskLevel={sensorData?.currentRisk} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
