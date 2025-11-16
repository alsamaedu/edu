//
// !!!!! هذا هو الملف "الكامل" لـ firebase-config.js !!!!!
//

// 1. استيراد الخدمات الكاملة اللي نحتاجها
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

// 2. !!!!!! أهم خطوة !!!!!!
// هذا الكود "غلط" (هذا مالتي المثال).
// "امسحه" وخلي الكود "الحقيقي" اللي جبته من الكونسول مالتك
// const firebaseConfig = {
//   apiKey: "AIzaSyD1MKWNuYOrxgdsA4nRGBLWMcQ6RD9Monw", // <<< هذا غلط
//   authDomain: "alsama-edu.firebaseapp.com",
//   projectId: "alsama-edu",
//   storageBucket: "alsama-edu.firebasestorage.app",
//   messagingSenderId: "1085099490336",
//   appId: "1:1085099490336:web:6c89d3709494266f0a9045",
//   measurementId: "G-B43MRSQPMY"
// };

//
// الصق (Paste) الكود الحقيقي مالتك هنا
//
const firebaseConfig = {
  // ... الكود "الحقيقي" من الكونسول مالتك ...
  // ... لازم الـ apiKey مالتك يبدي بـ "AIzaSy..." بس يختلف عن الفوك ...
};


// 3. تشغيل الخدمات
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // خدمة تسجيل الدخول
const db = getFirestore(app); // قاعدة البيانات (Firestore)
const storage = getStorage(app); // خدمة التخزين (للملازم)

// 4. نخلي المستخدم يبقى مسجل دخوله
setPersistence(auth, browserLocalPersistence);

// 5. نصدر الخدمات لباقي الملفات
export { auth, db, storage };
