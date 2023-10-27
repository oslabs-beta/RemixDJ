// Adding possible window object to global scope in order to find it in dom

declare global {
  interface Window {
    __remixManifest: any;
  }
}

export {};
