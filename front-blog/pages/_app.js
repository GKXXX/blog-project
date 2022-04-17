import { AppContextProvider } from '../components/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps, ...otherProps}) {
  return(
    <AppContextProvider>
      <Component {...pageProps} {...otherProps} />
    </AppContextProvider>
    
  ) 
}

export default MyApp
