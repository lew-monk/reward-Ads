import Banner from "./components/Banner";

function App() {
  return (
    <div className="App w-screen">
      <div className="banner min-h-screen bg-blue-main w-screen ">
        <Banner />
      </div>

      <div className="divider bg-red-100 h-10">
        <h1 className="p-8">Divider</h1>
      </div>
    </div>
  );
}

export default App;
