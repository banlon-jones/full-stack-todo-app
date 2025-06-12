import {getAuth} from "firebase-admin/auth";
import fbApp from "./firebaseConfig.js";

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization.substring(7);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  const firebaseAuth = getAuth(fbApp);
  firebaseAuth.verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Error verifying token:', error);
      return res.status(401).json({ message: 'Unauthorized access' });
    });
}

export default isAuthenticated
