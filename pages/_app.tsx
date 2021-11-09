import Nav from "../components/Nav"

const MyApp = ({ Component, pageProps }) => {
  return <div>
    <Nav />
    <Component {...pageProps} />
  </div>
}

export default MyApp