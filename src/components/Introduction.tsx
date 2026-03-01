import React from 'react';
import { AlertTriangle, ExternalLink, Heart, Sword, Shield } from 'lucide-react';
import { Role } from './RoleSelector';

interface IntroductionProps {
  onStart: (role: Role) => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 56px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem 0',
    }}>
      <div className="container">
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            Симимся для рейда
            <br />
            <span style={{ color: 'var(--color-primary)' }}>вместе с Кайдору</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: '440px',
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}>
            Полное руководство по симуляции персонажей
            для статик рейда
          </p>

          {/* Role selection CTA */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}>
            <button
              onClick={() => onStart('healer')}
              className="btn btn-lg"
              style={{
                backgroundColor: 'var(--color-success)',
                minWidth: '180px',
              }}
            >
              <Heart size={20} />
              Я Хилер
            </button>
            <button
              onClick={() => onStart('dps')}
              className="btn btn-lg"
              style={{
                backgroundColor: 'var(--color-danger)',
                minWidth: '180px',
              }}
            >
              <Sword size={18} />
              <Shield size={18} />
              Я ДД / Танк
            </button>
          </div>
        </div>

        {/* Requirements card */}
        <div className="card" style={{ marginBottom: '1.25rem' }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}>
            Что вам понадобится
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: 'var(--border-radius-full)',
                backgroundColor: 'var(--color-success-light)',
                color: 'var(--color-success)',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>1</span>
              <span>
                Аддон{' '}
                <a
                  href="https://www.curseforge.com/wow/addons/simulationcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  SimulationCraft <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: 'var(--border-radius-full)',
                backgroundColor: 'var(--color-success-light)',
                color: 'var(--color-success)',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>2</span>
              <span>
                Сайт{' '}
                <a
                  href="https://wowaudit.com/eu/gordunni/юные-негодяи/statik"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  WowAudit <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: 'var(--border-radius-full)',
                backgroundColor: 'var(--color-success-light)',
                color: 'var(--color-success)',
                fontSize: '0.75rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>3</span>
              <span>Несколько минут вашего времени</span>
            </li>
          </ul>
        </div>

        {/* Warning */}
        <div className="warning" style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
            <AlertTriangle size={20} style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                marginBottom: '0.4rem',
                color: 'var(--color-warning)',
              }}>
                Важно о симуляции
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Симуляция — машинное вычисление, которое иногда не сходится с реальностью.
                Не доверяйте слепо — изучите свой спек по гайдам.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="card">
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: '0.85rem',
            color: 'var(--text-primary)',
          }}>
            Полезные ресурсы
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.5rem',
          }}>
            <a href="https://www.wowhead.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
              <ExternalLink size={14} />
              WowHead
            </a>
            <a href="https://www.icy-veins.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
              <ExternalLink size={14} />
              Icy Veins
            </a>
            <a href="https://bloodmallet.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
              <ExternalLink size={14} />
              Bloodmallet
            </a>
          </div>
        </div>

        {/* Credits */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem'
        }}>
          <p>
            <a
              href="https://worldofwarcraft.blizzard.com/ru-ru/character/eu/howling-fjord/%D0%BA%D0%B0%D0%B9%D0%B4%D0%BE%D1%80%D1%83/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-warning)', fontWeight: 600 }}
            >
              Кайдору
            </a>
            {' '}(Автор) &middot;{' '}
            <a
              href="https://worldofwarcraft.blizzard.com/ru-ru/character/eu/silvermoon/kasvius/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              Касвий
            </a>
            {' '}(Веб) &middot;{' '}
            <a
              href="https://discord.gg/XKfhvTBQc6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              Discord
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
