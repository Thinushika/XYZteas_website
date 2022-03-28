import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Structure from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Structure>
      <Component {...pageProps} />
    </Structure>
  );
}

export default MyApp;
