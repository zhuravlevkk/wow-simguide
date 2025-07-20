import React from 'react';
import { AlertTriangle, TrendingUp, BookOpen } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const BonusSection: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <TrendingUp size={32} style={{ color: 'var(--wow-gold)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--wow-gold)'
          }}>
            Бонусный пункт: Реальность vs Симуляция
          </h2>
        </div>

        <div className="card">
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Как я уже говорил в предисловии – <strong>некоторые результаты сима 
            отличаются от реальности</strong>. Покажу это на конкретном примере.
          </p>

          <div style={{ 
            backgroundColor: 'var(--bg-tertiary)',
            padding: '1.5rem',
            borderRadius: 'var(--border-radius)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              marginBottom: '1rem',
              color: 'var(--wow-orange)',
              fontSize: '1.2rem'
            }}>
              Пример с Enhancement Шаманом
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Я играю на энх шамане, и мои <strong>БИС тринки</strong> по гайдам выглядят так:
            </p>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li style={{ color: 'var(--wow-purple)' }}>🟣 Лучшая тринка A (по гайдам)</li>
              <li style={{ color: 'var(--wow-blue)' }}>🔵 Лучшая тринка B (по гайдам)</li>
              <li style={{ color: 'var(--wow-orange)' }}>🟠 Augury of the Primal Flame (симуляция показывает топ)</li>
            </ul>
            <ImagePlaceholder 
              title="БИС тринки для Enhancement шамана"
              description="Сравнение реальных БИС тринок с результатами симуляции"
              size="medium"
            />
          </div>

          <div className="warning">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <AlertTriangle size={24} style={{ color: 'var(--warning-color)', flexShrink: 0 }} />
              <div>
                <h4 style={{ 
                  marginBottom: '0.5rem', 
                  color: 'var(--warning-color)'
                }}>
                  Проблема симуляции
                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  В самой игре у моего персонажа сейчас <strong>не лучшие тринкеты</strong>, 
                  почему симуляция показывает мне возможные варианты из рейда.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Так как мои текущие тринкеты оставляют желать лучшего – в соотношении 
                  выходит так, что мне <strong>Augury даст больше других</strong>, хотя в 
                  реальности мне данная тринка не будет нужна и я не захочу её надевать 
                  в идеальном сценарии.
                </p>
                <p>
                  <strong>Вывод:</strong> Симуляция сравнивает с вашим текущим снаряжением, 
                  а не с идеальной ситуацией!
                </p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--success-color)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: 'var(--border-radius)',
            marginTop: '1.5rem'
          }}>
            <h3 style={{ 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <BookOpen size={20} />
              Рекомендация
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Очень важно перед рейдом прочитать всё про свой спек</strong> 
              в следующих источниках:
            </p>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                Классовые дискорды и классовые сайты
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                БИС листы вещей на{' '}
                <a 
                  href="https://www.wowhead.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  WowHead
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                Приоритет тринок на{' '}
                <a 
                  href="https://bloodmallet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline' }}
                >
                  Bloodmallet
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                Анализ топовых игроков на WarcraftLogs
              </li>
            </ul>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: 'var(--bg-tertiary)',
            borderRadius: 'var(--border-radius)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            <p>
              <strong>Цель:</strong> Нивелировать погрешности и неточности просчётов 
              SimCraft путём сопоставления с экспертным мнением и практическим опытом 
              топовых игроков.
            </p>
            <ImagePlaceholder 
              title="Bloodmallet - приоритет тринок"
              description="Скриншот с сайта Bloodmallet показывающий реальный рейтинг тринок"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
