:star: **PREVIEW**: https://next-app-six-rho.vercel.app/

<div align="center">
  <br />
      <img src="/assets/thumnail-startup-pitch.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />

  </div>

<h3 align="center">Startup Pitch Platform</h3>

   
</div>

## <a name="introduction">🤖 Introduction</a>

A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other
pitches, and gain exposure through a clean minimalistic design for a smooth user experience.


## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Next.js](https://nextjs.org/) (v15)**: A React-based framework that provides hybrid static & server rendering, file-based routing, and more. Next.js powers the core structure of this app and handles server-side rendering for enhanced SEO and performance.
- **React (v19.0.0)** & **React DOM**: React serves as the backbone of the UI layer, managing the component lifecycle and rendering, while React DOM connects it to the browser.
- **[Radix UI](https://www.radix-ui.com/)**: A library for building accessible and high-quality UI components. We're using several Radix components, including Avatar, Icons, Slot, and Toast for a consistent UI experience.
- **[Three.js](https://threejs.org/)** & **React Three Fiber**: These libraries are used for creating 3D graphics in the app, with `@react-three/drei` providing utility components to simplify the Three.js experience.
- **Tailwind CSS** & **Tailwind Merge**: Tailwind is used for styling, allowing for rapid and responsive design, with `tailwind-merge` helping to manage conflicting class names for a clean codebase.
- **Styled Components**: A CSS-in-JS library that enables the creation of styled React components. It works alongside Tailwind CSS for complex styling needs.
- **Lucide Icons**: A library for modern, customizable icons, contributing to the app's visual clarity and appeal.

## Content Management & Backend Integration

- **Sanity CMS**: This headless CMS powers content management for the application, with tools like `@sanity/image-url` for image management and `sanity-plugin-markdown` to support Markdown content.
- **Sentry**: An error-tracking tool for capturing and monitoring issues in real-time, ensuring we can address bugs swiftly in both production and development.

## Authentication

- **NextAuth.js (v5 beta)**: NextAuth handles user authentication, providing a secure and flexible solution for managing user sessions within a Next.js environment.

## Utility Libraries

- **Markdown-It** & **EasyMDE**: These libraries enable Markdown support for text formatting and editing within the application, ensuring content is presented clearly.
- **clsx**: A utility for managing conditional class names, enhancing the readability and maintainability of the component styling.
- **Slugify**: Used for creating URL-friendly slugs from content titles, improving the SEO and readability of URLs.

## Development Tools

- **TypeScript**: TypeScript enhances the development experience by adding static typing to JavaScript, leading to more reliable and maintainable code.
- **ESLint**: ESLint is set up to enforce code quality and consistency, with specific configurations for Next.js projects.
- **PostCSS**: PostCSS processes stylesheets and integrates seamlessly with Tailwind CSS for efficient styling.
- **Dev Dependencies**: Additional type definitions for libraries like `markdown-it`, `node`, `react`, and `react-dom` ensure TypeScript compatibility across the application.
