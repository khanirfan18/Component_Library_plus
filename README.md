# Component Library++

A collection of reusable React components built with Vite.

## Features

- **Badge** - Customizable badges with multiple colors and types
- **Banner** - Alert banners with title, body, and icon support
- **Button** - Flexible buttons with size and variant options
- **Card** - Content cards with title, body, and color-coded icons
- **Menu** - Dropdown menu with toggle functionality
- **Star** - Star rating component
- **Testimonial** - Testimonial cards with image and footer sections

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
# or
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage Examples

### Button

```jsx
import Button from "./components/Button/Button"

<Button size="sm" variant="primary">Click me</Button>
<Button size="lg" variant="outline">Large Button</Button>
```

### Badge

```jsx
import Badge from "./components/Badges/Badge"

<Badge color="blue" type="pill">New</Badge>
<Badge color="green">Success</Badge>
```

### Card

```jsx
import Card from "./components/Cards"

<Card color="blue" icon={<YourIcon />}>
  <Card.Title>Card Title</Card.Title>
  <Card.Body>Card content goes here.</Card.Body>
</Card>
```

### Menu

```jsx
import Menu from "./components/Menu"

<Menu onOpen={(isOpen) => console.log(isOpen)}>
  <Menu.Button>Toggle Menu</Menu.Button>
  <Menu.Dropdown>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
  </Menu.Dropdown>
</Menu>
```

## Project Structure

```
├── components/
│   ├── Badges/
│   ├── Banners/
│   ├── Button/
│   ├── Cards/
│   ├── Menu/
│   ├── Testimonials/
│   └── Star.jsx
├── hooks/
│   ├── useEffectOnUpdate.js
│   └── useToggle.js
├── index.html
├── index.jsx
├── style.css
└── vite.config.js
```

## Tech Stack

- React 19
- Vite
- react-icons
- clsx / classnames

