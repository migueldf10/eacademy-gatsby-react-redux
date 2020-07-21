import React from "react"
import en from "./en"

const reducer = (a, b) => {
  return a[b]
}
export default function index(props) {
  const { location, language = "en" } = props
  const locales = language === "en" ? en : en
  const placementTree = location.split(".")
  const string = placementTree.reduce(reducer, locales)
  return <>{string}</>
}
