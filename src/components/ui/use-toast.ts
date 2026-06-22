"use client";

export { useToast } from "@/components/ui/toast";

import { useToast } from "@/components/ui/toast";

export const useToastState = () => {
  const { addToast } = useToast();
  return { toast: addToast };
};
