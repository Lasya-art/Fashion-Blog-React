import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from "./Article";
import Header from "./Header";
//import Footer from "./Footer";
import Navigation from "./Nav";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

export default function App() {
  return (
    <>
      <Header />

      <Navigation />
      <Article />
    </>
  );
}
