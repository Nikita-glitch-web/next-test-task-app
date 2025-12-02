<div align="center">
  <h1>🚀 TaskFlow</h1>
  <p><strong>A Modern Task Management Application</strong></p>
  <p>Built with Next.js 15, TypeScript, and Tailwind CSS</p>

  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#architecture">Architecture</a>
  </p>

  <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react" alt="React" />
</div>

---

## ✨ Features

### 🎯 Core Functionality

- ✅ **Kanban Board View** - Visual task management with drag-and-drop columns
- ✅ **Task Priority System** - 4 priority levels (Low, Medium, High, Urgent) with color coding
- ✅ **Advanced Filtering** - Filter by status, priority, or search by keywords
- ✅ **Smart Sorting** - Sort by date, title, or priority
- ✅ **Task Statistics Dashboard** - Real-time metrics and progress tracking
- ✅ **Detailed Task View** - Comprehensive task information pages

### 🎨 User Experience

- ✅ **Dark Mode Support** - System-aware theme with manual toggle
- ✅ **Toast Notifications** - Real-time feedback for all actions
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Loading States** - Skeleton loaders for better perceived performance
- ✅ **Error Handling** - Graceful error states with retry functionality
- ✅ **Empty States** - Helpful messages when no data exists

### 💻 Technical Excellence

- ✅ **Type Safety** - 100% TypeScript with strict mode enabled
- ✅ **Server State Management** - TanStack Query with caching and optimistic updates
- ✅ **Code Quality** - ESLint configured with Next.js best practices
- ✅ **Modern React** - React 19 with Server Components and Client Components
- ✅ **Performance** - Turbopack for lightning-fast development

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode implementation

### State & Data Management

