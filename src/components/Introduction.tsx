import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '1.5rem',
          color: 'var(--wow-blue)'
        }}>
          Предисловие
        </h2>
        
        <div className="card">
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            Для того, чтобы просимить себя для статик рейда вам понадобится несколько вещей:
          </p>
          
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="highlight">✓</span>
              аддон{' '}
              <a 
                href="https://www.curseforge.com/wow/addons/simulationcraft"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  fontWeight: 'bold'
                }}
              >
                SIMULATIONCRAFT
                <ExternalLink size={14} />
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="highlight">✓</span>
              сайт{' '}
              <a 
                href="https://wowaudit.com/eu/gordunni/юные-негодяи/statik"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.25rem',
                  fontWeight: 'bold'
                }}
              >
                WowAudit
                <ExternalLink size={14} />
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="highlight">✓</span>
              несколько минут вашего времени
            </li>
          </ul>

          <p style={{ 
            fontSize: '0.95rem', 
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            <strong>P.S.</strong> Сим хилов и дд/рдд/танк немного отличается, 
            потому я распишу подробно весь процесс сима для каждой роли.
          </p>
        </div>

        <div className="warning">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <AlertTriangle size={24} style={{ color: 'var(--warning-color)', flexShrink: 0 }} />
            <div>
              <h3 style={{ 
                marginBottom: '0.5rem', 
                color: 'var(--warning-color)',
                fontSize: '1.1rem'
              }}>
                Важное замечание о симуляции
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Симуляция – это машинное вычисление ваших улучшений</strong>, 
                которые иногда не сходятся с реальностью. Программа может нарисовать нам 
                определенную тринку как необходимую и дающую прирост дпс, хотя в реальности 
                данная тринка использоваться вашим спеком никогда не будет.
              </p>
              <p>
                В таких случаях я рекомендую <strong>не доверять слепо машинному вычислению</strong>, 
                а потратить немного времени и изучить ваш спек по гайдам.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ 
            marginBottom: '1rem',
            color: 'var(--wow-purple)',
            fontSize: '1.3rem'
          }}>
            Полезные ресурсы для изучения спека
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Большинство классов имеют отличные гайды в следующих источниках:
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <a 
              href="https://www.wowhead.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <ExternalLink size={16} />
              WowHead
            </a>
            <a 
              href="https://www.icy-veins.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <ExternalLink size={16} />
              Icy Veins
            </a>
            <a 
              href="https://bloodmallet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: 'var(--error-color)' }}
            >
              <ExternalLink size={16} />
              Bloodmallet
            </a>
          </div>
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            Также обязательно изучите классовые дискорды и классовые сайты, 
            где можно подробно разобраться в тонкостях и увидеть БИС лист шмоток.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
