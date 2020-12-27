<template>
    <div class="main-layout">
    <the-header/>
<div class="main-content">
<first-section/>
<second-section/>
<third-section/>
<fourth-section/>
</div>
    <the-footer/>
    </div>
</template>
<script>
import FirstSection from '../sections/FirstSection';
import FourthSection from '../sections/FourthSection'
import SecondSection from '../sections/SecondSection';
import TheHeader from '../sections/TheHeader'
import ThirdSection from '../sections/ThirdSection';
import TheFooter from '../sections/TheFooter';

    export default {
name: 'MainLayout',
components: {
TheHeader,
FirstSection,
SecondSection,
ThirdSection,
FourthSection,
TheFooter,
},
    };
</script>
<style lang="scss">

</style>