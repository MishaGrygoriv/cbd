<template>
    <div class="the-button">
<a href="#products" class="the-button__btn">Start Shopping</a>
</div>
</template>
<script>

    export default {
  name: 'TheButton',
}
</script>
<style lang="scss">
.the-button{
    margin-bottom: 30px;
    &__btn {
        @include flex(center, center);
        @include text($H200, 400, $light-color);
        padding: 10px 50px 10px 20px;
        border: 1px solid $header-btn-color;
        text-transform: uppercase;
        position: relative;
        transition: all 0.2s ease;
        @media screen and (min-width: 576px) {
        padding: 10px 70px 10px 20px;
      }
      @media screen and (min-width: 768px) {
        padding: 20px 80px 20px 20px;
      }
      @media screen and (min-width: 1024px) {
        padding: 20px 100px 20px 20px;
      }
      @media screen and (min-width: 1280px) {
        padding: 20px 100px 20px 20px;
      }
        &::before {
            content: "";
            background-color: $light-color;
            position: absolute;
            width: 0px;
            height: 2px;
            right: 30px;
            transition: transform 0.5s;
            @media screen and (min-width: 576px) {
        width: 0px;
      }
      @media screen and (min-width: 768px) {
        width: 45px;
      }
      @media screen and (min-width: 1024px) {
        width: 45px;
      }
      @media screen and (min-width: 1280px) {
       width: 45px;
      }
        }
        &:hover {
            color: $yellow-text-color;
            border: 1px solid $yellow-text-color;
            box-shadow:0px 0px 0px 1px rgba($yellow-text-color, 0.7) inset;
            &::before {
            content: "";
            background-color: $light-color;
            position: absolute;
            width: 0px;
            height: 2px;
            right: 30px;
            transform: translateX(-160%);
            @media screen and (min-width: 576px) {
        width: 0px;
      }
      @media screen and (min-width: 768px) {
        width: 45px;
      }
      @media screen and (min-width: 1024px) {
        width: 45px;
      }
      @media screen and (min-width: 1280px) {
       width: 45px;
      }
        }
        }
    }
    a {
        text-decoration: none;
    }
}
</style>