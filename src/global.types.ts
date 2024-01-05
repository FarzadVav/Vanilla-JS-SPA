export { }

declare global {
  interface Window {
    submitHandler: (event: MouseEvent) => void;
  }
}