<template>
  <div class="navigation" :class="{ backgroundColorWhenScroll: windowTop }">
    <the-burger class="the-burger"/>
    <ul class="navigation__nav-list">
      <li class="navigation__item">
        <a 
         :class="{ active: currentBlock === 'home' }"
          v-scroll-to="{ el: '#home', onDone: (e) => setActiveClass(e.id) }"
         class="navigation__link">HOME</a>
      </li>
      <li class="navigation__item">
        <a
          :class="{ active: currentBlock === 'about' }"
          v-scroll-to="{ el: '#about', onDone: (e) => setActiveClass(e.id), offset: 250 }"
          class="navigation__link"
          >ABOUT</a
        >
      </li>
      <li class="navigation__item">
        <a 
         :class="{ active: currentBlock === 'products' }"
          v-scroll-to="{ el: '#products', onDone: (e) => setActiveClass(e.id), offset: -100 }"
         class="navigation__link">PRODUCTS</a>
      </li>
      <li class="navigation__item">
        <a 
        :class="{ active: currentBlock === 'faqs' }"
        v-scroll-to="{ el: '#faqs', onDone: (e) => setActiveClass(e.id), offset: -120 }"
        class="navigation__link">FAQS</a>
      </li>
      <li class="navigation__item">
        <a 
         :class="{ active: currentBlock === 'contact-us' }"
         v-scroll-to="{ el: '#contact-us', onDone: (e) => setActiveClass(e.id) }"
         class="navigation__link">CONTACT US</a>
      </li>
    </ul>
    <a 
     :class="{ active: currentBlock === 'home' }"
     v-scroll-to="{ el: '#home', onDone: (e) => setActiveClass(e.id) }"
     class="navigation__logo">CBD</a>
    <ul class="navigation__right-list">
      <li class="navigation__item navigation__item--border-left">
        <a href="#modal-sections" uk-toggle class="navigation__link">LOGIN</a>
        <the-login />
      </li>
      <li class="navigation__item navigation__item--border-left">
        <form class="navigation__form uk-search uk-search-default">
    <span uk-search-icon></span>
    <input class="navigation__input uk-search-input" type="search" placeholder="SEARCH">
</form>
      </li>
      <li class="navigation__item navigation__item--border-left">
        <a href="#modal-shopping-list" uk-toggle class="navigation__link">CART
          <span class="uk-badge">({{ cart.length }})</span>
        </a>
        <shopping-list/>
      </li>
    </ul>
  </div>
</template>
<script>
import TheLogin from "../common/TheLogin.vue";
import { mapState } from "vuex";
import ShoppingList from '../common/ShoppingList.vue';
import TheBurger from '../common/TheBurger.vue';

