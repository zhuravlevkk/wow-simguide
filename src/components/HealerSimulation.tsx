import React from 'react';
import { Heart, ExternalLink, Settings, Upload } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const HealerSimulation: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Заходим в игру с включенным аддоном SIMULATIONCRAFT",
      content: (
        <p>
          Убедитесь, что у вас установлен и активен аддон{' '}
          <a 
            href="https://www.curseforge.com/wow/addons/simulationcraft"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            SimulationCraft <ExternalLink size={12} style={{ display: 'inline' }} />
          </a>
        </p>
      )
    },
    {
      number: 2,
      title: "Прописываем команду в чат",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            В игровом чате введите команду и скопируйте результат:
          </p>
          <div className="code-snippet">
            /simc
          </div>
          <p style={{ 
            fontSize: '0.9rem', 
            color: 'var(--text-secondary)',
            marginTop: '0.5rem'
          }}>
            Скопируйте весь текст сочетанием клавиш <kbd>Ctrl+C</kbd>
          </p>
          <ImagePlaceholder 
            title="Команда /simc в игре"
            description="Скриншот показывающий выполнение команды /simc в чате WoW"
            size="medium"
            imageSrc={`${process.env.PUBLIC_URL}/images/simc.jpeg`}
          />
        </div>
      )
    },
    {
      number: 3,
      title: "Переходим на сайт QuestionablyEpic",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Заходим на специализированный сайт для симуляции хилов:
          </p>
          <a 
            href="https://questionablyepic.com/live/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ marginBottom: '1rem' }}
          >
            <ExternalLink size={16} />
            QuestionablyEpic Live
          </a>
        </div>
      )
    },
    {
      number: 4,
      title: "Выбираем спек хила",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Снизу страницы выберите нужный вам спек хила из доступных вариантов.
          </p>
          <ImagePlaceholder 
            title="Выбор спека хила на QuestionablyEpic"
            description="Скриншот со списком доступных спеков хилеров"
            size="medium"
            imageSrc={`${process.env.PUBLIC_URL}/images/questionablyepic.jpeg`}
          />
        </div>
      )
    },
    {
      number: 5,
      title: "Переходим в Upgrade Finder",
      content: (
        <p>
          Переходим на страницу <strong>"upgrade finder / поиск улучшений"</strong>
        </p>
      )
    },
    {
      number: 6,
      title: "Импортируем данные SimC",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Нажимаем на кнопку <strong>"Импортируйте simc/ import gear"</strong>
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <Upload size={16} />
            <span>Import Gear</span>
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: "Вставляем скопированные данные",
      content: (
        <div>
          <div>
            <p style={{ marginBottom: '1rem' }}>
              Вставляем скопированные из игры данные сочетанием клавиш <kbd>Ctrl+V</kbd> 
              и жмем справа снизу <strong>Отправить</strong>
            </p>
            <ImagePlaceholder 
              title="Вставка данных SimC"
              description="Поле для вставки данных из аддона SimulationCraft"
              size="large"
              imageSrc={`${process.env.PUBLIC_URL}/images/import-gear.jpeg`}
            />
          </div>
        </div>
      )
    },
    {
      number: 8,
      title: "Настраиваем параметры",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Открываем выпадающую менюшку <strong>Settings/Настройки</strong> и 
            ставим значение <strong>auto-add Sockets</strong> с <code>false</code> на <code>true</code>
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            marginTop: '1rem'
          }}>
            <Settings size={16} />
            <span>auto-add Sockets: <span className="highlight">true</span></span>
          </div>
          <ImagePlaceholder 
            title="Настройки auto-add Sockets"
            description="Скриншот настроек с включенной опцией auto-add Sockets"
            size="medium"
            imageSrc={`${process.env.PUBLIC_URL}/images/auto-add-sockets.jpeg`}
          />
        </div>
      )
    },
    {
      number: 9,
      title: "Выбираем сложность рейда",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Выбираем сложность рейда <strong>Героический/Heroic</strong> или 
            <strong>Эпохальный/Mythic</strong> и жмем самую нижную кнопку <strong>"Вперёд!/GO!"</strong>
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <span className="btn btn-secondary">Heroic</span>
            <span className="btn btn-secondary">Mythic</span>
          </div>
          <ImagePlaceholder 
            title="Выбор сложности рейда"
            description="Скриншот с кнопками выбора сложности (Heroic/Mythic)"
            size="medium"
            imageSrc={`${process.env.PUBLIC_URL}/images/heroic-mythic.jpeg`}
          />
        </div>
      )
    },
    {
      number: 10,
      title: "Копируем ссылку результатов",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            После завершения симуляции скопируйте ссылку на страницу с результатами.
          </p>
          <div className="success">
            <p><strong>Готово!</strong> Теперь у вас есть результаты симуляции для хила.</p>
          </div>
          <ImagePlaceholder 
            title="Результаты симуляции хила"
            description="Пример готовых результатов симуляции с улучшениями для хилера"
            size="large"
            imageSrc={`${process.env.PUBLIC_URL}/images/healer-results.jpeg`}
          />
        </div>
      )
    },
    {
      number: 11,
      title: "Загружаем в WowAudit",
      content: (
        <div>
          <p style={{ marginBottom: '1rem' }}>
            Переходим по ссылке{' '}
            <a 
              href="https://wowaudit.com/eu/gordunni/юныенегодяи/statik/wishlists/personal"
              target="_blank"
              rel="noopener noreferrer"
            >
              WowAudit Personal Wishlists <ExternalLink size={12} style={{ display: 'inline' }} />
            </a>, 
            авторизируемся на сайте, проверяем чтобы справа сверху был ник вашего персонажа.
          </p>
          <p>
            Вставляем скопированную ссылку в поле и нажимаем <strong>Go</strong>
          </p>
        </div>
      )
    },
    {
      number: 12,
      title: "Проверяем результаты",
      content: (
        <div className="success">
          <p>
            <strong>Отлично!</strong> Если вы сделали всё правильно, то можете посмотреть 
            на свои возможные улучшения и надеяться, что эти вещи выпадут в рейде и 
            уйдут именно вам! 🎉
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Heart size={32} style={{ color: 'var(--success-color)' }} />
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--success-color)'
          }}>
            Симим Хила
          </h2>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem' 
        }}>
          {steps.map((step) => (
            <div key={step.number} className="card">
              <div className="step-title">
                <span className="step-number">{step.number}</span>
                {step.title}
              </div>
              <div style={{ marginLeft: '2.75rem' }}>
                {step.content}
              </div>
            </div>
          ))}
        </div>

        <div className="warning" style={{ marginTop: '2rem' }}>
          <h3 style={{ 
            marginBottom: '1rem',
            color: 'var(--warning-color)'
          }}>
            💡 Совет для хилов
          </h3>
          <p>
            Помните, что симуляция хилов может отличаться от реальных условий рейда. 
            Всегда учитывайте механики боссов, позиционирование и паттерны урона при 
            выборе экипировки и талантов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealerSimulation;
