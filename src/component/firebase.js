import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAesDiqjVuameEsy6qNGMCQZjZSkLtARo0",
  authDomain: "netflixapp2607.firebaseapp.com",
  projectId: "netflixapp2607",
  storageBucket: "netflixapp2607.appspot.com",
  messagingSenderId: "534785903653",
  appId: "1:534785903653:web:c4b76ce1366b7165a683cc"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth=getAuth();