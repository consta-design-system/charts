# [Дизайн-система Consta](https://consta.design/) | Библиотека графиков

Consta — дизайн-система для разработки интерфейсов, написана на [React](https://reactjs.org/).

В дизайн-систему входит несколько библиотек. **В этом репозитории — библиотека графиков:** линейные, столбчатые, круговые диаграммы и другие компоненты, с помощью которых удобно показывать статистику. Библиотека сделана на основе [G2Plot](https://g2plot.antv.vision/en), добавлена стилизация для Consta.

Все библиотеки представлены в виде компонентов и макетов в Figma.

## Что входит в дизайн-систему

### Библиотека компонентов

[Репозиторий](https://github.com/consta-design-system/uikit) | [NPM](https://www.npmjs.com/package/@consta/uikit) | [Документация и стенд](http://uikit.consta.design/) | [Макеты](https://www.figma.com/community/file/853774806786762374)

### Библиотека графиков

[В этом репозитории](https://github.com/consta-design-system/charts) | [NPM](https://www.npmjs.com/package/@consta/charts) | [Документация и стенд](http://charts.consta.design/) | [Макеты](https://www.figma.com/community/file/982611119114314434)

[>> Посмотреть все библиотеки](https://github.com/consta-design-system)

<hr>

Подробности — на [сайте дизайн-системы Consta](https://consta.design/)

Следите за новостями и релизами в [телеграм-канале дизайн-системы](https://t.me/consta_ui_releases)

# Как использовать

## Установите пакет

```sh
# NPM
$ npm i @consta/charts
# Yarn
$ yarn add @consta/charts
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Pie, PieProps } from '@consta/charts/Pie';
export const data = [
  { type: 'Option-1', value: 27 },
  { type: 'Option-2', value: 25 },
  { type: 'Option-3', value: 18 },
  { type: 'Option-4', value: 15 },
  { type: 'Option-5', value: 10 },
  { type: 'Option-6', value: 5 },
];
const MyComponent = () => {
  const options: PieProps = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
  };
  return (
    <Theme preset={presetGpnDefault}>
      <Pie {...options} />
    </Theme>
  );
};
```

## Документация и стенд

На стенде можно посмотреть примеры графиков. Документация — во вкладке у каждого компонента.

[Вперёд, к стенду](http://consta.design/libs/charts)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
