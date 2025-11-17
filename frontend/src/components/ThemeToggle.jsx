import React from 'react';
import { Switch } from '@radix-ui/react-switch';
import { Label } from '@radix-ui/react-label';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, onThemeChange }) => {
  return (
    <div className="theme-toggle">
      <Label htmlFor="theme-mode" className="theme-label">
        <Sun size={16} />
      </Label>
      <Switch
        id="theme-mode"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => onThemeChange(checked ? 'dark' : 'light')}
        className="theme-switch"
      >
        <span className="theme-thumb" />
      </Switch>
      <Label htmlFor="theme-mode" className="theme-label">
        <Moon size={16} />
      </Label>
    </div>
  );
};

export default ThemeToggle;
