# 🎬 CineStream API - Film Collection

This repository contains the **Backend API** for CineStream, a movie and series library management project. This API is built with a modern Node.js stack, providing a complete, robust, and scalable CRUD (Create, Read, Update, Delete) interface for managing film and genre data.

The frontend application (which consumes this API) is managed in a separate repository.

## 🌟 Features

* **RESTful Endpoints:** Full CRUD functionality exposed via clear and semantic HTTP routes.
* **Data Persistence:** Uses **Prisma** as the modern ORM to interact with the database.
* **Database:** Powered by **PostgreSQL** for reliable, relational data storage.
* **Seed Data:** Includes a comprehensive `seed.js` script to populate the database with initial movies, series, and genres.
* **Modular Structure:** Organized using a dedicated `src/controllers`, `src/models`, and `src/routes` pattern for clean, maintainable code.

## 🚀 Tech Stack

| Technology | Role |
| :--- | :--- |
| **Node.js** | Runtime Environment |
| **Express** | Web Framework for Routing and Middleware |
| **Prisma** | ORM (Object-Relational Mapper) |
| **PostgreSQL** | Primary Database |
| **JavaScript (ES Modules)** | Core Language |

## ⚙️ Getting Started

Follow these steps to set up and run the CineStream API locally.

### Prerequisites

You need to have the following installed on your system:

* [Node.js](https://nodejs.org/en/download/) (v18 or higher)

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone [YOUR_REPO_URL]
cd cinestream-film-collection
npm install