import { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import ErrorBoundary from '../components/ErrorBoundary'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ErrorBoundary>
  )
}

export default MyApp