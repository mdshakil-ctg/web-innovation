"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  UserCredential,
  signInWithPopup
} from "firebase/auth";
import { auth } from "@/lib/firebase";


// Types
interface AuthContextType {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  createUser: (email: string, password: string) => Promise<User>;
  loginUser: (email: string, password: string) => Promise<User>;
  logoutUser: () => Promise<void>;
  updateUser: (name: string) => Promise<void>;
  googleSignup: () => Promise<UserCredential>;
  facebookSignup: () => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Register
  const createUser = async (email: string, password: string) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    setLoading(false);
    return userCredential.user;
  };

  // Login
  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    setLoading(false);
    return userCredential.user;
  };

  // Logout
  const logoutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Update profile
  const updateUser = async (name: string) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, { displayName: name });
    setUser({ ...auth.currentUser });
  };

  const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

  // Google Signup
  const googleSignup = async (): Promise<UserCredential> => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
    setLoading(false);
    return result;
  };

  // Facebook Signup
  const facebookSignup = async (): Promise<UserCredential> => {
    setLoading(true);
    const result = await signInWithPopup(auth, facebookProvider);
    setUser(result.user);
    setLoading(false);
    return result;
  };


  return (
    <AuthContext.Provider value={{ user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    googleSignup,
    facebookSignup}}>
      {children}
    </AuthContext.Provider>
  );
};
