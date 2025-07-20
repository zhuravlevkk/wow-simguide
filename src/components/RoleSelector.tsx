import React from 'react';
import { Heart, Sword, Shield } from 'lucide-react';

export type Role = 'healer' | 'dps';

interface RoleSelectorProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onRoleChange }) => {
  return (
    <div className="section">
      <div className="container">
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: 'var(--wow-gold)'
        }}>
          Выберите вашу роль
        </h2>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => onRoleChange('healer')}
            className={`role-button ${selectedRole === 'healer' ? 'active' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: selectedRole === 'healer' ? 'var(--success-color)' : 'var(--bg-secondary)',
              color: selectedRole === 'healer' ? 'white' : 'var(--text-primary)',
              border: `2px solid ${selectedRole === 'healer' ? 'var(--success-color)' : 'var(--border-color)'}`,
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              transition: 'var(--transition)',
              minWidth: '200px',
              justifyContent: 'center'
            }}
          >
            <Heart size={24} />
            Хилер
          </button>

          <button
            onClick={() => onRoleChange('dps')}
            className={`role-button ${selectedRole === 'dps' ? 'active' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: selectedRole === 'dps' ? 'var(--error-color)' : 'var(--bg-secondary)',
              color: selectedRole === 'dps' ? 'white' : 'var(--text-primary)',
              border: `2px solid ${selectedRole === 'dps' ? 'var(--error-color)' : 'var(--border-color)'}`,
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              transition: 'var(--transition)',
              minWidth: '200px',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <Sword size={20} />
              <Shield size={20} />
            </div>
            ДД / Танк
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-tertiary)',
          padding: '1rem',
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--border-color)'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>💡 Совет:</strong> Процесс симуляции немного отличается для разных ролей
          </p>
          <p>
            Выберите вашу роль выше, чтобы увидеть соответствующее руководство
          </p>
        </div>

        <style>
          {`
            .role-button:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            }
            
            .role-button.active {
              transform: translateY(-1px);
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default RoleSelector;
