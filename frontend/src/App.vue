<template>
  <div id="app">
    <div id="nav" class="container">
      <Navigation />
    </div>
    <router-view/>
    <Footer/>
    
  </div>
</template>

<script>
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
  @import './scss/App.scss'
</style>
