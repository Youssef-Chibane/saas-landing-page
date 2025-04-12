import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <Layout title="EdgeAi">
      <Hero />
      <Brands />
    </Layout>
  );
}

export default App;
