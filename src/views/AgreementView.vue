<template>
    <main class="agreement-container">
        <div class="bg-glow"></div>
        
        <div class="agreement-content">
            <div class="agreement-header">
                <h1 class="agreement-title">{{ $t('agreement.title') }}</h1>
                <p class="agreement-date">{{ $t('agreement.date') }}</p>
            </div>

            <div class="agreement-glass-card">
                <section class="agreement-section">
                    <h2 class="agreement-section-title">{{ $t('agreement.sec1_title') }}</h2>
                    <div class="agreement-section-text white-space-pre">{{ $t('agreement.sec1_text') }}</div>
                </section>

                <section class="agreement-section">
                    <h2 class="agreement-section-title">{{ $t('agreement.sec2_title') }}</h2>
                    <div class="agreement-section-text white-space-pre">{{ $t('agreement.sec2_text') }}</div>
                </section>

                <section class="agreement-highlight-section">
                    <h2 class="agreement-highlight-title">{{ $t('agreement.sec3_title') }}</h2>
                    <div class="agreement-highlight-text white-space-pre">{{ $t('agreement.sec3_text') }}</div>
                </section>

                <section class="agreement-section">
                    <h2 class="agreement-section-title">{{ $t('agreement.sec4_title') }}</h2>
                    <div class="agreement-section-text white-space-pre">{{ $t('agreement.sec4_text') }}</div>
                </section>
            </div>

            <div class="agreement-back-link">
                <router-link to="/" class="agreement-back-button">
                    <span class="agreement-button-text">{{ $t('agreement.back') }}</span>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import Footer from '../components/Footer.vue'

    export default {
    name: 'AgreementView',
    components: {
        Footer
    },
    setup() {
        const revealActive = ref(false)
        
        onMounted(() => {
            setTimeout(() => {
                revealActive.value = true
            }, 100)
        })
        
        return {
            revealActive
        }
    }
    }
</script>