import en from "./en"

const reducer = (a, b) => {
  return a[b]
}
export default function getLocales(location, language = "en") {
  const locales = language === "en" ? en : en
  const placementTree = location.split(".")
  const string = placementTree.reduce(reducer, locales)
  return string
}
