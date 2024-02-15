import { useEffect } from "react";
import "../styles/global.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById('top')?.scrollIntoView({ behavior: "smooth" });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <div id="top">
      <Component {...pageProps} />
    </div>
  );
}
