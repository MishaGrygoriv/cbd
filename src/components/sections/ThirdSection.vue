<template>
  <div id="faqs" class="third-section container">
    <h2 class="third-section__title">Frequently asked questions</h2>
    <ul class="third-section__accordion-list" uk-accordion>
      <li class="third-section__accordion-item">
        <a class="uk-accordion-title third-section__link" href="#"
          >What is Cannabidiol (CBD)?</a
        >
        <div class="uk-accordion-content">
          <p class="third-section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </li>
      <li class="uk-open third-section__accordion-item">
        <a class="uk-accordion-title third-section__link" href="#"
          >Is Hemp-Derived Cannabidiol (CBD) Legal?</a
        >
        <div class="uk-accordion-content">
          <p class="third-section__text">
            Because CBD from hemp has no psychoactive effects, the purchase,
            sales, or possession of hemp CBD products are completely legal in
            all 50 States.
          </p>
        </div>
      </li>
      <li class="third-section__accordion-item">
        <a class="uk-accordion-title third-section__link" href="#"
          >Are there any negative side effects?</a
        >
        <div class="uk-accordion-content">
          <p class="third-section__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat proident.
          </p>
        </div>
      </li>
      <li class="third-section__accordion-item">
        <a class="uk-accordion-title third-section__link" href="#"
          >Do you offer a return policy?</a
        >
        <div class="uk-accordion-content">
          <p class="third-section__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat proident.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ThirdSection",
};
</script>
<style lang="scss">
.third-section {
  @include flex(center, center, column);
  padding: 0 0 170px;
  &__accordion-list {
    @include flex(flex-start, flex-start, column);
    max-width: 280px;
    width: 100%;
    position: relative;
    @media screen and (min-width: 576px) {
        max-width: 360px;
      }
      @media screen and (min-width: 768px) {
        max-width: 520px;
      }
      @media screen and (min-width: 1024px) {
        max-width: 520px;
      }
      @media screen and (min-width: 1280px) {
        max-width: 520px;
      }
  }
  &__accordion-item {
    position: relative;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      &::before {
        content: "";
        position: absolute;
        background-color: $accordion-border-color;
        width: 340px;
        height: 2px;
        top: -30px;
        left: -30px;
        @media screen and (min-width: 576px) {
        width: 400px;
      }
      @media screen and (min-width: 768px) {
        width: 575px;
      }
      @media screen and (min-width: 1024px) {
        width: 630px;
      }
      @media screen and (min-width: 1280px) {
        width: 630px;
      }
      }
    }
    &::after {
      content: "";
      position: absolute;
      background-color: $accordion-border-color;
      width: 340px;
      height: 2px;
      bottom: -30px;
      left: -30px;
      @media screen and (min-width: 576px) {
        width: 400px;
      }
      @media screen and (min-width: 768px) {
        width: 575px;
      }
      @media screen and (min-width: 1024px) {
        width: 630px;
      }
      @media screen and (min-width: 1280px) {
        width: 630px;
      }
    }
  }
  &__title {
    @include text($H240, 400, $dark-text-color);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 75px;
    text-align: center;
    @media screen and (min-width: 576px) {
        text-align: initial;
        @include text($H300, 400, $dark-text-color);
      }
  }
  &__link {
    @include text($H80, 300, $green-text-color);
    letter-spacing: 5.04px;
  }
  &__text {
    line-height: 2.22;
    letter-spacing: 0.2px;
    @include text($H80, 400, $dark-color);
    padding-top: 50px;
  }
}
.uk-accordion-title::before {
  left: -45px;
  position: absolute;
  float: initial;
}
.uk-accordion-content {
  margin: 0;
}
</style>
