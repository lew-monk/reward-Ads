//Local imports
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  return (
    <div className="App w- relative overflow-x-hidden">
      {/* Start of the Banner section */}

      <div className="banner min-h-screen bg-hero-svg bg-no-repeat bg-cover">
        <Banner />
      </div>

      {/* End of the Banner Section */}

      {/* Start of the Message Section */}
      <div className="divider mt-28 flex justify-center">
        <Message />
      </div>

      {/* End of the Message Section */}

      {/* Start of the Content Section */}
      <div className="content mt-80">
        <Content />
      </div>
      {/* End of the Content Section */}

      {/* Start of the Footer Section */}
      <div className="content mt-24 pb-12">
        <Footer />
      </div>
      {/* End of the Footer Section */}
    </div>
  );
}

export default App;
