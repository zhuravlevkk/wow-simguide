# WoW Simulation Guide 🛡️⚔️

Веб-версия руководства по симуляции персонажей World of Warcraft для статик рейда.

## 📖 О проекте

Это интерактивная веб-версия мануала "Симимся для рейда вместе с Кайдору", созданного для гильдии **Юные Негодяи**. Руководство помогает игрокам правильно провести симуляцию своих персонажей для оптимизации экипировки в рейдах.

## ✨ Возможности

- 🌙 **Темная и светлая темы** - переключение одним кликом
- 📱 **Адаптивный дизайн** - работает на всех устройствах  
- 🧭 **Удобная навигация** - быстрый переход между разделами
- 🔗 **Все необходимые ссылки** - прямые ссылки на инструменты и ресурсы
- 💎 **WoW-стилизация** - дизайн в стиле игры с цветами качества предметов

## 🎯 Разделы руководства

1. **Предисловие** - важная информация о симуляции
2. **Сим Хила** - пошаговое руководство для лечащих классов
3. **Сим ДД/Танк** - инструкции для урона и танков  
4. **Бонус секция** - практические примеры и рекомендации

## 🛠️ Технологии

- **React 18** с TypeScript
- **Emotion** для стилизации
- **Lucide React** для иконок
- **CSS Custom Properties** для тем
- **Mobile-first** адаптивная верстка

## 🚀 Быстрый старт

### Установка

```bash
# Клонируем репозиторий
git clone https://github.com/username/wow-simguide.git
cd wow-simguide

# Устанавливаем зависимости
npm install

# Запускаем dev сервер
npm start
```

### Сборка для продакшена

```bash
npm run build
```

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Header.tsx      # Шапка сайта
│   ├── Navigation.tsx  # Навигационное меню
│   ├── Introduction.tsx # Предисловие
│   ├── HealerSimulation.tsx # Руководство для хилов
│   ├── DpsSimulation.tsx    # Руководство для ДД/танков
│   └── BonusSection.tsx     # Дополнительная информация
├── contexts/           # React контексты
│   └── ThemeContext.tsx # Управление темами
├── styles/            # Стили
│   └── globals.css    # Глобальные стили и темы
└── App.tsx           # Главный компонент
```

## 🔗 Полезные ссылки

### Инструменты для симуляции
- [SimulationCraft Addon](https://www.curseforge.com/wow/addons/simulationcraft)
- [QuestionablyEpic Live](https://questionablyepic.com/live/) - для хилов
- [Raidbots Droptimizer](https://www.raidbots.com/simbot/droptimizer) - для ДД/танков
- [WowAudit](https://wowaudit.com/) - для загрузки результатов

### Ресурсы для изучения
- [WowHead](https://www.wowhead.com/) - гайды и информация
- [Icy Veins](https://www.icy-veins.com/) - подробные гайды
- [Bloodmallet](https://bloodmallet.com/) - статистика тринкетов

## 👥 Авторы

- **Кайдору** - автор оригинального мануала
- **Касвий** - разработчик веб-версии

### Персонажи
- [Кайдору](https://worldofwarcraft.blizzard.com/ru-ru/character/eu/howling-fjord/%D0%BA%D0%B0%D0%B9%D0%B4%D0%BE%D1%80%D1%83/) - Ревущий фьорд (EU)
- [Касвий](https://worldofwarcraft.blizzard.com/ru-ru/character/eu/silvermoon/kasvius/) - Silvermoon (EU)

## 🏰 Гильдия

**Юные Негодяи** - гильдия на сервере Гордунни (EU)
- [Discord сервер](https://discord.gg/XKfhvTBQc6)

## 📝 Лицензия

Этот проект создан для образовательных целей и использования внутри игрового сообщества World of Warcraft.

---

*Для Азерота! За Орду/Альянс!* ⚔️🛡️
