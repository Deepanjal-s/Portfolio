import Navbar from '../components/Navbar'
import About from '../components/About'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/projects'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'

function Home() {

    return ( 
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Footer />
        </>
    )
}

export default Home;