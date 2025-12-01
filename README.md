# TaskFlow - Next.js Task Management App

A modern, responsive task management application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- ✅ **Task Overview Dashboard** - View all tasks with statistics
- ✅ **Advanced Filtering** - Filter tasks by status (To Do, In Progress, Review, Completed)
- ✅ **Flexible Sorting** - Sort by date (newest/oldest) or title (A-Z/Z-A)
- ✅ **Task Details View** - Detailed view for individual tasks
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Loading States** - Skeleton loaders for better UX
- ✅ **Error Handling** - Graceful error states with retry functionality
- ✅ **Type Safety** - Full TypeScript support with strict typing

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Date Formatting:** [date-fns](https://date-fns.org/)

## 📁 Project Structure

```
src/
├── app/                        # Next.js app router pages
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Home page (tasks overview)
│   └── tasks/[id]/
│       └── page.tsx           # Task detail page
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Layout components (Header, Container)
│   ├── tasks/                 # Task-specific components
│   └── common/                # Reusable components (Loading, Error, Empty states)
├── hooks/
│   ├── queries/               # TanStack Query hooks
│   └── useMediaQuery.ts       # Responsive utilities
├── lib/
│   ├── api/                   # API client and services
│   ├── utils.ts               # Utility functions
│   └── constants.ts           # App constants
├── types/                     # TypeScript type definitions
└── providers/                 # React context providers
```

## 🔧 Setup Instructions

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
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

   Update the values:

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
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## 🎨 Component Architecture

### Core Components

- **TaskList** - Main component displaying tasks grid with filtering/sorting
- **TaskCard** - Individual task card with status badge and relative time
- **TaskStats** - Dashboard showing task statistics by status
- **TaskFilters** - Filter and sort controls
- **TaskStatusBadge** - Color-coded status indicator

### Common Components

- **LoadingState** - Skeleton loading UI
- **ErrorState** - Error display with retry option
- **EmptyState** - Empty data state with helpful message
- **PageTitle** - Consistent page headers

## 🔌 API Integration

The app fetches data from MockAPI:

- **Base URL:** `https://683857ff2c55e01d184cee44.mockapi.io/api/v1`
- **Endpoints:**
  - `GET /tasks` - Fetch all tasks
  - `GET /tasks/:id` - Fetch single task

### Task Data Structure

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "review" | "completed";
  createdAt: string; // ISO 8601
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (1 column)
- **Tablet:** 640px - 1023px (2 columns)
- **Desktop:** ≥ 1024px (3-4 columns)

## 🎯 Best Practices Implemented

- ✅ **Type Safety:** Strict TypeScript with no `any` types
- ✅ **Error Handling:** Comprehensive error boundaries and retry logic
- ✅ **Loading States:** Skeleton loaders for better perceived performance
- ✅ **Separation of Concerns:** Clear distinction between UI, business logic, and API layers
- ✅ **Reusable Components:** DRY principle with modular components
- ✅ **Responsive Design:** Mobile-first approach
- ✅ **Code Quality:** Clean, documented, and maintainable code
- ✅ **Git Workflow:** Meaningful commit messages with logical separation

## 📝 Environment Variables

| Variable                   | Description              | Required            |
| -------------------------- | ------------------------ | ------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for the API     | Yes                 |
| `NEXT_PUBLIC_API_TIMEOUT`  | API request timeout (ms) | No (default: 10000) |

## 🧪 Testing Checklist

- [ ] Tasks load correctly from API
- [ ] Filtering by status works
- [ ] Sorting by date/title works
- [ ] Task detail page navigation works
- [ ] Loading states display
- [ ] Error states with retry work
- [ ] Empty states show correctly
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)

## 📄 License

This project is for evaluation purposes.

---

## Original Test Requirements

### Overview

This test evaluates:

- **Layout Skills:** How you create and style layouts in NextJS.
- **API Integration:** How you connect and interact with API endpoints.
- **Git Workflow:** How you work with Git, including the amount and quality of your commits.
- **Code Quality:** Your ability to write clean, maintainable, and well-structured code.

### Resources

- [Figma Design Link](https://www.figma.com/design/6BexdcpNgEPE4tdeqOKB05/Next-Test-Task-App?node-id=0-1&t=h41aWaa9Ikm69JTp-1)
- [API Endpoint](https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks)
- [API GET REQUEST FOR TASKS](https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks)

If you have any questions or need further clarification, feel free to reach out.
