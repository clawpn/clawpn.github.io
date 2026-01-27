<template>
  <div>
    <div class="bg-glow"></div>
    
    <Navigation />
    
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue'

export default {
    name: 'App',
    components: {
        Navigation,
        Footer
    }
}
</script>