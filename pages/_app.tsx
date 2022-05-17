import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: "1rem", margin: "1rem", border: "4px dashed grey", borderRadius: "1rem" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
