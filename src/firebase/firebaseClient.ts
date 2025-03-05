// src/firebase/firebaseClient.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKVwvRyVxV_RBlk5tUqp7_CX9ubz1f3o0",
  authDomain: "notes-app-20758.firebaseapp.com",
  projectId: "notes-app-20758",
  storageBucket: "notes-app-20758.firebasestorage.app",
  messagingSenderId: "180057552028",
  appId: "1:180057552028:web:5c89fd2010a752cf36a959"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

