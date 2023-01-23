import type { PageLoad } from './$types';
import { collection, getDocs } from 'firebase/firestore/lite';
import { signInAnonymously } from 'firebase/auth';

export const load: PageLoad = async ({ parent, fetch, params }) => {
    globalThis.fetch = fetch;
    const parentData = await parent();
    const { firestoreDatabase: db, firebaseAuth: auth } = parentData;
    // await signInAnonymously(auth);
    const featuresCol = collection(db, 'service_features');
    const features = (await getDocs(featuresCol)).docs.map(doc => doc.data());
    console.log(features);
    return { ...parentData,
        features: features,
    }
}