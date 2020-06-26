import React, { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import ErrorBoundry from "./components/error-handling/error-handling";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <ErrorBoundry>
        <Header showDetails={showDetails} setShowDetails={setShowDetails} />
        <Content setShowDetails={setShowDetails} />
        <Footer />
      </ErrorBoundry>
    </div>
  );
}

export default App;
