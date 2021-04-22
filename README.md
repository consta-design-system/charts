# GPN Components

Репозиторий компонентов и графиков основанный на [g2plot](https://g2plot.antv.vision/en)

NPM: https://www.npmjs.com/package/@consta/charts
GitHub: https://github.com/gazprom-neft/consta-charts

## Использование

### Установка

Установка пакета:

```sh
# NPM
$ npm i @consta/charts

# Yarn
$ yarn add @consta/charts
```

### Зависимости

Для работы пакета необходимо установить библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настроить тему](https://consta-uikit.vercel.app/?path=/docs/components-theme--playground).

### Использование компонентов

Пример:

```js
import { Pie, PieProps } from '@consta/charts/Pie'

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
    <Pie
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  )
}
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Для установки зависимостей следует выполнить команду:

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

# Запуск тестов
$ yarn unit

# Запуск тестов и линтинг файлов
$ yarn test
```
