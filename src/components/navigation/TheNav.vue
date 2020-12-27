<template>
    <div class="navigation">
<ul class="navigation__nav-list">
    <li class="navigation__item">
        <a href="#" class="navigation__link">HOME</a>
        </li>
    <li class="navigation__item">
        <a href="#about" class="navigation__link">ABOUT</a>
        </li>
    <li class="navigation__item">
        <a href="#products" class="navigation__link">PRODUCTS</a>
        </li>
    <li class="navigation__item">
        <a href="#faqs" class="navigation__link">FAQS</a>
        </li>
    <li class="navigation__item">
        <a href="#contact-us" class="navigation__link">CONTACT US</a>
        </li>
</ul>
    <a href="/" class="navigation__logo">CBD</a>
<ul class="navigation__right-list">
    <li class="navigation__item navigation__item--border-left">
        <a href="#" class="navigation__link">LOGIN</a></li>
    <li class="navigation__item navigation__item--border-left">
        <a href="#" class="navigation__link" uk-icon="search">SEARCH</a></li>
    <li class="navigation__item navigation__item--border-left">
        <a href="#" class="navigation__link">CART (0)</a></li>
</ul>
    </div>
</template>
<script>

export default {
  name: "TheNav",
}
</script>
<style lang="scss">
.navigation {
    z-index: 20;
    width: 100%;
    position: fixed;
    padding: 20px 29px;
    @include flex(space-between, center);
    border-bottom: 1px solid rgba($light-color, 0.4);
    &__nav-list {
        @include flex(flex-start, center, row);
    }
    &__item {
        margin-right: 50px;
        position: relative;
        &--border-left {
            padding: 0 10px;
            &:nth-child(2) {
                padding: 0 20px;
            }
            &::before {
            content: "";
            background-color: rgba($light-color, 0.4);
            position: absolute;
            width: 2px;
                height: 88px;
            top: -33px;
            bottom: 0;
            left: -27px;
        }
        }
        &:last-child {
            margin-right: 0;
        }
    }
    &__link {
        position: relative;
@include text($H60, 400, $light-color);
 transition: all 0.1s linear;
&:hover {
    color: $rating-star-color;
&:before {
	content: "";
	border-bottom: 2px solid rgba($light-color, 0.4);
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
        padding-right: 125px;
        @include text($H300, 400, $light-color);
        transition: all 0.1s linear;
        &:hover {
            color: $rating-star-color;
        }
    }
    &__right-list {
        @include flex(flex-end, center, row);
    }
    ul {
        padding-left: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
}
</style>