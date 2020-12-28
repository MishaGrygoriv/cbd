<template>
        <div id="products" class="second-section uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: false; autoplay-interval: 5000; pause-on-hover: false">
<h2 class="second-section__title">CBD Featured Products</h2>
    <ul class="slider uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        <li class="slider__item">
           <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--first">CBD 500 mg Orange Flavor Tincture</p>
               <img :src="firstItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$49.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
        <li class="slider__item">
                <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--second">Black ICE CBD Muscle Rub 200 mg</p>
               <img :src="secondItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$49.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
        <li class="slider__item">
                <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--third">CBD+Curcumin Coffee 750 mg</p>
               <img :src="thirdItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$79.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
        <li class="slider__item">
                <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--first">CBD+Curcumin Coffee 750 mg</p>
               <img :src="fourthItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$79.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
        <li class="slider__item">
                <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--first">CBD+Curcumin Coffee 750 mg</p>
               <img :src="fifthItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$79.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
        <li class="slider__item">
                <div class="slider__top-col">
               <ul class="slider__rating-list">
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
                   <li class="slider__rating-item" uk-icon="star"></li>
               </ul>
               <p class="slider__description slider__description--first">CBD+Curcumin Coffee 750 mg</p>
              <img :src="sixthItem" alt="first-img" class="slider__img">
           </div>
           <div class="slider__bottom-col">
               <span class="slider__price">$79.99 USD</span>
               <a class="slider__btn" href="#">SHOP</a>
           </div>
        </li>
    </ul>

    <a class="arrow arrow-left uk-flex-center" href="#" uk-icon="arrow-left" uk-slider-item="previous"></a>
    <a class="arrow uk-flex-center" href="#" uk-icon="arrow-right" uk-slider-item="next"></a>

</div>
</template>
<script>
import firstItem from "@/assets/second_section_item_1.png";
import secondItem from "@/assets/second_section_item_2.png";
import thirdItem from "@/assets/second_section_item_3.png";
import fourthItem from "@/assets/second_section_item_4.png";
import fifthItem from "@/assets/second_section_item_5.png";
import sixthItem from "@/assets/second_section_item_6.png";

export default {
name: "SecondSection", 
data () {
    return {
            firstItem,
            secondItem,
            thirdItem,
            fourthItem,
            fifthItem,
            sixthItem,
    }
}  
}
</script>
<style lang="scss">
.second-section {
    padding: 0 50px 140px;
    &__title {
        @include text($H300, 400, $dark-text-color !important);
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
        padding: 40px;
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
            height: 2px;
            right: 30px;
            bottom: 37px;
            transition: transform 0.5s;
        }
        &:hover {
            color: $rating-star-color;
            text-decoration: none;
            &::before {
            content: "";
            background-color: $light-color;
            position: absolute;
            width: 42px;
            height: 2px;
            right: 30px;
            bottom: 37px;
            transform: translateX(-137%);
        }
    }
}
&__img {
    transition: all 0.7s ease;
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
</style>