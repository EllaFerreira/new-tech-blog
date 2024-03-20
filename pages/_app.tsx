import '../styles/styles.css';
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextPageWithLayout } from "../types/types";

const queryClient = new QueryClient();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white w-screen h-screen md:block hidden">
        <Head>
          <title>Welcome to TechGirlBlog</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        {getLayout(<Component {...pageProps} />)}
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
