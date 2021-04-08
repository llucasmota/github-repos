import React, { createContext, useState, ReactNode, useCallback } from 'react'

interface ITheme {
  themeBlack: boolean;
  changeTheme(): void;
}


// criando contexto

export const ThemeContext = createContext<ITheme>({} as ITheme)

export const ThemeContextProvider: React.FC = ({ children }) => {


  const [themeBlack, setThemeBlack] = useState<boolean>(false)

  const changeTheme = useCallback(() => {
    console.log(themeBlack)
    setThemeBlack(!themeBlack)
  }, [themeBlack])


  return <ThemeContext.Provider value={{ themeBlack, changeTheme }} >
    {children}
  </ThemeContext.Provider>
}