import Banner from "./components/Banner";
import Message from "./components/Message";

function App() {
  return (
    <div className="App w-screen">
      <div className="banner min-h-screen bg-hero-svg bg-no-repeat w-screen ">
        <Banner />
      </div>

      <div className="divider mt-44 flex justify-center">
        <Message />
      </div>
    </div>
  );
}

export default App;
