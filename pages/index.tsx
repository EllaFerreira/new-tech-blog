import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageWithLayout } from "../types/types";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, []);

  return <div className="text-white text-[48px]" />;
};

export default Home;
