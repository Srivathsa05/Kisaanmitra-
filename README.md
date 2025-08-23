<div align="center">

# 🌱 KisaanMitra – Farmer's Friend

**A comprehensive digital platform designed to empower farmers with transparent crop trading, equipment rentals, and agricultural resources.**

</div>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg"/>
  <img alt="Deployment" src="https://img.shields.io/badge/deployment-Vercel%20%7C%20Render-brightgreen.svg"/>
  <img alt="Status" src="https://img.shields.io/badge/status-active-success.svg"/>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-technologies-used">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-api-endpoints">API Endpoints</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 🚀 Live Demo

Experience KisaanMitra in action. Visit our live deployment to explore the features and functionality.

<p align="center">
  <a href="[https://kisaanmitra-frontend.vercel.app/]">
    <img src="https://img.shields.io/badge/View%20Live%20Demo-2E8B57?style=for-the-badge&logo=vercel&logoColor=white" alt="View Live Demo"/>
  </a>
</p>

---

## 🌟 Key Features

Our mission is to bridge the gap between farmers and buyers while providing essential tools for sustainable and profitable farming practices.

| Feature                 | Description                                                                                             | Key Benefits                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **🌾 Crop Marketplace** | Direct farmer-to-buyer trading, eliminating middlemen with transparent pricing and secure payments.     | Real-time market rates, AI price recommendations, bulk trading options.          |
| **🚜 Equipment Rentals** | Rent, buy, or sell farming equipment, seeds, and fertilizers at affordable rates.                       | Access to tractors, harvesters, drones, quality seeds, and subscription models.  |
| **📊 Market Intelligence**| Smart insights powered by AI for better decision-making and profit maximization.                        | Weather updates, disease alerts, yield predictions, and price forecasting.       |
| **💳 Financial Services**| Easy access to micro-loans, insurance, and government schemes with digital wallet integration.          | Micro-loans, crop insurance, government scheme info, and digital payments.       |
| **👨‍👩‍👧‍👦 Community Hub** | Connect with fellow farmers, share knowledge, and learn from agricultural experts.                      | Discussion forums, expert consultation, video tutorials, local language support. |
| **🌍 Sustainability** | Promote eco-friendly farming with traceability and sustainability certifications.                         | Crop traceability, organic certification support, and sustainability badges.     |
| **🔒 Security & Trust** | Blockchain-powered transparency with ratings, reviews, and a dispute resolution system.               | Immutable records, user rating system, and secure transactions.                  |
| **🎤 Voice Assistant** | Hands-free navigation and commands for enhanced accessibility, especially for non-literate users.       | Navigate the app, get prices, and access features using voice commands.          |

---

## 🛠️ Technologies Used

This project is built with a modern MERN stack, ensuring a fast, scalable, and reliable user experience.

| Category      | Technology                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| **Frontend** | `React.js`, `TypeScript`, `Vite`, `Tailwind CSS`, `React Router`                                              |
| **Backend** | `Node.js`, `Express.js`, `TypeScript`                                                                       |
| **Database** | `MongoDB` with `Mongoose`                                                                                   |
| **Auth** | `JSON Web Tokens (JWT)`                                                                                     |
| **APIs** | `data.gov.in (Mandi Prices)`, `OpenWeatherMap API`                                                            |
| **Deployment**| `Vercel` (Frontend), `Render` (Backend), `MongoDB Atlas` (Database)                                           |

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites
- **Node.js**: v18 or higher
- **npm** or **yarn**
- **MongoDB**: An active connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local instance.

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/yourusername/kisaanmitra.git](https://github.com/yourusername/kisaanmitra.git)
    cd kisaanmitra
    ```

2.  **Set Up Backend:**
    ```bash
    cd backend
    npm install
    cp .env.example .env
    ```
    Now, open the `.env` file and fill in your `MONGO_URI` and `JWT_SECRET`.
    ```bash
    npm run dev
    ```
    The backend server will start on `http://localhost:5000`.

3.  **Set Up Frontend:**
    ```bash
    cd ../frontend
    npm install
    cp .env.example .env
    ```
    Open the `.env` file and update `VITE_API_BASE_URL` if needed.
    ```bash
    npm run dev
    ```
    The frontend development server will start on `http://localhost:5000` (or the next available port).

---

## 📂 Project Structure

The repository is organized into a monorepo structure with distinct `frontend` and `backend` directories.


kisaanmitra/
├── frontend/           # React (Vite + TS) Frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page-level components
│   │   ├── hooks/        # Custom React hooks
│   │   └── App.tsx       # Main app component with routing
│   └── ...
│
├── backend/            # Node.js (Express + TS) Backend
│   ├── src/
│   │   ├── config/       # Database connection, env variables
│   │   ├── controllers/  # Logic for handling requests
│   │   ├── models/       # Mongoose schemas for MongoDB
│   │   ├── routes/       # API route definitions
│   │   └── server.ts     # Express server setup
│   └── ...
└── README.md


---

## 🗺️ API Endpoints

A brief overview of the core API endpoints available.

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user and receive a JWT.
- `GET /api/auth/me`: Get the profile of the currently logged-in user.

### Marketplace
- `GET /api/marketplace`: Fetch a list of all available crop products.
- `POST /api/marketplace`: Add a new crop product for sale.
- `GET /api/marketplace/:id`: Get details for a specific product.

### Equipment Rentals
- `GET /api/equipment`: Fetch a list of all available equipment.
- `POST /api/equipment/rent`: Create a rental request for a piece of equipment.

---

## 📈 Roadmap

We have exciting plans for the future of KisaanMitra!
- [ ] **AI Chatbot:** A multilingual chatbot to answer farmer queries instantly.
- [ ] **Mobile PWA:** A progressive web app for a seamless mobile experience.
- [ ] **OCR for Receipts:** Allow farmers to upload and track expenses by scanning bills.
- [ ] **Deeper Blockchain Integration:** Implement smart contracts for automated and secure payments.
- [ ] **Hyperlocal Community Groups:** Create location-based forums for regional discussions.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- The resilient farmers and agricultural communities worldwide.
- The open-source community for providing the tools to build this platform.
- Agricultural research organizations for their invaluable data and insights.

<div align="center">
  Made with ❤️ for farmers worldwide
</div>
