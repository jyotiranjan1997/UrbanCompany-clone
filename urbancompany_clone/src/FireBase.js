
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJKa-zWgvizSLhbJFy04eLwwDmpq5ftoQ",
  authDomain: "dull-letter-5131-7cab4.firebaseapp.com",
  projectId: "dull-letter-5131-7cab4",
  storageBucket: "dull-letter-5131-7cab4.appspot.com",
  messagingSenderId: "825022405450",
  appId: "1:825022405450:web:086ceb9daa420eb4cdbfb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
