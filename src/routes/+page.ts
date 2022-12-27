import PocketBase from 'pocketbase';
import type { PageLoad } from './$types';

const client = new PocketBase('https://bahoa.kentloofbourrow.com');

export const load: PageLoad = async ({ fetch, params }) => {
    const features: ServiceFeatures[] = await client.collection('service_features').getFullList<ServiceFeatures>();
    console.log(features);
    return {
        features: features,
    }
}