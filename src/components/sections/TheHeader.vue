<template>
    <div class="the-header">
        <the-nav/>
        <div class="the-header__col-right container">
    <h1 class="the-header__title">Enhancing Life</h1>
    <span class="the-header__title the-header__title--mb">Excelling in Care</span>
<h3 class="the-header__subtitle">Choose Wisely. Choose CBD.</h3>
<the-button/>
<a href="#products" class="the-header__product-btn" uk-icon="arrow-right">See all products</a>
</div>
    </div>
</template>
<script>
import TheButton from '../common/TheButton.vue'
import TheNav from '../navigation/TheNav.vue'

    export default {
  name: 'TheHeader',
  components: {
    TheNav,
    TheButton,
  }
}
</script>
<style lang="scss">
.the-header{
    min-height: 100vh;
    background: url('../../assets/header_bg_img.png') no-repeat center;
    background-size: cover;
    &__col-right {
        @include flex(flex-end, flex-end, column);
        padding: 200px 100px 100px;
    }
    &__title {
        @include text($H550, 400, $main-bg-color);
        letter-spacing: 9.4px;
        text-transform: uppercase;
        margin: 0;
        &--mb {
            display: inline-block;
            margin-bottom: 20px;
            letter-spacing: 15.4px;
        }
    }

    &__subtitle {
        @include text($H240, 300, $main-bg-color);
        letter-spacing: 6.72px;
        margin-bottom: 56px;
        margin-top: 0;
    }
    &__product-btn {
        @include text($H80, 300, $main-bg-color);
         letter-spacing: 5.04px;
         margin: 0;
         padding-right: 38px;
         position: relative;
         line-height: initial;
         &:hover {
             color: $rating-star-color;
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
}
</style>