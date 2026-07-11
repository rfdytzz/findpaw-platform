# FindPaw Platform

FindPaw Platform is a modern web application designed to help communities report and locate lost or found pets. The project is built using a decoupled full-stack architecture leveraging **Laravel API** for the backend and **Vue.js** paired with **Tailwind CSS** for the frontend.

---

## Key Features

- **User Authentication:** Secure registration, login, and profile management using Laravel Sanctum.
- **Lost & Found Pet Reports:** Upload pet details including photos, last seen location, specific traits, and status.
- **Interactive Map:** Visualize the last seen locations of reported pets for easier tracking.
- **Community Comments & Discussion:** Allow users to exchange information directly under report posts.
- **Responsive UI:** A clean, modern, mobile-friendly interface optimized for all screen sizes.

---

## Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend** | Laravel 10+ / 11+ | PHP framework for a robust and secure RESTful API |
| **Frontend** | Vue.js 3 | JavaScript framework for a reactive and smooth UI |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid and modern design |
| **Database** | MySQL / PostgreSQL | Relational database management |
| **State Mgmt** | Pinia / Vuex | Centralized state management for frontend data |
| **Build Tool** | Vite | Ultra-fast frontend build tool and asset bundler |

---

## Main Directory Structure

This project can be structured as separate repositories or a monorepo containing two main directories:

```text
findpaw-platform/
├── backend/             # Laravel API source code
│   ├── app/             # Models, Controllers
│   ├── config/          # Laravel configuration files
│   ├── database/        # Migrations & Database seeders
│   └── routes/api.php   # RESTful API endpoints
│
└── frontend/            # Vue.js source code
    ├── src/
    │   ├── assets/      # Images, Global Styles (Tailwind)
    │   ├── components/  # Reusable UI components
    │   └── views/       # Main page layouts
    ├── package.json     # Node.js dependencies
    └── vite.config.js   # Vite configurations
```

## 📄 License

This project is intended for portfolio purposes.
