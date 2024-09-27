const util = {
  getFormattedDateTime(date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0") // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0")

    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  },
  getCurrentFormattedDateTime() {
    return this.getFormattedDateTime(new Date())
  },
  makeSearchParam(object) {
    return object
  },
  postMessage(type, data) {
    if (!window.ReactNativeWebView) {
      // 이 값이 없는 경우 모바일이 아니다.
      return
    }
    window.ReactNativeWebView?.postMessage(JSON.stringify({ type, data }))
  },
}
export default util
