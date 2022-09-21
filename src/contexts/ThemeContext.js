import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeContextProvider() {
    const [themeStyles, setThemeStyles] = useState({
        isLightTheme: true,
        light: {syntax : '#555', ui : '#ddd', bg : '#eee'},
        dark: {syntax : '#ddd', ui : '#333', bg : '#555'}
    })
  return (<></>)
}
