const translations = {
  ru: {
    hero: {
      title: "Спи спокойно",
      subtitle: "не беспокоясь о блокировках",
      cta: "Попробовать бесплатно",
      pricing_info: "7 дней бесплатно, затем всего 100₽ в месяц"
    },
    features: {
      speed: { title: "Высокая скорость", desc: "Стабильное соединение до 1 Гбит/с для любых задач" },
      privacy: { title: "Анонимность", desc: "Мы не храним логи и шифруем трафик" },
      devices: { title: "Любая платформа", desc: "Работает на iOS, Android, Windows и macOS" }
    }
  },
  en: {
    hero: {
      title: "Sleep soundly",
      subtitle: "without worrying about blocks",
      cta: "Try for Free",
      pricing_info: "7 days free trial, then only 1€ per month"
    },
    features: {
      speed: { title: "High Speed", desc: "Stable connection up to 1 Gbps for any task" },
      privacy: { title: "Privacy First", desc: "We don't keep logs and encrypt traffic" },
      devices: { title: "Any platform", desc: "Works on iOS, Android, Windows, and macOS" }
    }
  }
}

export function createI18n(lang = 'ru') {
  return {
    currentLang: lang,
    
    t(key) {
      const keys = key.split('.')
      let value = translations[this.currentLang]
      
      for (const k of keys) {
        value = value?.[k]
      }
      
      return value || key
    },
    
    setLanguage(lang) {
      if (translations[lang]) {
        this.currentLang = lang
        localStorage.setItem('lang', lang)
      }
    }
  }
}

export default translations