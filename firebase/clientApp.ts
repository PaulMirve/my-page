import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    databaseURL: `https://${process.env.FIREBASE_DATABASE_NAME}.firebaseio.com`,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});


const database = getFirestore(app);

export { database }