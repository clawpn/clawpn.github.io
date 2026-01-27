<template>
  <nav>
    <div class="nav-content container">
      <router-link to="/" class="logo">CLAWPN</router-link>
      
      <div class="lang-switcher">
        <button @click="setLanguage('ru')" :class="{ 'lang-btn': true, 'active': $i18n.locale === 'ru' }">RU</button>
        <button @click="setLanguage('en')" :class="{ 'lang-btn': true, 'active': $i18n.locale === 'en' }">EN</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navigation',
  setup() {
    const { locale } = useI18n()
    
    const setLanguage = (lang) => {
      locale.value = lang
      localStorage.setItem('lang', lang)
    }
    
    return {
      setLanguage
    }
  }
}
</script>