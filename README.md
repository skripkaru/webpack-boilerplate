# Шаблон для верстки

Этот шаблон представляет собой базовую структуру для разработки веб-приложений. Он включает в себя следующие инструменты
и технологии: Handlebars для шаблонизации, Webpack для сборки проекта, PostCSS для обработки CSS, ESLint и StyleLint для
контроля качества кода, Prettier для форматирования кода, Husky и Lint-staged для автоматической проверки кода перед
коммитом, Browserlist для определения поддерживаемых браузеров, Babel для поддержки современного JavaScript, и
EditorConfig для установки и поддержания единого стиля кодирования.

## Структура проекта

```
├── src/                       # Исходные файлы проекта
│   ├── data/                  # Данные для шаблонов
│   │   └── global.json        # Основной файл
│   ├── fonts/                 # Шрифты
│   ├── images/                # Изображения
│   ├── pages/                 # Страницы
│   │   └── index.hbs          # Основной файл
│   ├── partials/              # Частичные файлы
│   │   ├── components/        # Компоненты
│   │   ├── icons/             # Иконки svg
│   │   └── layouts/           # Шаблоны страниц
│   ├── scripts/               # Скрипты
│   │   ├── components/        # Компоненты
│   │   ├── utils/             # Утилиты
│   │   └── main.js            # Основной файл
│   └── styles/                # Стили
│   │   ├── components/        # Компоненты
│   │   ├── config/            # Конфигурация
│   │   ├── mixins/            # Миксины
│   │   ├── ui/                # Элементы UI
│   │   ├── utils/             # Утилиты
│   │   └── main.scss          # Основной файл
├── dist/                      # Собранный проект
├── node_modules/              # Зависимости проекта
├── .husky/                    # Конфигурация Husky
├── .babelrc                   # Конфигурация Babel
├── .editorconfig              # Конфигурация EditorConfig
├── .eslintrc                  # Конфигурация ESLint
├── .stylelintrc               # Конфигурация StyleLint
├── .prettierrc                # Конфигурация Prettier
├── .postcssrc                 # Конфигурация PostCSS
├── .browserslistrc            # Конфигурация Browserslist
├── .lintstagedrc              # Конфигурация Lint-staged
├── .gitignore                 # Файл для игнорирования файлов Git'ом
├── webpack.*.js               # Файлы конфигурации Webpack
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
- **Browserlist**: Для определения поддерживаемых браузеров.
- **Babel**: Для транспиляции современного JavaScript в код, совместимый со старыми версиями браузеров.
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

### ESLint, StyleLint, Prettier, PostCSS, Browserslist и Babel

Измените конфигурации в соответствующих файлах (`.eslintrc.js`, `.stylelintrc`, `.prettierrc`, `.postcssrc`, `.browserslistrc`, `.babelrc`) в соответствии с вашими предпочтениями.

### Webpack

Измените конфигурацию в файлах `webpack.*.js` для добавления новых модулей или изменения параметров сборки.

### Husky и Lint-staged

Настройте `.husky/` и `.lintstagedrc` для изменения скриптов и проверок, которые должны выполняться перед коммитом.

### EditorConfig

Настройте `.editorconfig` для установки единого стиля кодирования в вашем редакторе кода.

## Содействие и обратная связь

Проект открыт для содействия. Вы можете внести свой вклад через Pull Requests или сообщить об ошибках
через [Issues](https://github.com/skripkaru/webpack-boilerplate/issues).

Для обратной связи или вопросов свяжитесь с [Евгением Скрипкару](https://github.com/skripkaru).
