<template>
  <div id="home" class="the-header">
    <the-nav />
    <div class="the-header__wrapper container">
      <h1 class="the-header__title">Enhancing Life</h1>
      <span class="the-header__title the-header__title--mb"
        >Excelling in Care</span
      >
      <h3 class="the-header__subtitle">Choose Wisely. Choose CBD.</h3>
      <the-button />
      <a href="#products" class="the-header__product-btn" uk-icon="arrow-right"
        >See all products</a
      >
    </div>
      <span class="the-header__text">CBD POTION HEALTH</span>
      <a uk-icon="icon: chevron-down; ratio: 2" 
      v-scroll-to="{ el: '#about', offset: 250 }"
      class="the-header__scroll"></a>
  </div>
</template>
<script>
import TheButton from "../common/TheButton.vue";
import TheNav from "../navigation/TheNav.vue";

export default {
  name: "TheHeader",
  components: {
    TheNav,
    TheButton,
  },
};
</script>
<style lang="scss">
.the-header {
  min-height: 100vh;
  background: url("../../assets/header_bg_img.png") no-repeat center;
  background-size: cover;
  &__wrapper {
    @include flex(flex-end, flex-end, column);
    padding: 250px 30px 100px;
    @media screen and (min-width: 576px) {
        padding: 250px 40px 50px;
      }
      @media screen and (min-width: 768px) {
        padding: 250px 50px 50px;
      }
      @media screen and (min-width: 1024px) {
        padding: 250px 100px 100px;
      }
      @media screen and (min-width: 1280px) {
        padding: 250px 100px 100px;
      }
  }
  &__title {
    @include text($H240, 400, $main-bg-color);
    letter-spacing: 9.4px;
    text-transform: uppercase;
    margin: 0;
    @media screen and (min-width: 576px) {
        @include text($H350, 400, $main-bg-color);
      }
      @media screen and (min-width: 768px) {
        @include text($H450, 400, $main-bg-color);
      }
      @media screen and (min-width: 1024px) {
        @include text($H550, 400, $main-bg-color);
      }
      @media screen and (min-width: 1280px) {
        @include text($H550, 400, $main-bg-color);
      }
    &--mb {
      display: inline-block;
      margin-bottom: 20px;
      letter-spacing: 9.4px;
       @media screen and (min-width: 576px) {
        letter-spacing: 9.4px;
      }
      @media screen and (min-width: 768px) {
       letter-spacing: 9.4px;
      }
      @media screen and (min-width: 1024px) {
        letter-spacing: 15.4px;
      }
      @media screen and (min-width: 1280px) {
        letter-spacing: 15.4px;
      }
    }
  }

  &__subtitle {
    @include text($H240, 300, $main-bg-color);
    letter-spacing: 6.72px;
    margin-bottom: 56px;
    margin-top: 0;
  }
  &__product-btn {
    @include text($H50, 300, $main-bg-color);
    letter-spacing: 5.04px;
    margin: 0;
    padding-right: 38px;
    position: relative;
    line-height: initial;
    transition: color 0.6s ease;
    @media screen and (min-width: 576px) {
        @include text($H60, 300, $main-bg-color);
      }
      @media screen and (min-width: 768px) {
        @include text($H80, 300, $main-bg-color);
      }
      @media screen and (min-width: 1024px) {
        @include text($H80, 300, $main-bg-color);
      }
      @media screen and (min-width: 1280px) {
       @include text($H80, 300, $main-bg-color);
      }
    &:hover {
      color: $yellow-text-color;
    }
    svg {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  a {
    text-decoration: none;
  }

  &__text {
    @include text($H220, 400, $light-color);
    display: none;
    position: absolute;
    bottom: 180px;
    transform: rotate(-90deg);
    @media screen and (min-width: 576px) {
        display: none;
      }
      @media screen and (min-width: 768px) {
       display: initial;
      }
      @media screen and (min-width: 1024px) {
        display: initial;
      }
      @media screen and (min-width: 1280px) {
     display: initial;
      }
    &:before {
    content: "";
    display: block;
    width: 90px;
    border-top: 2px solid #fff;
    position: absolute;
    left: -128px;
    bottom: 15px;
    }
  }
  &__scroll {
    position: absolute;
    display: none;
    left: 41%;
    bottom: -10%;
    color: $light-color;
    transition: color 0.2s ease;
    text-transform: uppercase;
    @media screen and (min-width: 375px) {
        left: 45%;
    bottom: 0;
    display: initial;
      }
      @media screen and (min-width: 576px) {
        left: 48%;
    bottom: 2%;
    display: initial;
      }
    &:hover {
      color: $yellow-text-color;
    }
  }
}
</style>
