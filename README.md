# 🍏 Apple Website Clone - 3D MacBook Pro Showcase

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/ThreeJs-black?style=flat&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

A stunning, highly interactive clone of an Apple product page, featuring a fully scroll-animated 3D MacBook Pro model. Built with modern web technologies, this project showcases advanced scroll-linked animations, 3D model rendering, and responsive design to emulate a premium user experience.

---

## 🌟 Key Features

- **Interactive 3D Models:** Realistic MacBook Pro models rendered directly in the browser using React Three Fiber.
- **Scroll-Triggered Animations:** State-of-the-art scroll animations powered by GSAP and ScrollTrigger, turning scrolling into a cinematic experience.
- **Dynamic Textures & Video:** Video textures applied dynamically onto the 3D MacBook screen, synchronized with text reveal animations.
- **Breathtaking UI/UX:** Premium design aesthetics mimicking Apple's legendary clean, dark-mode style with glassmorphism touches and smooth transitions.
- **State Management:** Effortless cross-component state management handling model scale and active screen textures using Zustand.
- **Responsive Layout:** Perfectly adapted for both desktop and mobile viewing.

---

## 📸 Screenshots

Here is a glimpse of the application:

<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-44-11.png" alt="Hero Section" width="800" />
</div>
<br />
<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-44-30.png" alt="Product Viewer" width="800" />
</div>
<br />
<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-44-45.png" alt="Features Reveal" width="800" />
</div>
<br />
<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-44-57.png" alt="Performance Section 1" width="800" />
</div>
<br />
<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-45-57.png" alt="Performance Section 2" width="800" />
</div>
<br />
<div align="center">
  <img src="./src/assets/Screenshot From 2026-03-08 00-47-08.png" alt="Highlights Grid" width="800" />
</div>

---

## 🛠️ Tech Stack

- **Framework:** React 18, Vite
- **3D Rendering:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
- **Animation:** GSAP (GreenSock Animation Platform) + ScrollTrigger, `@gsap/react`
- **Styling:** Tailwind CSS v4, Vanilla CSS
- **State Management:** Zustand
- **Utilities:** `clsx`, `react-responsive`

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/WhiiteRose/Apple.git
   ```
2. Navigate to the project directory
   ```sh
   cd Apple
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

---

## 🎯 Important Note

The 3D models (`.glb` / `.gltf`) and video/image assets are placed in the `public` or `src/assets` folders. Make sure your local environment is correctly serving these static files for the textures and models to render correctly.

---

Developed with ❤️ by WhiiteRose.
