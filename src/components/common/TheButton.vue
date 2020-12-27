<template>
    <div class="the-button">
<a href="#" class="the-button__btn">Start Shopping</a>
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
        padding: 20px 100px 20px 20px;
        border: 1px solid $header-btn-color;
        text-transform: uppercase;
        position: relative;
        &::before {
            content: "";
            background-color: $light-color;
            position: absolute;
            width: 45px;
            height: 2px;
            right: 30px;
            transition: transform 0.5s;
        }
        &:hover {
            color: $rating-star-color;
            &::before {
            content: "";
            background-color: $light-color;
            position: absolute;
            width: 45px;
            height: 2px;
            right: 30px;
            transform: translateX(-160%);
        }
        }
    }
    a {
        text-decoration: none;
    }
}
</style>