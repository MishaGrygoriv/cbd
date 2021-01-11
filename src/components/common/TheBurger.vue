<template>
     <component :is="currentMenu" :right="side === 'right' ? true: false">
            <a href="#home" class="the-burger__link navigation__link">
                HOME
            </a>
            <a href="#about" class="the-burger__link navigation__link">
                ABOUT
            </a>
            <a href="#products" class="the-burger__link navigation__link">
                PRODUCTS
            </a>
            <a href="#faqs" class="the-burger__link navigation__link">
                FAQS
            </a>
            <a href="#contact-us" class="the-burger__link navigation__link">
                CONTACT US
            </a>
        </component>
</template>
<script>
import { Slide } from 'vue-burger-menu'
    
    export default{
        name: 'TheBurger',
        data() {
        return {
          menus: {
            slide: { buttonText: 'Slide' },
          },
          side: 'left',
          currentMenu: 'slide'
        };
      },
        components: {
            Slide,
        },
    };
</script>
<style lang="scss">
.the-burger {
    &__link {
        max-width: 100px;
        width: 100%;
}
}
.bm-burger-bars {
      background-color: $main-bg-color;
  }
  .bm-burger-button {
      top: 29px;
  }
</style>