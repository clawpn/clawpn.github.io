import { createApp } from 'vue'
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
            privacy: { title: "Приватность", desc: "Шифрование трафика и надежные протоколы" },
            devices: { title: "Любая платформа", desc: "Работает на iOS, Android, Windows и macOS" }
        },
        agreement: {
            title: "Пользовательское соглашение",
            date: "Дата вступления в силу: 05.12.2025",
            back: "← На главную",
            sec1_title: "1. ОБЩИЕ ПОЛОЖЕНИЯ",
            sec1_text: `1.1. Настоящий документ представляет собой юридически обязывающий договор между вами и сервисом CLAWPN.\n1.2. Используя наш Сервис, Вы подтверждаете, что полностью соглашаетесь соблюдать все условия настоящего Соглашения.\n1.3. Сервис предоставляет технологию шифрования трафика. Мы не несем ответственности за контент и действия пользователей.`,
            sec2_title: "2. ОТВЕТСТВЕННОСТЬ",
            sec2_text: `2.1. Вы обязуетесь использовать Сервис исключительно в законных целях.\n2.2. Запрещено: распространение вредоносного ПО, спам, взлом систем и деятельность, нарушающая законы страны нахождения сервера или пользователя.\n2.3. Сервис предоставляется на условиях «как есть» (AS IS). Администрация не несет ответственности за прямые или косвенные убытки.`,
            sec3_title: "3. ПОЛИТИКА МИНИМИЗАЦИИ ДАННЫХ",
            sec3_text: `3.1. Мы придерживаемся принципа строгой конфиденциальности: мы не ведем учет посещаемых вами ресурсов. Все временные технические индикаторы сессий полностью стираются в автоматическом режиме.\n3.2. Для обеспечения стабильности соединений и защиты от атак сервис может обрабатывать технические метаданные сессий. Эта информация хранится в течение крайне ограниченного времени и автоматически перезаписывается.\n3.3. Мы обрабатываем только ваш Telegram User ID для управления доступом к аккаунту.`,
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
            privacy: { title: "Privacy", desc: "Traffic encryption and secure protocols" },
            devices: { title: "Any Platform", desc: "Works on iOS, Android, Windows, and macOS" }
        },
        agreement: {
            title: "Terms & Privacy",
            date: "Effective date: 05.12.2025",
            back: "← Back to Home",
            sec1_title: "1. GENERAL PROVISIONS",
            sec1_text: `1.1. This document constitutes a legally binding agreement between you and the CLAWPN service.\n1.2. By using our Service, you confirm that you fully agree to comply with all terms and conditions of this Agreement.\n1.3. The service provides traffic encryption technology. We are not responsible for the content or actions of users.`,
            sec2_title: "2. RESPONSIBILITY",
            sec2_text: `2.1. You agree to use the Service solely for lawful purposes.\n2.2. Prohibited: the distribution of malicious software, spam, hacking, and any activities that violate the laws of the country where the server or user is located.\n2.3. The Service is provided on an "AS IS" basis. The Administration is not liable for any direct or indirect damages.`,
            sec3_title: "3. DATA MINIMIZATION POLICY",
            sec3_text: `3.1. We adhere to a strict confidentiality principle: your browsing history and search queries are not subject to long-term storage.\n3.2. To ensure connection stability and protection against attacks, the service may process technical session metadata. This information is stored for a strictly limited period and is automatically overwritten.\n3.3. We only process your Telegram User ID to manage account access.`,
            sec4_title: "4. MISCELLANEOUS",
            sec4_text: `4.1. The Administration may amend this Agreement unilaterally.\n4.2. We reserve the right to terminate service in the event of a violation of these rules.`
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')