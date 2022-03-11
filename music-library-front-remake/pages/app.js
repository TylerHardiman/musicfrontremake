// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// This allows me to use react-bootstrap components as I would in a reactjs app in this nextjs app
