<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }
}
</script>
<style>
  @import './index.css';
</style>