- **[TanStack Query v5](https://tanstack.com/query/latest)** - Powerful server state management
- **[date-fns](https://date-fns.org/)** - Modern date utility library

### Developer Experience

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[Turbopack](https://turbo.build/pack)** - Next-gen bundler for faster builds

### Notifications

- **[Sonner](https://sonner.emilkowal.ski/)** - Beautiful toast notifications

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **pnpm** 9.15.0 or higher (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nikita-glitch-web/next-test-task-app.git
   cd next-test-task-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   cp .env.example .env.local
   ```

   Add the following variables:

   ```env
   NEXT_PUBLIC_API_BASE_URL=https://683857ff2c55e01d184cee44.mockapi.io/api/v1
   NEXT_PUBLIC_API_TIMEOUT=10000
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint
pnpm lint
```

---

## 📁 Project Structure

```
next-test-task-app/
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page (Kanban board)
│   │   ├── settings/           # Settings page
│   │   └── tasks/[id]/         # Dynamic task detail pages
│   │
│   ├── components/              # React components
│   │   ├── ui/                 # shadcn/ui base components
│   │   ├── layout/             # Layout components (Sidebar, Header)
│   │   ├── tasks/              # Task-specific components
│   │   │   ├── TaskBoard.tsx
│   │   │   ├── TaskBoardCard.tsx
│   │   │   ├── TaskBoardColumn.tsx
│   │   │   ├── TaskPriorityBadge.tsx
│   │   │   ├── TaskStatistics.tsx
│   │   │   ├── TaskSearch.tsx
│   │   │   └── ...
│   │   └── common/             # Reusable components
│   │       ├── LoadingState.tsx
│   │       ├── ErrorState.tsx
│   │       ├── EmptyState.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── queries/            # TanStack Query hooks
│   │   │   └── useTasks.ts
│   │   ├── useToast.ts         # Toast notifications hook
│   │   └── useMediaQuery.ts    # Responsive utilities
│   │
│   ├── lib/                     # Utility functions
│   │   ├── api/                # API client and services
│   │   │   ├── client.ts       # HTTP client
│   │   │   └── tasks.ts        # Task API methods
│   │   ├── utils.ts            # Helper functions
│   │   └── constants.ts        # App constants
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── task.ts             # Task-related types
│   │   └── api.ts              # API types
│   │
│   └── providers/               # React context providers
│       ├── QueryProvider.tsx   # TanStack Query provider
│       ├── ThemeProvider.tsx   # Theme provider
│       └── ToastProvider.tsx   # Toast provider
│
├── .env.local                   # Environment variables (create this)
├── .env.example                 # Example environment variables
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

---

## 🎨 Key Components

### Task Management

- **`TaskBoard`** - Kanban board container with 4 status columns
- **`TaskBoardColumn`** - Individual column for each status
- **`TaskBoardCard`** - Task card with priority, date, and avatars
- **`TaskPriorityBadge`** - Color-coded priority indicator
- **`TaskStatistics`** - Dashboard statistics cards
- **`TaskSearch`** - Search input with debouncing
- **`TaskStatusTabs`** - Status filter tabs with counts
- **`TaskSortSelect`** - Sorting dropdown
- **`TaskProgressBar`** - Visual progress indicator

### Layout & Navigation

- **`Sidebar`** - Fixed navigation sidebar with theme toggle
- **`Container`** - Page container wrapper
- **`ThemeToggle`** - Light/Dark/System theme switcher

### Common Components

- **`LoadingState`** - Skeleton loading UI
- **`ErrorState`** - Error display with retry button
- **`EmptyState`** - Empty data state with helpful message

---

## 🔌 API Integration

### Endpoints

The app connects to MockAPI for data:

- **Base URL:** `https://683857ff2c55e01d184cee44.mockapi.io/api/v1`

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Fetch all tasks         |
| GET    | `/tasks/:id` | Fetch single task by ID |

### Task Data Model

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "review" | "completed";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string; // ISO 8601 format
}
```

### API Client Features

- ✅ Centralized error handling
- ✅ Request/response interceptors
- ✅ Timeout configuration
- ✅ TypeScript type safety
- ✅ Automatic retries with TanStack Query

---

---

## 🎯 Features Overview

### 📊 Task Statistics Dashboard

Real-time metrics displayed at the top of the dashboard:

- Total task count
- Tasks by status (To Do, In Progress, Review, Completed)
- Completion percentage
- Visual progress indicators

### 🏷️ Priority System

Four-level priority system with visual color coding:

- **Low** - Green badge (#4CAF50)
- **Medium** - Yellow badge (#FFC107)
- **High** - Orange badge (#FF9800)
- **Urgent** - Red badge (#EF5350)

### 🔍 Advanced Search & Filtering

- **Search** - Search tasks by title or description
- **Status Filter** - Filter by task status with count badges
- **Priority Filter** - Filter by priority level
- **Sort Options** - Sort by date (newest/oldest), title (A-Z/Z-A), or priority

### 🌙 Dark Mode

- System-aware theme detection
- Manual toggle between Light/Dark/System modes
- Persistent theme preference
- Smooth transitions
- Optimized for both light and dark environments

### 🔔 Toast Notifications

Real-time feedback for all user actions:

- Success messages (green)
- Error alerts (red)
- Warning notifications (yellow)
- Information toasts (blue)
- Loading states with promises

### 📱 Responsive Design

Optimized breakpoints for all devices:

- **Mobile** - < 768px (single column, hidden sidebar)
- **Tablet** - 768px - 1023px (two columns)
- **Desktop** - ≥ 1024px (sidebar + full Kanban board)

---

## 🎨 Design System

### Color Palette

#### Brand Colors

```css
--brand-green: #4CAF50    /* Primary actions, success, completed status */
--brand-orange: #FF9800   /* Logo, high priority */
--brand-red: #EF5350      /* Urgent priority, destructive actions */
--brand-yellow: #FFC107   /* Medium priority, warnings */
```

#### Status Colors

- **To Do** - Gray (#6B7280)
- **In Progress** - Blue (#3B82F6)
- **Review** - Purple (#8B5CF6)
- **Completed** - Green (#4CAF50)

### Typography

- **Font Family** - Geist Sans (primary), Geist Mono (code)
- **Headings** - Semibold, varying sizes
- **Body Text** - Regular weight, 14px base

### Spacing

- Base unit: 4px
- Consistent padding: 16px (mobile), 24px (desktop)
- Card spacing: 12px gap

---

## 📱 Responsive Breakpoints

```typescript
// Tailwind breakpoints used throughout the app
sm: '640px'   // Small devices
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices (desktops)
xl: '1280px'  // Extra large devices
2xl: '1536px' // 2X large devices
```

### Mobile Optimizations

- Sidebar hidden on mobile (< 768px)
- Single column Kanban layout
- Touch-friendly tap targets (min 44px)
- Simplified navigation
- Optimized font sizes

---

## ⚡ Performance Optimizations

### Code Splitting

- Automatic route-based code splitting with Next.js App Router
- Dynamic imports for heavy components
- Optimized bundle sizes

### Data Fetching

- TanStack Query caching strategies
- Stale-while-revalidate pattern
- Background refetching
- Optimistic updates

### Rendering

- React Server Components for static content
- Client Components only where needed
- Streaming SSR with Suspense boundaries
- Skeleton loaders for better perceived performance

### Build Optimizations

- Turbopack for faster development builds
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Production build minification

---

## 🧪 Testing & Quality

### Code Quality Tools

- **ESLint** - Code linting with Next.js recommended rules
- **TypeScript** - Strict type checking (no `any` types)
- **Prettier** - Code formatting (recommended)

### Type Safety

```typescript
// Strict TypeScript configuration
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Testing Checklist

- [x] All TypeScript types compile without errors
- [x] No ESLint warnings or errors
- [x] Tasks load correctly from API
- [x] Filtering and sorting work as expected
- [x] Dark mode toggles correctly
- [x] Toast notifications appear on actions
- [x] Responsive on mobile (< 768px)
- [x] Responsive on tablet (768px - 1023px)
- [x] Responsive on desktop (≥ 1024px)
- [x] Task detail pages load correctly
- [x] Settings page functions properly

---

## 🤝 Best Practices Implemented

### Code Organization

✅ **Component Structure** - Logical folder structure with clear separation of concerns  
✅ **Custom Hooks** - Reusable logic extracted into hooks  
✅ **Type Definitions** - Comprehensive TypeScript interfaces  
✅ **API Layer** - Centralized API client with error handling

### Performance

✅ **Code Splitting** - Route-based and component-based splitting  
✅ **Memoization** - React.useMemo for expensive calculations  
✅ **Lazy Loading** - Dynamic imports for heavy components  
✅ **Caching** - TanStack Query cache optimization

### User Experience

✅ **Loading States** - Skeleton loaders for better perceived performance  
✅ **Error Handling** - Comprehensive error boundaries with retry logic  
✅ **Feedback** - Toast notifications for all user actions  
✅ **Accessibility** - ARIA labels, keyboard navigation, semantic HTML

### Code Quality

✅ **TypeScript** - 100% type coverage with strict mode  
✅ **ESLint** - Enforced code standards  
✅ **Clean Code** - DRY principles, single responsibility  
✅ **Documentation** - Inline comments and comprehensive README

---

## 📚 Learn More

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Related Resources

- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** Development server won't start  
**Solution:** Ensure Node.js 18+ is installed and run `pnpm install` again

**Issue:** Environment variables not loading  
**Solution:** Verify `.env.local` exists and restart the dev server

**Issue:** TypeScript errors  
**Solution:** Run `pnpm install` to ensure all type definitions are installed

**Issue:** Styles not applying  
**Solution:** Clear Next.js cache: `rm -rf .next` and restart

---

## 📄 License

This project is created for evaluation purposes.

---

## 👨‍💻 Author

**Nikita**  
GitHub: [@Nikita-glitch-web](https://github.com/Nikita-glitch-web)

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for Next.js
- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [TanStack](https://tanstack.com/) for the excellent query library
- [MockAPI](https://mockapi.io/) for the test API endpoint

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
