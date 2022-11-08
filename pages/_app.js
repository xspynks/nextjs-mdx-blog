import "../styles/globals.css";
// _app.js
import Header from "../components/header";
import Footer from "../components/footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
