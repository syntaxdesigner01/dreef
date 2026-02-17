# Dreef Project Dashboard

A high-fidelity, responsive project management dashboard built for Dreef, designed to track renewable energy project lifecycles, transaction stages, and document management.

![Dashboard Preview](./public/preview.png)

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide)
- **Utilities**: `clsx` for conditional class management

## 🛠️ Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/dreef-dashboard.git
    cd dreef-dashboard
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 💡 My Process

### How I approached the build

My approach was grounded in **Component-Driven Development (CDD)**. I started by deconstructing the provided design mockups into reusable atomic components (buttons, cards, badges) before assembling them into larger structures (Sidebar, ProjectHeader, DetailsView).

1.  **Foundation**: I set up the global layout, typography (Outfit font), and color variables in Tailwind to ensure consistency with the Dreef brand identity from the start.
2.  **Layout Construction**: I built the shell of the application—Sidebar, TopBar, and Main Content Area—ensuring responsiveness was baked in early using Flexbox and Grid.
3.  **Component Implementation**: I matched the visual design pixel-for-pixel, focusing on accurate spacing, font weights, and color transparencies (e.g., using `bg-cyan-50/50` for subtle active states).
4.  **Interactive Elements**: I implemented state management for the Tab system to switch between "Project Details" and "Project Tracker" views seamlessy.

### Architectural Decisions

- **Next.js App Router**: I chose the App Router to leverage React Server Components (RSC) where possible, ensuring optimal initial load performance, while isolating client interactivity (like Tabs or Sidebar toggles) into specific `"use client"` components.
- **Tailwind CSS for Speed & Consistency**: I utilized Tailwind for rapid styling. To maintain cleaner markup, I used `clsx` to conditionalize styles based on props (e.g., `active` states in the Sidebar), keeping the JSX readable.
- **Modular Component Structure**: Components like `InfoCard`, `StatCard`, and `ProgressBar` were isolated to promote reusability. For example, `InfoCard` is generic enough to be used throughout the app, accepting icons and color themes as props.

### Challenges & Solutions

#### 1. The CSS-Only Chevron Progress Bar

**Challenge**: The design required a progress bar where each stage is shaped like an arrow/chevron (`>`) flowing into the next, which is difficult to achieve with standard rectangular borders.
**Solution**: I implemented this using CSS `clip-path`. I defined polygon shapes (e.g., `polygon(0% 0%, 92% 0%, 100% 50%...)`) to essentially "cut" the div into an arrow. This allowed for a fluid, scalable design that works on all screen sizes without relying on static images.

#### 2. Exact Color Matching & Transparencies

**Challenge**: The UI relies heavily on subtle, specific background tints (e.g., distinct shades of pastel blue, teal, and purple) that didn't map 1:1 to default Tailwind palettes.
**Solution**: I utilized Tailwind's arbitrary value syntax (e.g., `bg-[#6ADFF126]`) for exact design fidelity. For recurring brand colors, I considered extending the Tailwind theme, but for specific UI cards, arbitrary values provided the necessary precision without bloating the global configuration.

#### 3. Responsive Layout Strategy

**Challenge**: Maintaining the detailed sidebar and header information on mobile devices without cluttering the screen.
**Solution**: I adopted a "hide-and-stack" strategy. The Sidebar becomes a hidden drawer or simplified nav on smaller screens, while the `ProjectHeader` reorganizes its flex direction from row to column. Typography sizes were seamlessly adjusted using breakpoints (`md:text-sm`) to ensure readability on phones.
