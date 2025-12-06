# Text Component - Руководство по использованию

Универсальный компонент для работы с типографикой в приложении.

## Основное использование

```tsx
import { Text } from 'shared/ui';

<Text view="display1">Заголовок страницы</Text>
<Text view="body">Обычный текст параграфа</Text>
```

## Типы текста (view)

### Display уровни
- **`display1`** - Самый крупный заголовок (40-72px)
  - Использование: Главный заголовок страницы, hero секция
  - Шрифт: Bitter (serif)
  - Цвет: `--text-main-display` (#111)

- **`display2`** - Крупный заголовок (28-40px)
  - Использование: Основные разделы страницы
  - Шрифт: Bitter (serif)
  - Цвет: `--text-main-display` (#111)

### Header уровни
- **`header1`** - Заголовок первого уровня (22-28px)
  - Использование: Подразделы, карточки
  - Шрифт: Inter (sans-serif)
  - Цвет: `--text-main-header` (#222)

- **`header2`** - Заголовок второго уровня (18px)
  - Использование: Небольшие секции
  - Шрифт: Inter (sans-serif)
  - Цвет: `--text-main-header` (#222)

- **`header3`** - Заголовок третьего уровня (16px)
  - Использование: Мелкие подзаголовки
  - Шрифт: Inter (sans-serif)
  - Цвет: `--text-main-header` (#222)

### Body уровни
- **`body`** - Основной текст (16px)
  - Использование: Параграфы, основной контент
  - Шрифт: Inter (sans-serif)
  - Цвет: `--text-main-body` (#333)

- **`bodySmall`** - Мелкий текст (14px)
  - Использование: Подписи, описания, метаданные
  - Шрифт: Inter (sans-serif)
  - Цвет: `--text-main-body` (#333)

### Специальные
- **`overline`** - Надпись над заголовком (11px, uppercase)
  - Использование: Метки разделов, категории

- **`tag`** - Теги и метки (13px, uppercase)
  - Использование: Теги, кнопки-метки, призывы к действию

## Выравнивание (align)

```tsx
<Text view="header1" align="left">По левому краю (по умолчанию)</Text>
<Text view="header1" align="center">По центру</Text>
<Text view="header1" align="right">По правому краю</Text>
<Text view="header1" align="offset">С отступом слева</Text>
```

- **`left`** - Выравнивание по левому краю (по умолчанию)
- **`center`** - Выравнивание по центру
- **`right`** - Выравнивание по правому краю
- **`offset`** - Выравнивание по левому краю с отступом 3rem (для визуальной иерархии)

## Жирность шрифта (weight)

```tsx
<Text view="body" weight="regular">Обычный (400)</Text>
<Text view="body" weight="medium">Средний (500)</Text>
<Text view="body" weight="semibold">Полужирный (600)</Text>
<Text view="body" weight="bold">Жирный (700)</Text>
```

## Модификаторы

### Верхний регистр (caps)
```tsx
<Text view="bodySmall" caps>
  Весь текст в верхнем регистре
</Text>
```

### Линии декорации (withLines)
```tsx
<Text view="display2" withLines>
  Текст с горизонтальной линией
</Text>
```
- Горизонтальная линия проходит через центр текста
- Текст перекрывает линию с паддингами по бокам (1rem)
- Отлично подходит для заголовков разделов

### Приглушенный цвет (muted)
```tsx
<Text view="bodySmall" muted>
  Текст серого цвета для второстепенной информации
</Text>
```
- Цвет: `--text-muted` (#a0a0a0)

### Инверсия цвета (inverse)
```tsx
<Text view="body" inverse>
  Белый текст для темного фона
</Text>
```
- Цвет: `--text-inverse` (#fff)

## Кастомный HTML тег (as)

```tsx
<Text view="body" as="span">Текст в span вместо p</Text>
<Text view="header1" as="h1">Заголовок в h1 вместо h2</Text>
```

По умолчанию теги назначаются автоматически:
- `display1`, `display2` → `h1`
- `header1` → `h2`
- `header2` → `h3`
- `header3` → `h4`
- `body`, `bodySmall` → `p`
- `overline`, `tag` → `span`

## Примеры использования

### Заголовок страницы с линиями
```tsx
<Text view="display2" withLines align="center">
  My Books
</Text>
```

### Секция с подзаголовком
```tsx
<Text view="overline">Projects</Text>
<Text view="header1">Featured Work</Text>
<Text view="body" muted>
  A collection of my recent projects and experiments
</Text>
```

### Карточка с метаданными
```tsx
<Text view="header2">Article Title</Text>
<Text view="bodySmall" muted>Published on January 1, 2024</Text>
<Text view="body">
  Article content goes here...
</Text>
```

### Призыв к действию
```tsx
<Text view="tag">Read More</Text>
```

### Комбинация модификаторов
```tsx
<Text view="header1" align="offset" withLines weight="bold">
  Summary
</Text>

<Text view="bodySmall" caps muted>
  Additional Information
</Text>
```

## CSS переменные для кастомизации

```css
--font-display: bitter, serif;
--font-body: inter, sans-serif;
--text-main-display: #111;
--text-main-header: #222;
--text-main-body: #333;
--text-muted: #a0a0a0;
--text-inverse: #fff;
```

## Типы TypeScript

```tsx
type TypographyView =
  | 'display1'
  | 'display2'
  | 'header1'
  | 'header2'
  | 'header3'
  | 'body'
  | 'bodySmall'
  | 'overline'
  | 'tag';

type TypographyAlign = 'left' | 'center' | 'right' | 'offset';

interface TypographyProps {
  view: TypographyView;
  as?: keyof JSX.IntrinsicElements;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  align?: TypographyAlign;
  caps?: boolean;
  withLines?: boolean;
  muted?: boolean;
  inverse?: boolean;
  className?: string;
  children: ReactNode;
}
```
