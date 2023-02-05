import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import "@sass/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
