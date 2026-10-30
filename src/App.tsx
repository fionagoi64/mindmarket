import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/navbar/Navbar";
import { HomePage } from "@/pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
