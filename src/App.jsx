import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertyListing from "./pages/PropertyListing";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <PropertyListing />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </Router>
  );
}

export default App;