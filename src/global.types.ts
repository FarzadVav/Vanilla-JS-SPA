export { }

declare global {
  interface Window {
    submitHandler: (e: MouseEvent) => void
    logout: () => void
  }
}