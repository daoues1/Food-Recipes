import "bootstrap/dist/css/bootstrap.css";

//components
import Header from "../components/Header";
import TrackingComponents from "../components/TrackingComponents";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        style={{
          backgroundImage:
            'url("https://as1.ftcdn.net/v2/jpg/05/37/21/30/1000_F_537213043_6QmThDKUQrPbGIaPZTNk7LytWhlrUdPw.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Header />
        <TrackingComponents />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
