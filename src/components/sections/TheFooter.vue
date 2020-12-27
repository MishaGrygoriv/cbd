<template>
    <div id="contact-us" class="footer container">
        <a href="/" class="footer__logo">CBD</a>
        <div class="footer__col-wrapper">
            <div class="footer__col-left">
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="#" class="footer__link">Privacy Policy</a>
                        </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">Terms of Use</a>
                        </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">Return Policy</a>
                        </li>
                </ul>
            </div>
            <div class="footer__col-middle">
                <ul class="footer__middle-list">
                    <li class="footer__middle-item">
                        <a href="https://www.facebook.com/" target="_blank" class="footer__social-link" uk-icon="icon: facebook; ratio: 1.5"></a>
                    </li>
                    <li class="footer__middle-item">
                        <a href="https://twitter.com/" target="_blank" class="footer__social-link" uk-icon="icon: twitter; ratio: 1.5"></a>
                    </li>
                    <li class="footer__middle-item">
                        <a href="https://www.youtube.com/" target="_blank" class="footer__social-link" uk-icon="icon: youtube; ratio: 1.5"></a>
                    </li>
                </ul>
                <h3 class="footer__middle-subtitle">Subscribe to Newsletter</h3>
                <the-input/>
            </div>
            <div class="footer_col-right">
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="#" class="footer__link">SHIPPING INFO</a>
                        </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">RETURNS / EXCHANGES</a>
                        </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">CONTACT</a>
                        </li>
                </ul>
            </div>
        </div>
        <span class="footer__text">© 2018. CbD health.</span>
    </div>
</template>
<script>
import TheInput from '../common/TheInput.vue'

export default {
    name: 'TheFooter',
    components: {
        TheInput

    }
}
</script>
<style lang="scss">
.footer {
    @include flex(center, center, column);
    padding: 0 0 100px;
    &__logo {
        @include text($H600, 400, $green-text-color);
        position: relative;
        margin-bottom: 65px;
        transition: color 0.3s ease;
        &::before,
        &::after {
            content: "";
            background-color: $green-text-color;
            position: absolute;
            // width: 371px;
            width: 30px;
            height: 2px;
            top: 45px;
            bottom: 0;
            @media screen and (min-width: 576px) {
        width: 80px;
    }
    @media screen and (min-width: 768px) {
        width: 160px;
    }
    @media screen and (min-width: 1024px) {
        width: 280px;
    }
    @media screen and (min-width: 1280px) {
        width: 371px;
    }
        }
        &::before {
            left: 260px;
        }
        &::after {
            right: 260px;
        }
        &:hover {
            color: $rating-star-color;
            text-decoration: none
        }
    }
    &__col-wrapper {
        @include flex(space-between, stretch);
        max-width: 960px;
        width: 100%;
        text-align: center;
    }
    &__col-left {
        margin-right: 55px;
    }
    &__list {
        padding-top: 10px;
    }
    &__item{
        margin-bottom: 15px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__link {
        @include text($H40, 400, $green-text-color);
        letter-spacing: 3.92px;
        text-transform: uppercase;
        transition: color 0.3s ease;
        &:hover {
            text-decoration: none;
            color: $rating-star-color;
        }
    }
    &__middle-list {
        @include flex(center, center);
        margin-bottom: 120px;
        padding-left: 0;
        position: relative;
        &::after {
            content: "";
            background-color: $green-text-color;
            position: absolute;
            width: 2px;
            height: 55px;
            top: 70px;
            bottom: 0;
        }
    }
    &__middle-item {
        margin-right: 60px;
        &:last-child {
            margin-right: 0;
        }
    }
    &__middle-subtitle {
        @include text($H80, 400, $dark-text-color);
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 30px;
        margin-top: 0;
    }
    &__text {
        display: inline-block;
        @include text($H10, 400, $green-text-color);
        letter-spacing: 3.08px;
        text-transform: uppercase;
    }
    .uk-icon svg path {
    fill: $green-text-color;
    transition: fill 0.3s ease;
    &:hover {
        fill: $rating-star-color;
    }
}
}
</style>