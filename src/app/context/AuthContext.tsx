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
  createUser: (email: string, password: string, name: string) => Promise<User>;
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

  // Helper: Register user in MongoDB
  const registerUserInMongo = async (user: User, provider: string) => {
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          name: user.displayName || "",
          email: user.email,
          provider,
        }),
      });
    } catch (error) {
      console.error("Failed to register user in MongoDB:", error);
    }
  };

  // Register with email/password
  const createUser = async (email: string, password: string, name: string) => {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    setUser(userCredential.user);

    // Register in MongoDB
    await registerUserInMongo(userCredential.user, "email");

    setLoading(false);
    return userCredential.user;
  };

  // Login with email/password
  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);

    // Register in MongoDB if not exists
    await registerUserInMongo(userCredential.user, "email");

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

  // Google signup/login
  const googleSignup = async (): Promise<UserCredential> => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);

    await registerUserInMongo(result.user, "google");

    setLoading(false);
    return result;
  };

  // Facebook signup/login
  const facebookSignup = async (): Promise<UserCredential> => {
    setLoading(true);
    const result = await signInWithPopup(auth, facebookProvider);
    setUser(result.user);

    await registerUserInMongo(result.user, "facebook");

    setLoading(false);
    return result;
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      setLoading,
      createUser,
      loginUser,
      logoutUser,
      updateUser,
      googleSignup,
      facebookSignup
    }}>
      {children}
    </AuthContext.Provider>
  );
};
