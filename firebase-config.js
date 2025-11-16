//
// !!!!! هذا هو الملف "الكامل" لـ firebase-config.js !!!!!
//

// 1. استيراد الخدمات الكاملة اللي نحتاجها
// (هذني جانن ناقصات عندك)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

// 2. هذا الكود (firebaseConfig) اللي أنت دزيته
// (اللي بيه المفتاح "الغلط" بس راح نستخدمه هسة حتى نتأكد)
const firebaseConfig = {
  apiKey: "AIzaSyD1MKWNuYOrxgdsA4nRGBLWMcQ6RD9Monw",
  authDomain: "alsama-edu.firebaseapp.com",
  projectId: "alsama-edu",
  storageBucket: "alsama-edu.firebasestorage.app",
  messagingSenderId: "1085099490336",
  appId: "1:1085099490336:web:6c89d3709494266f0a9045",
  measurementId: "G-B43MRSQPMY"
};

// 3. تشغيل الخدمات الكاملة
// (هذني هم جانن ناقصات عندك)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // خدمة تسجيل الدخول
const db = getFirestore(app); // قاعدة البيانات (Firestore)
const storage = getStorage(app); // خدمة التخزين (للملازم)

// 4. نخلي المستخدم يبقى مسجل دخوله
setPersistence(auth, browserLocalPersistence);

// 5. نصدر الخدمات لباقي الملفات (أهم خطوة جانت ناقصة)
export { auth, db, storage };
