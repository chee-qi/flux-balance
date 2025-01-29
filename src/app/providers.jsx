'use client'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

  :root {
    --primary-color: #8247E5;
    --font-gugi: 'Gugi', sans-serif;
    --font-creepster: 'Creepster', cursive;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-gugi);
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
  fonts: {
    gugi: 'var(--font-gugi)',
    creepster: 'var(--font-creepster)',
  }
}

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
} 