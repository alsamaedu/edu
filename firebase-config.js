// Import the functions you need from the SDKs you need
// ملاحظة: نستخدم النسخة 9.6.10 كمثال، تكدر تحدثها للآخر إصدار
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"; // ضفنا هذا لرفع الملفات (الملازم)

// !!!!!! تنبيه مهم جداً !!!!!!
// بدل هذا الكود بالكود الحقيقي مالتك (اللي دزيته قبل شوية)
const firebaseConfig = {
  apiKey: "AIzaSyD...", // <<< بدل هذا بالكود مالتك
  authDomain: "alsama-edu.firebaseapp.com",
  projectId: "alsama-edu",
  storageBucket: "alsama-edu.firebasestorage.app",
  messagingSenderId: "1085099490336",
  appId: "1:1085099490336:web:6c89d3709494266f0a9045",
  measurementId: "G-B43MRSQPMY" // <<< تأكد كل هاي المعلومات صحيحة
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // خدمة تسجيل الدخول
const db = getFirestore(app); // قاعدة البيانات (Firestore)
const storage = getStorage(app); // خدمة التخزين (للملازم وصور المدرسين)

// هاي الخطوة مهمة حتى الطالب يبقى مسجل دخوله وميطلع كل شوية
// (browserLocalPersistence) يعني يبقى مسجل حتى لو سد المتصفح
setPersistence(auth, browserLocalPersistence);

// هاي أهم خطوة: نصدر الخدمات حتى باقي الملفات تستخدمها
export { auth, db, storage };
