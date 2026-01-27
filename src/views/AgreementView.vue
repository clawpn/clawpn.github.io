<template>
    <main class="container">
        <div class="glass-card mt-20 mb-12 reveal" :class="{ 'active': revealActive }">
        <h1 class="gradient-text mb-6">User Agreement</h1>
        <div class="text-left space-y-4 text-gray-400">
            <p>This is a placeholder for the user agreement page.</p>
            <p>You can add your terms and conditions here.</p>
            <p>Make sure to include all necessary legal information.</p>
        </div>
        </div>
    </main>
</template>

<script>
    import { ref, onMounted } from 'vue'

    export default {
    name: 'AgreementView',
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