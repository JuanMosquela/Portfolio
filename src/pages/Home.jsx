import About from "../components/about/About"
import Form from "../components/form/Form"
import Hero from "../components/hero/Hero"

import ProyectsCarrusell from "../components/proyects/ProyectsCarrusell"


const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <ProyectsCarrusell />
        <Form />

    </div>
  )
}
export default Home