<template>
    <div class="details">
        <div class="details__left-col">
        <h3 class="details__title">DIFFERENCE AND HOW 
IT WORKS</h3>
<p class="details__text">
    CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.
</p>
<p class="details__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
</p>
<p class="details__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
</p>
        </div>
        <div class="details__right-col">
            <div class="details__img-wrapper">
                <img :src="imgFifth" alt="img-first" class="details__img">
            </div>
            <div class="details__img-wrapper">
                <img :src="imgSixth" alt="img-second" class="details__img">
            </div>
        </div>
    </div>
</template>
<script>
import imgFifth from "@/assets/first_section_fifth_img.jpg";
import imgSixth from "@/assets/first_section_sixth_img.jpg"

export default {
name: 'WhatIsCbd', 
data() {
        return {
            imgFifth,
            imgSixth,
        };
    }   
}
</script>
<style lang="scss">
.details {
    @include flex(center, center, column);
    text-align: center;
    @media screen and (min-width: 576px) {
        @include flex(center, center, column);
        text-align: center;
      }
      @media screen and (min-width: 768px) {
        @include flex(space-between, center);
        text-align: left;
      }
      @media screen and (min-width: 1024px) {
        @include flex(space-between, center);
        text-align: left;
      }
      @media screen and (min-width: 1280px) {
        @include flex(space-between, center);
        text-align: left;
      }
    &__left-col {
        margin-right: 0px;
        margin-bottom: 50px;
        @media screen and (min-width: 576px) {
        margin-right: 0px;
        margin-bottom: 50px;
      }
      @media screen and (min-width: 768px) {
       margin-right: 195px;
       margin-bottom: 0px;
      }
      @media screen and (min-width: 1024px) {
        margin-right: 195px;
        margin-bottom: 0px;
      }
      @media screen and (min-width: 1280px) {
        margin-right: 195px;
        margin-bottom: 0px;
      }
    }
    &__title {
        @include text($H240, 400, $dark-color);
        letter-spacing: 4.8px;
        max-width: 335px;
        width: 100%;
        margin-bottom: 50px;
        @media screen and (min-width: 375px) {
        max-width: 400px;
      }
        @media screen and (min-width: 576px) {
        max-width: 410px;
      }
      @media screen and (min-width: 768px) {
       max-width: 280px;
      }
      @media screen and (min-width: 1024px) {
        max-width: 280px;
      }
      @media screen and (min-width: 1280px) {
        max-width: 280px;
      }
    }
    &__text {
        @include text($H80, 300, $green-text-color);
        letter-spacing: 0.72px;
        line-height: 2.22;
        margin-bottom: 50px;
        max-width: 409px;
        width: 100%;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>