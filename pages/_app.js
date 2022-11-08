import "../styles/globals.css";
// _app.js
import Header from "../components/header";
import Footer from "../components/footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
