// ===========================
// Puerto
// ===========================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
// ===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// Base de datos
// ===========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===========================
// Vencimiento del Token
// ===========================
// 60 segundos
// 60 minutos
// 24 horas
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================
// SEED de autentificacion
// ===========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

// ===========================
// Google client ID
// ===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '480990246623-1o8tdhvvuachsmhevlk83jq1ekv63io8.apps.googleusercontent.com';