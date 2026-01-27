<template>
    <main class="container">
        <div class="hero-image reveal" :class="{ 'active': revealActive }">
            <div class="image-wrapper">
                <img src="/main.gif" alt="Sleeping Cat">
            </div>
        </div>

        <div class="pt-12"></div>
        
        <h1 class="reveal" :class="{ 'active': revealActive }">
            <span class="gradient-text">{{ $t('hero.title') }}</span>
            <br>
            <span class="accent-text">{{ $t('hero.subtitle') }}</span>
        </h1>

        <div class="features-grid">
            <div v-for="(feature, key) in features" :key="key" 
                class="glass-card reveal" :class="{ 'active': revealActive }">
                <div class="icon-wrapper">
                    <i :class="feature.icon"></i>
                </div>
                <h3 class="card-title">{{ $t(`features.${key}.title`) }}</h3>
                <p class="card-desc">{{ $t(`features.${key}.desc`) }}</p>
            </div>
        </div>

        <div class="cta-section reveal" :class="{ 'active': revealActive }">
            <a href="https://t.me/clawpnbot">
                <button class="cta-button">{{ $t('hero.cta') }}</button>
            </a>
            <div class="mt-4">
                <p class="pricing-info">{{ $t('hero.pricing_info') }}</p>
                <div class="divider"></div>
            </div>
        </div>

        <div class="pt-16"></div>

        <Footer class="reveal" :class="{ 'active': revealActive }" />
    </main>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'HomeView',
        components: {
            Footer
        },
        setup() {
            const revealActive = ref(false)
            
            const features = {
                speed: { icon: 'fas fa-bolt' },
                privacy: { icon: 'fas fa-shield' },
                devices: { icon: 'fas fa-laptop' }
            }
            
            onMounted(() => {
                setTimeout(() => {
                    revealActive.value = true
                }, 100)
            })
            
            return {
                features,
                revealActive
            }
        }
    }
</script>