export default {
  name: "TheNav",
  data() {
    return {
      windowTop: 0,
      currentBlock: "",
    };
  },
  components: {
    TheLogin,
    ShoppingList,
    TheBurger,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  methods: {
    onResize() {
      this.itemSize = document.documentElement.clientWidth > 680 ? false : true;
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    setActiveClass(name) {
      this.currentBlock = name;
    },
  },
  computed: {
    ...mapState("littleStore", ['cart']),
    Scroll: function() {
      return window.scrollY > 50 ? true : false;
    },
  },
};
</script>
<style lang="scss">
.the-burger {
  display: block;
  @media screen and (min-width: 576px) {
        display: block;
      }
      @media screen and (min-width: 768px) {
        display: block;
      }
      @media screen and (min-width: 1024px) {
        display: block;
      }
      @media screen and (min-width: 1280px) {
        display: none;
      }
}
.backgroundColorWhenScroll {
  background-color: rgba($dark-text-color, 0.7);
}
.navigation {
  z-index: 20;
  width: 100%;
  position: fixed;
  padding: 20px 29px 20px 65px;
  @include flex(space-between, center);
  border-bottom: 1px solid rgba($light-color, 0.4);
   @media screen and (min-width: 576px) {
        padding: 20px 29px;
      }
      @media screen and (min-width: 768px) {
        padding: 20px 29px;
      }
      @media screen and (min-width: 1024px) {
        padding: 20px 29px;
      }
      @media screen and (min-width: 1280px) {
        padding: 20px 29px;
      }
  &__nav-list {
      display: none;
      @media screen and (min-width: 576px) {
        display: none;
      }
      @media screen and (min-width: 768px) {
        display: none;
      }
      @media screen and (min-width: 1024px) {
        display: none;
      }
      @media screen and (min-width: 1280px) {
        @include flex(flex-start, center, row);
      }
  }
  &__item {
    margin-right: 10px;
    position: relative;
    @media screen and (min-width: 576px) {
        margin-right: 20px;
      }
      @media screen and (min-width: 768px) {
        margin-right: 30px;
      }
      @media screen and (min-width: 1024px) {
        margin-right: 40px;
      }
      @media screen and (min-width: 1280px) {
        margin-right: 50px;
      }
    &--border-left {
      padding: 0;
      @media screen and (min-width: 576px) {
        padding: 0;
      }
      @media screen and (min-width: 768px) {
        padding: 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 0 10px;
      }
      @media screen and (min-width: 1280px) {
        padding: 0 10px;
      }
      &:nth-child(2) {
        padding: 0;
        @media screen and (min-width: 576px) {
        padding: 0;
      }
      @media screen and (min-width: 768px) {
        padding: 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 0 20px;
      }
      @media screen and (min-width: 1280px) {
        padding: 0 20px;
      }
      }
      &::before {
        content: "";
        background-color: rgba($light-color, 0.4);
        position: absolute;
        width: 0px;
        height: 88px;
        top: -33px;
        bottom: 0;
        left: -27px;
        @media screen and (min-width: 576px) {
        width: 0px;
      }
      @media screen and (min-width: 768px) {
        width: 0px;
      }
      @media screen and (min-width: 1024px) {
        width: 2px;
      }
      @media screen and (min-width: 1280px) {
        width: 2px;
      }
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    position: relative;
    @include text($H60, 400, $light-color);
    transition: color 0.2s ease;
    &:hover,
    &.active {
      color: $yellow-text-color;
      &:before {
        content: "";
        border-bottom: 2px solid rgba($main-bg-color, 0.7);
        position: absolute;
        top: 0;
        left: -5px;
        width: 130%;
        height: 50%;
      }
    }
    svg {
      position: absolute;
      left: -24px;
      bottom: -10px;
    }
  }
  &__logo {
    text-decoration: none;
    padding-right: 0px;
    padding-left: 20px;
    @include text($H300, 400, $light-color);
    transition: all 0.1s linear;
    @media screen and (min-width: 576px) {
        padding-right: 0px;
        padding-left: 100px;
      }
      @media screen and (min-width: 768px) {
        padding-right: 0px;
        padding-left: 200px;
      }
      @media screen and (min-width: 1024px) {
        padding-right: 0px;
        padding-left: 300px;
      }
      @media screen and (min-width: 1280px) {
        padding-right: 125px;
        padding-left: 0;
      }
    &:hover {
      color: $yellow-text-color;
    }
  }
  &__right-list {
    @include flex(flex-end, center, row);
    max-width: 75px;
        width: 100%;
    @media screen and (min-width: 576px) {
        max-width: 100px;
        width: 100%;
      }
      @media screen and (min-width: 768px) {
        max-width: initial;
        width: initial;
      }
      @media screen and (min-width: 1024px) {
        max-width: initial;
        width: initial;
      }
      @media screen and (min-width: 1280px) {
        max-width: initial;
        width: initial;
      }
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  &__form {
    max-width: 100px;
    width: 100%;
    display: none;
    @media screen and (min-width: 576px) {
        display: none;
      }
      @media screen and (min-width: 768px) {
        display: block;
      }
      @media screen and (min-width: 1024px) {
        display: block;
      }
      @media screen and (min-width: 1280px) {
        display: block;
      }
  }
  .uk-search-input {
    height: 20px;
    border: none;
    color: $light-color;
    &::placeholder {
     @include text($H60, 400, $light-color);
    }
  }
  .uk-search-icon {
    color: $light-color;
  }
  .uk-badge {
    position: absolute;
    top: 0px;
    bottom: 0;
    display: inline-block;
    background: none;
    font-size: 16px;
  }
}
</style>
