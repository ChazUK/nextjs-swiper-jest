import "@/styles/global.css";
import type { AppProps } from "next/app";
import "swiper/scss";
import "swiper/scss/pagination";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
