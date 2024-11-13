import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas",
  authDomain: "career-guidance-demo.firebaseapp.com",
  projectId: "career-guidance-demo",
  storageBucket: "career-guidance-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:a1b2c3d4e5f6g7h8i9j0k1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);