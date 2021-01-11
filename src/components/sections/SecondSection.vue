<template>
  <div
    id="products"
    class="second-section uk-position-relative uk-visible-toggle uk-light"
    tabindex="-1"
    uk-slider="autoplay: false; autoplay-interval: 5000; pause-on-hover: false"
  >
    <h2 class="second-section__title">CBD Featured Products</h2>
    <ul
      class="slider uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"
    >
      <li class="slider__item" v-for="item in cards" :key="item.id">
        <div class="slider__top-col">
          <ul class="slider__rating-list">
            <li class="slider__rating-item" uk-icon="star"></li>
            <li class="slider__rating-item" uk-icon="star"></li>
            <li class="slider__rating-item" uk-icon="star"></li>
            <li class="slider__rating-item" uk-icon="star"></li>
            <li class="slider__rating-item" uk-icon="star"></li>
          </ul>
          <p class="slider__description slider__description--first">
            {{item.title}}
          </p>
          <img :src="item.imgSrc" alt="first-img" class="slider__img" />
        </div>
        <div class="slider__bottom-col">
          <span class="slider__price">{{item.price}}</span>
          <a class="slider__btn login__btn--hover-effect" @click="handleClick(item)">SHOP</a>
        </div>
      </li>
    </ul>
    <a
      class="arrow arrow-left uk-flex-center"
      href="#"
      uk-icon="arrow-left"
      uk-slider-item="previous"
    ></a>
    <a
      class="arrow uk-flex-center"
      href="#"
      uk-icon="arrow-right"
      uk-slider-item="next"
    ></a>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "SecondSection",
  data() {
    return {
      cards: [
        {
          id: 0,
          title: 'CBD 500 mg Orange Flavor Tincture',
          imgSrc: require('../../assets/second_section_item_1.png'),
          price: '$49.99 USD',
        },
        {
          id: 1,
          title: 'Black ICE CBD Muscle Rub 200 mg',
          imgSrc: require('../../assets/second_section_item_2.png'),
          price: '$49.99 USD',
        },
        {
          id: 2,
          title: 'CBD+Curcumin Coffee 750 mg',
          imgSrc: require('../../assets/second_section_item_3.png'),
          price: '$79.99 USD',
        },
        {
          id: 3,
          title: 'CBD+Curcumin Coffee 750 mg',
          imgSrc: require('../../assets/second_section_item_4.png'),
          price: '$59.99 USD',
        },
        {
          id: 4,
          title: 'CBD+Curcumin Coffee 750 mg',
          imgSrc: require('../../assets/second_section_item_5.png'),
          price: '$39.99 USD',
        },
        {
          id: 5,
          title: 'CBD+Curcumin Coffee 750 mg',
          imgSrc: require('../../assets/second_section_item_6.png'),
          price: '$29.99 USD',
        },
      ]
    };
  },
  methods: {
    ...mapActions('littleStore', ['addItemToCart']),
    handleClick(card) {
      this.addItemToCart(card)
    },
  },
};
</script>
<style lang="scss">
.second-section {
  padding: 0 50px 140px;
  &__title {
    @include text($H300, 400, $dark-text-color);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 80px;
  }
}
.slider {
  margin-bottom: 50px;
  &__item {
    padding-left: 0;
    margin-right: 40px;
  }
  &__top-col {
    height: 100%;
    max-height: 370px;
    padding: 30px;
    background-color: $light-color;
    @include flex(center, center, column);
  }
  &__rating-list {
    margin-bottom: 20px;
    padding-left: 0;
  }
  &__rating-item {
    width: 16px;
    height: 17px;
  }
  &__description {
    @include text($H80, 400, $dark-text-color);
    text-transform: uppercase;
    letter-spacing: 2.7px;
    margin-top: 0;
    &--first {
      margin-bottom: 48px;
    }
    &--second {
      margin-bottom: 81px;
    }
    &--third {
      margin-bottom: 55px;
    }
  }
  &__bottom-col {
    background-color: $product-card-bg-color;
    @include flex(flex-start, flex-start, row);
    max-height: 75px;
  }
  &__price {
    display: inline-block;
    text-align: start;
    padding: 25px 20px 23px;
    max-width: 425px;
    width: 100%;
    @include text($H80, 400, $dark-text-color);
  }
  &__btn {
    background-color: $green-text-color;
    @include flex(flex-start, flex-start);
    padding: 25px 35px;
    max-width: 160px;
    width: 100%;
    &::before {
      content: "";
      background-color: $light-color;
      position: absolute;
      width: 42px;
      height: 0px;
      right: 30px;
      bottom: 37px;
      transition: transform 0.5s;
      @media screen and (min-width: 375px) {
        height: 2px;
      }
    }
    &:hover {
      color: $rating-star-color;
      text-decoration: none;
      &::before {
        content: "";
        background-color: $light-color;
        position: absolute;
        width: 42px;
        height: 0px;
        right: 30px;
        bottom: 37px;
        transform: translateX(-137%);
        @media screen and (min-width: 375px) {
        height: 2px;
      }
      }
    }
  }
  &__img {
    transition: all 0.7s ease;
    max-height: 200px;
    cursor: zoom-in;
    &:hover {
      transform: scale(1.1);
    }
  }
}
.uk-icon svg polygon {
  fill: $green-text-color;
}
.arrow svg {
  width: 50px;
  height: 40px;
  color: $green-text-color;
}
.arrow-left {
  margin-right: 50px;
}
.uk-position-relative {
  text-align: center;
}
.uk-light h2, .uk-light .uk-h2 {
  color: $dark-text-color;
}
.uk-child-width-1-2>* {
  width: 109%;
  @media screen and (min-width: 576px) {
        width: 50%;
      }
}
</style>
