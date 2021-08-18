# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | Библиотека графиков

Consta — дизайн-система для разработки интерфейсов, написана на [React](https://reactjs.org/), сделана и поддерживается в «Газпром нефти».

**В этом репозитории — библиотека графиков:** линейные, столбчатые, круговые диаграммы и другие компоненты, с помощью которых удобно показывать статистику. Библиотека сделана на основе [G2Plot](https://g2plot.antv.vision/en), добавлена стилизация для Consta.

В другом репозитории — [библиотека интерфейсных компонентов](https://github.com/gazprom-neft/consta-uikit): простые контролы, сложные блоки, темы и хуки. Обе библиотеки представлены в виде компонентов и макетов в Figma.


## Что входит в дизайн-систему

### Библиотека компонентов

[Репозиторий](https://github.com/gazprom-neft/consta-uikit) | [NPM](https://www.npmjs.com/package/@consta/uikit) | [Документация и стенд](https://consta-uikit.vercel.app/?path=/story/common-about--page) | [Макеты](https://www.figma.com/community/file/853774806786762374)

### Библиотека графиков

[В этом репозитории](https://github.com/gazprom-neft/consta-charts) | [NPM](https://www.npmjs.com/package/@consta/charts) | [Документация и стенд](https://consta-charts.vercel.app/) | [Макеты](https://www.figma.com/community/file/982611119114314434)

<hr>

Подробности — на [сайте дизайн-системы Consta](http://consta.gazprom-neft.ru/)

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

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

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
]

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
  }

  return (
    <Theme preset={presetGpnDefault}>
      <Pie {...options}/>
    </Theme>
  )
}
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт Storybook
$ yarn start

# Сборка для production
$ yarn build

# Линтинг всех файлов
$ yarn lint

# Форматирование всех файлов prettier
$ yarn format

# Запуск юнит-тестов
$ yarn unit

# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация и стенд

На стенде можно посмотреть примеры графиков. Документация — во вкладке у каждого компонента.

[Вперёд, к стенду](https://consta-charts.vercel.app/?path=/story/*)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta-charts.vercel.app/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
