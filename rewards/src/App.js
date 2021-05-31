//Local imports
import Banner from "./components/Banner";
import Content from "./components/Content";
import Message from "./components/Message";

function App() {
  return (
    <div className="App ">
      {/* Start of the Banner section */}

      <div className="banner min-h-screen bg-hero-svg bg-no-repeat w-screen ">
        <Banner />
      </div>

      {/* End of the Banner Section */}

      {/* Start of the Message Section */}
      <div className="divider mt-44 flex justify-center">
        <Message />
      </div>

      {/* End of the Message Section */}

      {/* Start of the Content Section */}
      <div className="content mt-80">
        <Content />
      </div>
      {/* End of the Content Section */}
    </div>
  );
}

export default App;
