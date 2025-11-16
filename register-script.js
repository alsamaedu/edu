<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل حساب جديد - منصة سَما</title>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .register-container {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        .register-container img {
            width: 100px; /* حجم اللوكو */
            margin-bottom: 1rem;
        }
        .register-container h1 {
            margin-bottom: 1.5rem;
            color: #333;
        }
        .register-form input {
            width: 90%;
            padding: 12px;
            margin-bottom: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: 'Cairo', sans-serif;
        }
        .register-form button {
            width: 100%;
            padding: 12px;
            background-color: #007bff; /* لون أزرق حلو */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-family: 'Cairo', sans-serif;
            font-weight: bold;
        }
        .register-form button:hover {
            background-color: #0056b3;
        }
        .login-link {
            margin-top: 1rem;
            display: block;
            color: #555;
        }
        .login-link a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <div class="register-container">
        
        <h1>إنشاء حساب جديد</h1>
        <p>انضم إلى آلاف الطلاب في منصة سَما التعليمية</p>

        <form id="register-form" class="register-form">
            <input type="email" id="email" placeholder="البريد الإلكتروني" required>
            <input type="password" id="password" placeholder="كلمة المرور (6 أحرف أو أكثر)" required>
            
            <button type="submit" id="register-button">تسجيل</button>
        </form>

        <span class="login-link">
            لديك حساب بالفعل؟ <a href="login.html">سجل الدخول</a>
        </span>
    </div>

    <script type="module">
        // استيراد الخدمات من الملف الأول (firebase-config.js)
        // لازم يكون ملف config.js موجود بنفس الفولدر
        import { auth, db } from './firebase-config.js';
        import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
        import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

        // --- هنا الكود يشتغل ---
        
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const registerButton = document.getElementById('register-button');

        // نخلي الكود يشتغل من ندوس زر التسجيل
        registerButton.addEventListener('click', async (e) => {
            e.preventDefault(); // منع الفورم من عمل ريلود للصفحة

            const email = emailInput.value;
            const password = passwordInput.value;

            // تدقيق بسيط
            if (email === "" || password.length < 6) {
                alert("يرجى إدخال إيميل صحيح وكلمة مرور (6 أحرف على الأقل)");
                return; // نوقف الكود
            }

            try {
                // 1. إنشاء الحساب بالـ Authentication (خدمة الدخول)
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // 2. أهم خطوة: تسجيل الحساب بقاعدة البيانات كـ "طالب"
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    role: "student", // أي واحد يسجل هو "طالب"
                    createdAt: new Date(), 
                    points: 0, 
                    progress: {} 
                });

                // 3. التسجيل نجح، وديه للصفحة الرئيسية
                alert("تم إنشاء حسابك بنجاح! أهلاً بك في منصة سَما.");
                window.location.href = "index.html"; 

            } catch (error) {
                // 4. إذا فشل التسجيل (مثلاً الإيميل مستخدم)
                console.error("خطأ بالتسجيل:", error.code, error.message);
                if (error.code === 'auth/email-already-in-use') {
                    alert("هذا الإيميل مستخدم مسبقاً. جرب تسجيل الدخول.");
                } else {
                    alert("حدث خطأ: " + error.message);
                }
            }
        });
    </script>

</body>
</html>
