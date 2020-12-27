<template>
    <div id="about" class="first-section container">
        <div class="first-section__top-col">
            <img class="first-section__border" src="../../assets/first_section_border_img.png" alt="border">
        <h3 class="first-section__title">We are what we are</h3>
        <img src="../../assets/brands.png" alt="brands">
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
import TheTabs from '../tabs/TheTabs'
import TheTab from '../tabs/TheTab'
import WhatIsCbd from '../tabs/details/WhatIsCbd'
import TheBenefits from '../tabs/details/TheBenefits.vue'
import OurDifference from '../tabs/details/OurDifference.vue'

export default {
  name: 'FirstSection',
  components: {
TheTabs,
TheTab,
    WhatIsCbd,
    TheBenefits,
    OurDifference,
}
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
}
&__title {
    @include text($H240, 400, $dark-text-color);
    text-transform: uppercase;
    letter-spacing: 4.8px;
    margin-bottom: 25px;
    margin-top: 0;
}
a {
    text-decoration: none;
    &:hover {
        color: $green-text-color;
    }
}
}
</style>