import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Faq from "./sections/Faq"; 

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero /> 
      <Features />
      <Faq />
    </main>
  )
}

export default App
