<template>
	<footer>
		<div class="footer-content">
            <div class="footer-grid">
                <div class="footer-column">
                    <router-link to="/" class="footer-logo">CLAWPN</router-link>
                    <ul class="footer-links">
                        <li><a>Blocks? What blocks?</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Service</h4>
                    <ul class="footer-links">
                        <li><a href="https://t.me/clawpnbot">Telegram Bot</a></li>
                        <li><a href="https://t.me/clawpn">Telegram Channel</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Help</h4>
                    <ul class="footer-links">
                        <li><a href="https://t.me/clawpnsupportbot">Support</a></li>
                        <li><router-link to="/agreement">Agreement</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    &copy; 2026 CLAWPN
                </div>
                <div class="copyright">
                    Produced by fourtythree
                </div>
            </div>
		</div>
	</footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>