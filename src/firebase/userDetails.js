import { auth } from "./firebaseConfig";

export const getUserName = () => auth.currentUser.displayName;
export const getUserId = () => auth.currentUser.uid;
