export const subscribe = (callback: () => void) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

export const getSnapshot = () => {
  return navigator.onLine;
};

export default {
  getSnapshot,
  subscribe,
};
