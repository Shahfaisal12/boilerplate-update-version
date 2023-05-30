/** @format */
"use client";
import Home from "./home/page";
// import Loading from "./loading";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // const [splash, setSplash] = useState(true);
  // useEffect(() => {
  //   // Simulate loading process
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, []);


  return (
    <>
      {/* <Suspense fallback={<Loading />}>
    </Suspense> */}
      <Home />
    </>
  );
};

export default Page;
