# Шаблон для верстки сайтов

Данный шаблон предоставляет базовую структуру для разработки веб-сайтов. Он призван облегчить начало работы над
проектами, предоставляя минимальную настройку для сборки фронтенда.

## Структура проекта

```
├── src/                       # Исходные файлы проекта
│   ├── assets/                # Статичные файлы
│   │   ├── fonts/             # Шрифты
│   │   ├── icons/             # Иконки
│   │   └── images/            # Изображения
│   ├── scripts/               # Скрипты
│   │   ├── components/        # Компоненты
│   │   ├── config/            # Конфигурация
│   │   ├── utils/             # Утилиты
│   │   └── main.js            # Основной файл
│   ├── styles/                # Стили
│   │   ├── components/        # Компоненты
│   │   │   └── ui/            # Элементы UI
│   │   ├── config/            # Конфигурация
│   │   ├── mixins/            # Миксины
│   │   ├── utils/             # Утилиты
│   │   └── main.scss          # Основной файл
│   ├── views/                 # Шаблоны Handlebars
│   │   ├── data/              # Данные для шаблонов
│   │   │   └── global.json    # Основной файл
│   │   ├── helpers/           # Вспомогательные функции
│   │   ├── pages/             # Страницы
│   │   │   └── index.hbs      # Основной файл
│   │   └── partials/          # Частичные файлы
│   │       ├── components/    # Компоненты
│   │       │   └── ui/        # Элементы UI
│   │       └── layouts/       # Шаблоны страниц
├── dist/                      # Собранный проект
├── node_modules/              # Зависимости проекта
├── .husky/                    # Конфигурация Husky
├── .editorconfig              # Конфигурация EditorConfig
├── .eslintrc                  # Конфигурация ESLint
├── .stylelintrc               # Конфигурация StyleLint
├── .prettierrc                # Конфигурация Prettier
├── .postcssrc                 # Конфигурация PostCSS
├── .browserslistrc            # Конфигурация Browserslist
├── .lintstagedrc              # Конфигурация Lint-staged
├── .gitignore                 # Файл для игнорирования файлов Git'ом
├── webpack.config.js          # Файл конфигурации Webpack
├── package.json               # Файл с настройками проекта и зависимостями
└── README.md                  # Документация проекта
```

## Используемые инструменты и зависимости

- **Handlebars**: Для создания HTML шаблонов с возможностью использования частичных шаблонов.
- **Webpack**: Для сборки проекта и управления модулями.
- **PostCSS**: Для обработки и улучшения CSS с помощью плагинов.
- **ESLint и StyleLint**: Для статического анализа и обеспечения стиля кода JavaScript и CSS соответственно.
- **Prettier**: Для автоматического форматирования кода в соответствии с установленными правилами.
- **Husky и Lint-staged**: Для автоматической проверки кода перед коммитом с использованием ESLint, StyleLint и
  Prettier.
- **Browserslist**: Для определения поддерживаемых браузеров.
- **EditorConfig**: Для установки единого стиля кодирования в редакторах кода разработчиков.

## Инструкции по использованию

Установка зависимостей

```bash
  yarn install
```

Запуск проекта в режиме разработки

```bash
  yarn dev
```

Сборка проекта для продакшна

```bash
  yarn build
```

Анализ и исправление скриптов

```bash
  yarn lint
```

Анализ и исправление стилей

```bash
  yarn lint:css
```

Форматирование кода

```bash
  yarn format
```

## Настройка и кастомизация

### ESLint, StyleLint, Prettier, PostCSS, Browserslist

Измените конфигурации в соответствующих
файлах (`.eslintrc.js`, `.stylelintrc`, `.prettierrc`, `.postcssrc`, `.browserslistrc`) в соответствии с
вашими предпочтениями.

### Webpack

Измените конфигурацию в файле `webpack.config.js` для добавления новых модулей или изменения параметров сборки.

### Husky и Lint-staged

Настройте `.husky/` и `.lintstagedrc` для изменения скриптов и проверок, которые должны выполняться перед коммитом.

### EditorConfig

Настройте `.editorconfig` для установки единого стиля кодирования в вашем редакторе кода.

## Содействие и обратная связь

Проект открыт для содействия. Вы можете внести свой вклад через Pull Requests или сообщить об ошибках
через [Issues](https://github.com/skripkaru/webpack-boilerplate/issues).

Для обратной связи или вопросов свяжитесь с [Евгением Скрипкару](https://github.com/skripkaru).
