import type { PageLoad } from './$types';
import { collection, getDocs } from 'firebase/firestore/lite';
import { signInAnonymously } from 'firebase/auth';

export const load: PageLoad = async ({ parent, fetch, params }) => {
    const {firebaseAuth: auth, firestoreDatabase: db} = await parent();
    // await signInAnonymously(auth);
    const featuresCol = collection(db, 'service_features');
    const features = (await getDocs(featuresCol)).docs.map(doc => doc.data());
    console.log(features);
    return {
        features: features,
    }
}