/// <reference types="react-scripts" />
interface Window {
  ReactNativeWebView: {
    postMessage: (value: string) => void
  }
}
