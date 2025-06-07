# React Admin Dashboard

A modern, feature-rich admin dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides a comprehensive set of tools for managing users, viewing analytics, scheduling events, and organizing tasks.

## 🚀 Features

- **Customizable Themes**: Light, dark, and auto modes with multiple color schemes
- **Interactive Data Tables**: Sortable, filterable tables with pagination
- **Charts & Analytics**: Bar charts, line charts, and pie charts using Recharts
- **Calendar Integration**: Full-featured calendar with event management
- **Kanban Board**: Drag-and-drop task management with status tracking
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Type Safety**: Built with TypeScript for enhanced development experience

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
Output

![image](https://github.com/user-attachments/assets/972dcc8e-0cc8-42fa-b472-76e16ad136f6)

![image](https://github.com/user-attachments/assets/57d31bb1-8400-4b58-8af3-c6b58b71c0c4)

![image](https://github.com/user-attachments/assets/f1db918d-55f6-4f91-b76b-bf85b1d06ef4)

![image](https://github.com/user-attachments/assets/13f4477f-799f-4afd-a74a-b1b8b55581c0)




