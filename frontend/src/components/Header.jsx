import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';
import { ChevronDown, Calendar } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ 
  selectedPile, 
  onPileChange, 
  dateRange, 
  onDateRangeChange, 
  theme, 
  onThemeChange 
}) => {
  // Функция для отображения выбранного значения
  const getDisplayValue = () => {
    switch(selectedPile) {
      case 'pile-1': return 'Штабель 1';
      case 'pile-2': return 'Штабель 2';
      case 'pile-3': return 'Штабель 3';
      default: return '';
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>Система мониторинга угольных штабелей</h1>
        <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      </div>
      
      <div className="controls">
        <div className="control-group">
          <Label htmlFor="pile-select" className="control-label">
            Выберите штабель
          </Label>
          <Select value={selectedPile} onValueChange={onPileChange}>
            <SelectTrigger id="pile-select" className="select-trigger">
              <SelectValue>
                {getDisplayValue() || "Выберите штабель"}
              </SelectValue>
              <ChevronDown className="select-chevron" />
            </SelectTrigger>
            <SelectContent className="select-content">
              <SelectItem value="pile-1" className="select-item">
                Штабель 1
              </SelectItem>
              <SelectItem value="pile-2" className="select-item">
                Штабель 2
              </SelectItem>
              <SelectItem value="pile-3" className="select-item">
                Штабель 3
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="control-group">
          <Label className="control-label">Период</Label>
          <div className="date-range">
            <Calendar size={16} className="date-icon" />
            <input 
              type="date" 
              value={dateRange.start ? dateRange.start.toISOString().split('T')[0] : ''}
              onChange={(e) => onDateRangeChange({...dateRange, start: new Date(e.target.value)})}
              className="date-input"
            />
            <span className="date-separator">—</span>
            <input 
              type="date" 
              value={dateRange.end ? dateRange.end.toISOString().split('T')[0] : ''}
              onChange={(e) => onDateRangeChange({...dateRange, end: new Date(e.target.value)})}
              className="date-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
