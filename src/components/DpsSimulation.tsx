import React from 'react';
import { ExternalLink, Clock, Zap } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import StepWizard, { WizardStep } from './StepWizard';

const dpsSteps: WizardStep[] = [
  {
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
    title: "Прописываем команду в чат",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          В игровом чате введите команду и скопируйте результат:
        </p>
        <div className="code-snippet">/simc</div>
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
    title: "Переходим на Raidbots Droptimizer",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Заходим на сайт Raidbots и используем инструмент Droptimizer:
        </p>
        <a
          href="https://www.raidbots.com/simbot/droptimizer"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ marginBottom: '1rem' }}
        >
          <ExternalLink size={16} />
          Raidbots Droptimizer
        </a>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          В графу <strong>Load from simc addon</strong> вставляем данные сочетанием <kbd>Ctrl+V</kbd>
        </p>
        <ImagePlaceholder
          title="Raidbots Droptimizer - загрузка данных"
          description="Поле Load from simc addon на сайте Raidbots"
          size="large"
          imageSrc={`${process.env.PUBLIC_URL}/images/droptimizer.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Настраиваем Sources",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Снизу у нас появилось несколько новых менюшек. В графе <strong>Sources</strong>{' '}
          выбираем <strong>актуальный рейд</strong> и ставим нужную нам сложность:
        </p>
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginTop: '1rem'
        }}>
          <span className="btn btn-secondary">Normal</span>
          <span className="btn btn-secondary">Heroic</span>
          <span className="btn btn-secondary">Mythic</span>
        </div>
        <ImagePlaceholder
          title="Настройка Sources в Raidbots"
          description="Выбор рейда и сложности"
          size="medium"
          imageSrc={`${process.env.PUBLIC_URL}/images/sources.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Настраиваем Items to sim",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          В графе <strong>Items to sim</strong> выбираем такие же настройки,
          как и в предыдущем пункте (тот же рейд и сложность).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Также необходимо:
        </p>
        <ul style={{
          marginBottom: '1rem',
          paddingLeft: '1.5rem'
        }}>
          <li>Выбрать максимальный уровень предметов</li>
          <li>Настроить камни на основные характеристики (main stats)</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          Для определения приоритетных основных характеристик для вашего класса и специализации используйте:
        </p>
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://murlok.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <ExternalLink size={16} />
            Murlok.io
          </a>
          <a
            href="https://www.archon.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <ExternalLink size={16} />
            Archon.gg
          </a>
        </div>
        <ImagePlaceholder
          title="Items to sim настройки"
          description="Настройка максимального уровня предметов и камней"
          size="medium"
          imageSrc={`${process.env.PUBLIC_URL}/images/items-to-sim.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Настраиваем Simulation Options",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Листаем чуть ниже и в графе <strong>Simulation Options</strong> выбираем
          аналогичные настройки:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.75rem',
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: 'var(--bg-tertiary)',
          borderRadius: 'var(--border-radius-sm)',
          fontSize: '0.9rem'
        }}>
          <div><strong>Fight Style:</strong> Patchwerk</div>
          <div><strong>Bosses:</strong> 1 Boss</div>
          <div><strong>Fight Length:</strong> 5 min</div>
          <div><strong>SimC Version:</strong> Weekly</div>
        </div>
        <ImagePlaceholder
          title="Simulation Options в Raidbots"
          description="Настройки симуляции: Fight Style, Number of Bosses, Fight Length, SimC Version"
          size="large"
          imageSrc={`${process.env.PUBLIC_URL}/images/simulation-options.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Запускаем симуляцию",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Листаем в самый низ и жмем <strong>RUN DROPTIMIZER</strong>.
          Обязательно поставьте галочку <strong>High Precision</strong> для более точных результатов.
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1rem',
          flexWrap: 'wrap'
        }}>
          <button className="btn" disabled style={{ opacity: 0.7 }}>
            <Zap size={16} />
            RUN DROPTIMIZER
          </button>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            <input type="checkbox" defaultChecked />
            High Precision
          </label>
        </div>
        <ImagePlaceholder
          title="Кнопка RUN DROPTIMIZER"
          description="Кнопка запуска симуляции с галочкой High Precision"
          size="small"
          imageSrc={`${process.env.PUBLIC_URL}/images/run-droptimizer.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Ожидаем результаты",
    content: (
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <Clock size={16} style={{ color: 'var(--color-warning)' }} />
          <span>Идем отдыхать на пару минут...</span>
        </div>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          Процесс симуляции занимает довольно много времени, плюс может быть
          длинная очередь на сайте. Наберитесь терпения!
        </p>
        <ImagePlaceholder
          title="Процесс выполнения симуляции"
          description="Экран ожидания с прогрессом выполнения симуляции"
          size="medium"
          imageSrc={`${process.env.PUBLIC_URL}/images/waiting.jpeg`}
        />
      </div>
    )
  },
  {
    title: "Копируем ссылку результатов",
    content: (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Когда всё завершится, страница будет выглядеть примерно так,
          как показано в примере. Просто скопируйте ссылку этой страницы.
        </p>
        <div className="success">
          <p><strong>Готово!</strong> У вас есть ссылка на результаты симуляции.</p>
        </div>
        <ImagePlaceholder
          title="Готовые результаты Droptimizer"
          description="Страница с завершенной симуляцией и результатами"
          size="large"
          imageSrc={`${process.env.PUBLIC_URL}/images/droptimizer-results.jpeg`}
        />
      </div>
    )
  },
  {
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
          авторизируемся, проверяем чтобы справа сверху был никнейм вашего персонажа.
        </p>
        <p>
          Вставляем полученную ссылку и нажимаем <strong>GO</strong>.
        </p>
      </div>
    )
  },
  {
    title: "Анализируем результаты",
    content: (
      <div className="success">
        <p style={{ marginBottom: '0.75rem' }}>
          <strong>Отлично!</strong> Теперь вы можете посмотреть, какие шмотки
          дадут вам улучшение и надеемся получить их в рейде!
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Не забывайте сверяться с гайдами и мнением опытных игроков вашего класса.
        </p>
      </div>
    )
  }
];

const DpsSimulation: React.FC = () => {
  return (
    <StepWizard
      steps={dpsSteps}
      accentColor="var(--color-danger)"
    />
  );
};

export default DpsSimulation;
