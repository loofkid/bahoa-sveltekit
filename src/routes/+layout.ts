// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import type { LayoutLoad, LayoutLoadEvent } from './$types';
import type { SvelteComponentTyped, ComponentProps } from "svelte";
import type LoggedInMenuItem from "$lib/LoggedInMenuItem.svelte";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFqiZQzA1mSKDTlTcww-o_hBTEVNE1k_g",
  authDomain: "bahoa-cddd9.firebaseapp.com",
  databaseURL: "https://bahoa-cddd9-default-rtdb.firebaseio.com",
  projectId: "bahoa-cddd9",
  storageBucket: "bahoa-cddd9.appspot.com",
  messagingSenderId: "792879932944",
  appId: "1:792879932944:web:2a94bed6179448ca8a4c95",
  measurementId: "G-DRYVYL20LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// type ComponentProps<T extends SvelteComponentTyped> = T extends SvelteComponentTyped<infer R> ? R : unknown;

const menuItems = [
  {
      name: "Home",
      icon: "house",
      link: "/smokers",
  },
  {
      name: "Profile",
      icon: "user",
      link: "/profile",
  },
  {
      name: "Settings",
      icon: "cog",
      link: "/settings",
  },
  {
      name: "Logout",
      icon: "right-from-bracket",
      action: () => auth.signOut(),
  },
];

export const load: LayoutLoad = (({data}: LayoutLoadEvent) => {
    return {...data, 
        firebaseApp: app,
        // firebaseAnalytics: analytics,
        firestoreDatabase: db,
        firebaseAuth: auth,
        menuItems: menuItems,
    }
}) satisfies LayoutLoad;