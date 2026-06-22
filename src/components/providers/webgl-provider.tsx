"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface WebGLContextType {
  isSupported: boolean;
}

const WebGLContext = createContext<WebGLContextType>({ isSupported: true });

export function WebGLProvider({ children }: { children: React.ReactNode }) {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const checkWebGLSupport = async () => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        if (isMounted) setIsSupported(!!gl);
      } catch {
        if (isMounted) setIsSupported(false);
      }
    };
    checkWebGLSupport();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <WebGLContext.Provider value={{ isSupported }}>
      {children}
    </WebGLContext.Provider>
  );
}

export function useWebGL() {
  return useContext(WebGLContext);
}
