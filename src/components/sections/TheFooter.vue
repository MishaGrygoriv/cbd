<template>
  <div id="contact-us" class="the-footer container">
    <a href="/" class="the-footer__logo">CBD</a>
    <div class="the-footer__col-wrapper">
      <div class="the-footer__col-left">
        <ul class="the-footer__list">
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">Privacy Policy</a>
          </li>
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">Terms of Use</a>
          </li>
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">Return Policy</a>
          </li>
        </ul>
      </div>
      <div class="the-footer__col-middle">
        <ul class="the-footer__middle-list">
          <li class="the-footer__middle-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="the-footer__social-link"
              uk-icon="icon: facebook; ratio: 1.5"
            ></a>
          </li>
          <li class="the-footer__middle-item">
            <a
              href="https://twitter.com/"
              target="_blank"
              class="the-footer__social-link"
              uk-icon="icon: twitter; ratio: 1.5"
            ></a>
          </li>
          <li class="the-footer__middle-item">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              class="the-footer__social-link"
              uk-icon="icon: youtube; ratio: 1.5"
            ></a>
          </li>
        </ul>
        <h3 class="the-footer__middle-subtitle">Subscribe to Newsletter</h3>
        <the-input />
      </div>
      <div class="the-footer_col-right">
        <ul class="the-footer__list">
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">SHIPPING INFO</a>
          </li>
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">RETURNS / EXCHANGES</a>
          </li>
          <li class="the-footer__item">
            <a href="#" class="the-footer__link">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
    <span class="the-footer__text">© 2018. CbD health.</span>
  </div>
</template>
<script>
import TheInput from "../common/TheInput.vue";

export default {
  name: "TheFooter",
  components: {
    TheInput,
  },
};
</script>
<style lang="scss">
.the-footer {
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
      width: 0;
      height: 2px;
      top: 45px;
      bottom: 0;
      @media screen and (min-width: 576px) {
        width: 0;
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
      text-decoration: none;
    }
  }
  &__col-wrapper {
    @include flex(center, center, column);
    max-width: 960px;
    width: 100%;
    text-align: center;
     @media screen and (min-width: 576px) {
         @include flex(center, center, column);
      }
      @media screen and (min-width: 768px) {
         @include flex(space-between, stretch);
      }
      @media screen and (min-width: 1024px) {
         @include flex(space-between, stretch);
      }
      @media screen and (min-width: 1280px) {
         @include flex(space-between, stretch);
      }
  }
  &__col-left {
    margin-right: 0;
    @media screen and (min-width: 576px) {
         margin-right: 55px;
      }
  }
  &__list {
    padding-top: 10px;
    padding-left: 0;
  }
  &__item {
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
