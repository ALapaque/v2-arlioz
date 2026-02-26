"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import BrandLoader from "./BrandLoader";

interface LoaderContextType {
  isLoaderDone: boolean;
}

const LoaderContext = createContext<LoaderContextType>({ isLoaderDone: false });

export function useLoaderState() {
  return useContext(LoaderContext);
}

export default function LoaderProvider({ children }: { children: ReactNode }) {
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  const handleComplete = useCallback(() => {
    setIsLoaderDone(true);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoaderDone }}>
      <BrandLoader onComplete={handleComplete} />
      {children}
    </LoaderContext.Provider>
  );
}
