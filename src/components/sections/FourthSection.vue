<template>
    <div class="fourth-section">
       <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 5000; pause-on-hover: false">

    <ul class="fourth-section__list uk-slideshow-items">
        <li class="fourth-section__item">
            <img class="fourth-section__img" src="../../assets/fourth_section_img_1.png" alt="first" uk-cover>
            <div class="uk-position-center uk-text-center">
                 <ul class="fourth-section__rating-list">
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
               </ul>
                <p class="fourth-section__text" uk-slideshow-parallax="x: 200,-200">I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!</p>
                <span class="fourth-section__author">Mark J.</span>
            </div>
        </li>
        <li class="fourth-section__item">
            <img class="fourth-section__img" src="../../assets/fourth_section_img_2.jpg" alt="second" uk-cover>
           <div class="uk-position-center uk-text-center">
                 <ul class="fourth-section__rating-list">
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
               </ul>
                <p class="fourth-section__text" uk-slideshow-parallax="x: 200,-200">I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!</p>
                <span class="fourth-section__author">Mark J.</span>
            </div>
        </li>
        <li class="fourth-section__item">
            <img class="fourth-section__img" src="../../assets/fourth_section_img_3.jpg" alt="third" uk-cover>
            <div class="uk-position-center uk-text-center">
                 <ul class="fourth-section__rating-list">
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
                   <li class="fourth-section__rating-item" uk-icon="star"></li>
               </ul>
                <p class="fourth-section__text" uk-slideshow-parallax="x: 200,-200">I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!</p>
                <span class="fourth-section__author">Mark J.</span>
            </div>
        </li>
    </ul>

    <a class="fourth-section__arrows fourth-section__arrow-left uk-position-bottom-left" href="#" uk-icon="arrow-left" uk-slideshow-item="previous"></a>
    <a class="fourth-section__arrows fourth-section__arrow-right uk-position-bottom-left" href="#" uk-icon="arrow-right" uk-slideshow-item="next"></a>

</div>
    </div>
</template>
<script>

export default {
name: "FourthSection",    
}
</script>
<style lang="scss">
.fourth-section {
    padding: 0 0 175px;
    &__img {
        display: block;
    margin: 0 auto;
    }
    &__list {
max-height: 800px;
height: 100%;
    }
    &__arrows svg {    
        width: 100%; 
        color: $light-color;
        border-top: 1px solid $main-bg-color;
        border-right: 1px solid $main-bg-color;
        border-left: 1px solid $main-bg-color;
        padding: 15px;
    }
    &__arrow-left {
    left: 0;
    right: 69px;
    bottom: 0;
    margin: auto;
    width: 100%;
    max-width: 70px;
    }
    &__arrow-right {
    left: 69px;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    max-width: 70px;
    }
    &__rating-list {
        padding: 0;
        margin-bottom: 40px;
    }
    &__rating-item {
        width: 16px;
        height: 17px;
        margin-right: 4px;
        &:last-child {
            margin-right: 0;
        }
    }
    &__text {
        @include text($H220, 300, $light-color);
        max-width: 755px;
        width: 100%;
        letter-spacing: 4.4px;
        line-height: 1.82;
        margin-top: 0;
        margin-bottom: 40px;
    }
    &__author {
        @include text($H240, 400, $light-color);
        letter-spacing: 4.8px;
        text-transform: uppercase;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            background-color: $light-color;
            width: 44px;
            height: 2px;
            bottom: 14px;
    left: -62px;
        }
    }
    .uk-icon svg polygon {
    fill: $rating-star-color;
    color: $rating-star-color;
}
    .uk-slideshow-items {
        min-height: 800px !important;
    }
}
</style>