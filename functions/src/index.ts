import * as functions from "firebase-functions";

let svelteSSRServer: any;
export const svelteSSR = functions.region("us-central1").https.onRequest(async (request, response) => {
    if (!svelteSSRServer) {
        functions.logger.info("Initialising SvelteKit SSR entry");
        svelteSSRServer = (await import("../lib/svelteSSR/index.js")).default;
        functions.logger.info("SvelteKit SSR entry initialised!");
    }
    functions.logger.info("Requested resource: " + request.originalUrl);
    return svelteSSRServer(request, response);
});

export const sveltePublicSSR = functions.region("us-central1").https.onRequest(async (request, response) => {
    if (!svelteSSRServer) {
        functions.logger.info("Initialising SvelteKit SSR entry");
        svelteSSRServer = (await import("../lib/sveltePublicSSR/index.js")).default;
        functions.logger.info("SvelteKit SSR entry initialised!");
    }
    functions.logger.info("Requested resource: " + request.originalUrl);
    return svelteSSRServer(request, response);
});
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
