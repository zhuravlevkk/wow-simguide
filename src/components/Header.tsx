import React from 'react';
import { Sun, Moon, Heart, Sword, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Role } from './RoleSelector';

interface HeaderProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedRole, onRoleChange }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '56px',
      }}>
        {/* Logo */}
        <span style={{
          fontWeight: 800,
          fontSize: '1.05rem',
          color: 'var(--color-primary)',
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
        }}>
          SimGuide
        </span>

        {/* Role toggle */}
        <div style={{
          display: 'flex',
          backgroundColor: 'var(--bg-tertiary)',
          borderRadius: 'var(--border-radius-full)',
          padding: '3px',
          gap: '2px',
        }}>
          <button
            onClick={() => onRoleChange('healer')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.85rem',
              borderRadius: 'var(--border-radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: 'var(--font-family)',
              transition: 'var(--transition-fast)',
              backgroundColor: selectedRole === 'healer' ? 'var(--color-success)' : 'transparent',
              color: selectedRole === 'healer' ? '#fff' : 'var(--text-secondary)',
            }}
          >
            <Heart size={14} />
            Хилер
          </button>
          <button
            onClick={() => onRoleChange('dps')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.85rem',
              borderRadius: 'var(--border-radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: 'var(--font-family)',
              transition: 'var(--transition-fast)',
              backgroundColor: selectedRole === 'dps' ? 'var(--color-danger)' : 'transparent',
              color: selectedRole === 'dps' ? '#fff' : 'var(--text-secondary)',
            }}
          >
            <Sword size={13} />
            <Shield size={13} />
            ДД/Танк
          </button>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Переключить тему"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: 'var(--border-radius-full)',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            padding: 0,
          }}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
