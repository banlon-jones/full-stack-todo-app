import admin from "firebase-admin";
import * as path from "node:path";

const serviceAccount = path.resolve("./todo-app-309e2-firebase-adminsdk-fbsvc-658419b9d5.json");

const fbApp = admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
    }
);
export default fbApp;
