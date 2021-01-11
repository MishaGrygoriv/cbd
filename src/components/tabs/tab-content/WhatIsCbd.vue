<template>
    <div class="details">
        <div class="details__left-col">
        <h3 class="details__title">WHAT IT IS AND HOW 
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
                <img :src="imgFirst" alt="img-first" class="details__img">
            </div>
            <div class="details__img-wrapper">
                <img :src="imgSecond" alt="img-second" class="details__img">
            </div>
        </div>
    </div>
</template>
<script>
import imgFirst from "@/assets/first_section_first_img.png";
import imgSecond from "@/assets/first_section_second_img.png"

export default {
name: 'WhatIsCbd', 
data() {
        return {
            imgFirst,
            imgSecond,
        };
    }   
}
</script>
<style lang="scss">
.details {
    @include flex(space-between, center);
    &__left-col {
        margin-right: 195px;
    }
    &__title {
        @include text($H240, 400, $dark-color);
        letter-spacing: 4.8px;
        max-width: 280px;
        width: 100%;
        margin-bottom: 50px;
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
    &__img-wrapper {
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>