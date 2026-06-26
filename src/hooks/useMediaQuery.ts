import { useSyncExternalStore } from "react";

export const useMediaQuery = (
  query: string,
): boolean => {
  return useSyncExternalStore(
    // Subscribe to change events
    (callback) => {
      if (typeof window === "undefined")
        return () => {};
      const mediaQueryList =
        window.matchMedia(query);
      mediaQueryList.addEventListener(
        "change",
        callback,
      );
      return () =>
        mediaQueryList.removeEventListener(
          "change",
          callback,
        );
    },
    // Get the current snapshot value on the client
    () => {
      if (typeof window !== "undefined") {
        return window.matchMedia(query).matches;
      }
      return false;
    },
    // Server snapshot value for SSR
    () => false,
  );
};
