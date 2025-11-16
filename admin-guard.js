// استيراد الخدمات من الملف الأول (firebase-config.js)
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// هذا الكود يشتغل أول ما تفتح الصفحة
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // 1. المستخدم مسجل دخول، خلينا نشوفه منو
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists() && userDocSnap.data().role === "admin") {
            // 2. هذا صدك الأدمن، عوفه بالصفحة
            console.log("أهلاً أيها المدير:", user.email);
            
            // !!!!! أهم خطوة !!!!!
            // بما إنك أدمن، "نظهر" محتوى الصفحة اللي جان مخفي
            // (هذا يفترض إنك ضفت ستايل display:none بالـ CSS)
            document.body.style.display = 'block'; 

        } else {
            // 3. هذا "طالب" يحاول يدخل
            alert("ليس لديك صلاحيات للوصول لهذه الصفحة!");
            window.location.href = "index.html"; // طرده للرئيسية
        }
    } else {
        // 4. المستخدم أصلاً ما مسجل دخول
        alert("يرجى تسجيل الدخول أولاً.");
        window.location.href = "login.html"; // طرده لصفحة الدخول
    }
});
