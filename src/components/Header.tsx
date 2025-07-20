import React from 'react';
import { Sun, Moon, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="section">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              color: 'var(--wow-gold)'
            }}>
              Симимся для рейда вместе с Кайдору
            </h1>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)',
              marginBottom: '1rem'
            }}>
              Полное руководство по симуляции персонажей для статик рейда
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://worldofwarcraft.blizzard.com/ru-ru/character/eu/howling-fjord/%D0%BA%D0%B0%D0%B9%D0%B4%D0%BE%D1%80%D1%83/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ backgroundColor: 'var(--wow-orange)' }}
              >
                <ExternalLink size={16} />
                Кайдору (Автор)
              </a>
              <a 
                href="https://worldofwarcraft.blizzard.com/ru-ru/character/eu/silvermoon/kasvius/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={16} />
                Касвий (Разработчик сайта)
              </a>
              <a 
                href="https://discord.gg/XKfhvTBQc6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ backgroundColor: 'var(--wow-purple)' }}
              >
                <ExternalLink size={16} />
                Discord "Юные Негодяи"
              </a>
            </div>
          </div>
          <button 
            onClick={toggleTheme}
            className="btn btn-secondary"
            style={{ 
              minWidth: '120px',
              alignSelf: 'flex-start'
            }}
            aria-label="Переключить тему"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
