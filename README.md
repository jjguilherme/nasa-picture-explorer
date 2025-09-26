# 🚀 NASA Picture Explorer

A Single Page Application (SPA) developed with **React.js** to explore the NASA Astronomy Picture of the Day (APOD) archive. This project fulfills the Frontend requirements for the **Fullstack Web Programming** discipline (ES47B-ES71).

| **Student** | **Registration Number (RA)** |
| :--- | :--- |
| **João Guilherme de Souza** | 2479516 |

## 🔗 Live Application

You can view the fully deployed, live version of this Single Page Application (SPA) here:

**[View NASA Picture Explorer on Netlify](https://nasa-fullstack-project.netlify.app/)**

## ✨ Project Overview

This application allows users to fetch NASA's Picture of the Day by submitting a specific date. It demonstrates key concepts of modern frontend development, including state management with the **Context API**, performance optimization with **`useMemo`**, and modular styling using **Styled Components**.

The application is built around the **Single Page Application (SPA)** concept—all updates (loading, errors, and image display) happen without a full page reload.

## 🛠️ Technology Stack & Requirements

The project was implemented using the following technologies to meet the required criteria:

| Requirement Category | Technology Used | Rationale |
| :--- | :--- | :--- |
| **Core Framework** | **React.js (with Vite)** | Foundation for the SPA structure. |
| **API JSON** | **NASA APOD API** | Public API used for data consumption. |
| **React Hook/Feature** | **`useMemo`** | Used in the `PictureProvider` for performance optimization, ensuring the context value is stable. |
| **External Library** | **Styled Components** | Used for all component-level styling, providing a clear separation of concerns. |
| **Data Fetching** | **AJAX (via Axios)** | Used to perform the asynchronous calls to the external API. |

## 📂 Project Structure

The project strictly follows the required directory structure:

nasa-picture-explorer/
├── src/
│   ├── components/  # JSX components (SearchForm, PictureCard, etc.)
│   ├── contexts/    # Context logic (Provider, Context, useHook)
│   ├── App.jsx
│   └── main.jsx
├── node_modules/
├── index.html
└── package.json

## ✅ Evaluation Criteria Fulfillment

The following points detail how the implementation addresses the professor's evaluation criteria:

| Criterion | Implementation Details | Status |
| :--- | :--- | :--- |
| **SPA & AJAX** | The application is a single page, and data is fetched using asynchronous `axios` calls within the Provider. | **Completed** |
| **Search with Parameters** | The `fetchPictureByDate` function (in the Provider) sends the **date** as a query parameter to the NASA API. | **Completed** |
| **Mandatory Field Validation** | The `SearchForm` validates the date input (checks for empty fields and future dates) **before** the API call. | **Completed** |
| **Error Messages (Before & After)**| Validation errors are shown in the form **before** submission. API errors are captured by the `try/catch` block and displayed via the global `error` state **after** the submission attempt. | **Completed** |
| **Component Communication** | State management is handled centrally using the **Context API**. | **Completed** |
| **Implementation of Selected Hook** | The **`useMemo`** hook is utilized in the `PictureProvider` to stabilize the context object. | **Completed** |
| **Use of External Library** | **Styled Components** is used for all UI styling. | **Completed** |

---

## 🏃 Getting Started (Local Development)

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jjguilherme/nasa-picture-explorer.git](https://github.com/jjguilherme/nasa-picture-explorer.git)
    cd nasa-picture-explorer
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173/`.

## 📦 Building for Production

To create the optimized deployment files, run the build script:

```bash
npm run build

The production-ready files will be generated in the dist/ directory.