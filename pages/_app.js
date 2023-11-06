// pages/_app.js
import "../styles/globals.css"; // Adjust the path if necessary
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
