import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Layout /> 
  </>)
}

export default MyApp;
