"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const sustainability_1 = __importDefault(require("./routes/sustainability"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect Database
(0, db_1.default)();
// Init Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Define Routes
app.use('/api/users', users_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/sustainability', sustainability_1.default);
// Make the 'uploads' folder public
app.use('/uploads', express_1.default.static('uploads'));
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ message: 'KisaanMitra Backend is running!' });
});
exports.default = app;
//# sourceMappingURL=app.js.map