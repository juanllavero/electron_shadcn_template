# Electron + Vite + Shadcn/ui + Tailwind v4 Template

Custom Electron template created based on [LuanRoger](https://github.com/LuanRoger/electron-shadcn)'s template

### Core

- [Electron 34](https://www.electronjs.org)
- [Vite 6](https://vitejs.dev)

### Dev

- [TypeScript 5.7](https://www.typescriptlang.org)
- [Prettier](https://prettier.io)
- [ESLint 9](https://eslint.org)
- [Zod](https://zod.dev)
- [React Query (TanStack)](https://react-query.tanstack.com)

### UI

- [React 19](https://reactjs.org)
- [Tailwind 4](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Geist](https://vercel.com/font) as default font
- [i18next](https://www.i18next.com)
- [TanStack Router](https://tanstack.com/router)
- [Lucide](https://lucide.dev)

### Test

- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Packing and distribution 

- [Electron Forge](https://www.electronforge.io)

### CI/CD

- Pre-configured [GitHub Actions workflow](https://github.com/LuanRoger/electron-shadcn/blob/main/.github/workflows/playwright.yml), for test with Playwright

## Directory structure

```plaintext
.
└── ./src/
    ├── ./src/assets/
    │   └── ./src/assets/fonts/
    ├── ./src/components/
    │   ├── ./src/components/template
    │   └── ./src/components/ui/
    ├── ./src/helpers/
    │   └── ./src/helpers/ipc/
    ├── ./src/layout/
    ├── ./src/lib/
    ├── ./src/pages/
    ├── ./src/style/
    └── ./src/tests/
```

- `src/`: Main directory
  - `assets/`: Store assets like images, fonts, etc.
  - `components/`: Store UI components
    - `template/`: Store the all not important components used by the template. It doesn't include the `WindowRegion` or the theme toggler, if you want to start an empty project, you can safely delete this directory.
    - `ui/`: Store Shadcn UI components (this is the default direcotry used by Shadcn UI)
  - `helpers/`: Store IPC related functions to be called in the renderer process
    - `ipc/`: Directory to store IPC context and listener functions
      - Some implementations are already done, like `theme` and `window` for the custom title bar
  - `layout/`: Directory to store layout components
  - `lib/`: Store libraries and other utilities
  - `pages/`: Store app's pages
  - `style/`: Store global styles
  - `tests/`: Store tests (from Vitest and Playwright)

## How to use

1. Clone this repository

```bash
git clone https://github.com/LuanRoger/electron-shadcn.git
```

Or use it as a template on GitHub

2. Install dependencies

```bash
npm install
```

3. Run the app

```bash
npm run dev
```