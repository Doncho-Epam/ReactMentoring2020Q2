import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import ErrorBoundry from "./components/error-handling/error-handling"

function App() {
  return (
    <div>
      <ErrorBoundry>
        <Header />
        <Content />
        <Footer />
      </ErrorBoundry>
    </div>
  );
}

export default App;
