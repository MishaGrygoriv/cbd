<template>
    <div id="about" class="first-section container">
        <div class="first-section__top-col">
            <img class="first-section__border" src="../../assets/first_section_border_img.png" alt="border">
        <h3 class="first-section__title">We are what we are</h3>
        <img class="first-section__img-brands" src="../../assets/brands.png" alt="brands">
        </div>
        <the-tabs>
            <the-tab name="What is CBD?" :selected="true">
      <what-is-cbd/>
    </the-tab>
    <the-tab name="Benefits">
      <the-benefits/>
    </the-tab>
    <the-tab name="Our Difference">
      <our-difference/>
    </the-tab>
        </the-tabs>
    </div>
</template>
<script>
import TheTabs from '../tabs/TheTabs';
import TheTab from '../tabs/TheTab';
import WhatIsCbd from '../tabs/tab-content/WhatIsCbd';
import TheBenefits from '../tabs/tab-content/TheBenefits';
import OurDifference from '../tabs/tab-content/OurDifference';

export default {
  name: 'FirstSection',
  components: {
    TheTabs,
    TheTab,
    WhatIsCbd,
    TheBenefits,
    OurDifference,
},
}
</script>
<style lang="scss">
.first-section {
    padding: 100px 0;
&__top-col {
    position: relative;
    @include flex(center, center, column);
    margin-bottom: 150px;
}
&__border {
    position: absolute;
    width: 100%;
    max-width: 300px;
    @media screen and (min-width: 576px) {
        width: 100%;
    max-width: 450px;
      }
      @media screen and (min-width: 768px) {
        width: initial;
    max-width: initial;
      }
      @media screen and (min-width: 1024px) {
        width: initial;
    max-width: initial;
      }
      @media screen and (min-width: 1280px) {
        width: initial;
    max-width: initial;
      }
}
&__img-brands {
    width: 100%;
    max-width: 200px;
    @media screen and (min-width: 576px) {
        width: 100%;
    max-width: 350px;
      }
      @media screen and (min-width: 768px) {
        width: initial;
    max-width: initial;
      }
      @media screen and (min-width: 1024px) {
        width: initial;
    max-width: initial;
      }
      @media screen and (min-width: 1280px) {
        width: initial;
    max-width: initial;
      }
}
&__title {
    @include text($H80, 400, $dark-text-color);
    text-transform: uppercase;
    letter-spacing: 4.8px;
    margin-bottom: 25px;
    margin-top: 0;
    @media screen and (min-width: 576px) {
        @include text($H200, 400, $dark-text-color);
      }
      @media screen and (min-width: 768px) {
        @include text($H220, 400, $dark-text-color);
      }
      @media screen and (min-width: 1024px) {
        @include text($H240, 400, $dark-text-color);
      }
      @media screen and (min-width: 1280px) {
        @include text($H240, 400, $dark-text-color);
      }
}
a {
    text-decoration: none;
    &:hover {
        color: $green-text-color;
    }
}
}
</style>