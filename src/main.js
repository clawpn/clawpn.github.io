import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './main.css'

const messages = {
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
        },
        agreement: {
            title: "Условия и Конфиденциальность",
            date: "Дата вступления в силу: 05.12.2025",
            back: "← На главную",
            sec1_title: "1. ОБЩИЕ ПОЛОЖЕНИЯ",
            sec1_text: `1.1. Настоящий документ представляет собой юридически обязывающий договор между вами и сервисом CLAWPN.\n1.2. Используя наш Сервис, Вы подтверждаете, что полностью соглашаетесь соблюдать все условия настоящего Соглашения.\n1.3. Сервис предоставляет технологию зашифрованного туннеля. Мы не несем ответственности за контент и действия пользователей.`,
            sec2_title: "2. ОТВЕТСТВЕННОСТЬ",
            sec2_text: `2.1. Вы обязуетесь использовать Сервис исключительно в законных целях.\n2.2. Запрещено: распространение вредоносного ПО, спам, взлом систем и деятельность, нарушающая законы РФ.\n2.3. Сервис предоставляется на условиях «как есть» (AS IS). Администрация не несет ответственности за прямые или косвенные убытки.`,
            sec3_title: "3. ПОЛИТИКА NO-LOGS",
            sec3_text: `3.1. Мы НЕ ЗАПИСЫВАЕМ и НЕ ХРАНИМ: ваш реальный IP, историю посещений и поисковые запросы.\n3.2. Мы обрабатываем только ваш Telegram User ID для работы аккаунта.\n3.3. В силу архитектуры No-Logs, мы технически не можем предоставить данные о вашей активности даже по запросу органов.`,
            sec4_title: "4. ПРОЧИЕ УСЛОВИЯ",
            sec4_text: `4.1. Администрация может изменять Соглашение в одностороннем порядке.\n4.2. Мы оставляем за собой право прекратить обслуживание при нарушении правил.`
        }
    },
    en: {
        hero: {
            title: "Sleep soundly",
            subtitle: "without worrying about blocks",
            cta: "Try for Free",
            pricing_info: "7 days free trial, then only €1 per month"
        },
        features: {
            speed: { title: "High Speed", desc: "Stable connection up to 1 Gbps for any task" },
            privacy: { title: "Privacy First", desc: "We don't keep logs and encrypt traffic" },
            devices: { title: "Any platform", desc: "Works on iOS, Android, Windows, and macOS" }
        },
        agreement: {
            title: "Terms & Privacy Policy",
            date: "Effective Date: 2025-12-05",
            back: "← Back Home",
            sec1_title: "1. GENERAL PROVISIONS",
            sec1_text: `1.1. This document is a legally binding contract between you and CLAWPN.\n1.2. By using the Service, you confirm your unconditional agreement to these terms.\n1.3. Service provides encrypted tunnel technology. We are not responsible for user content or actions.`,
            sec2_title: "2. RESPONSIBILITY",
            sec2_text: `2.1. You agree to use the Service only for legal purposes.\n2.2. Prohibited: malware distribution, spam, hacking, and activities violating local laws.\n2.3. The service is provided 'AS IS'. Administration is not liable for any direct or indirect damages.`,
            sec3_title: "3. NO-LOGS POLICY",
            sec3_text: `3.1. We DO NOT record or store: your real IP, browsing history or search queries.\n3.2. We only process your Telegram User ID to maintain your account.\n3.3. Due to the No-Logs architecture, we technically cannot provide your activity data to any third party.`,
            sec4_title: "4. OTHER TERMS",
            sec4_text: `4.1. Administration may change this Agreement unilaterally.\n4.2. We reserve the right to terminate service for violating the terms.`
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'ru',
    messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')