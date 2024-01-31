let firstEffect = true

const useFirstRun = (callback: () => void) => {
  if (firstEffect) {
    callback()
    firstEffect = false
  }
}

export default useFirstRun