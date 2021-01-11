<template>
  <div class="app">
    <the-header/>
 <first-section/>
<second-section/>
<third-section/>
<fourth-section/>
<the-footer/>
  </div>
</template>
<script>
import TheHeader from './components/sections/TheHeader';
import FirstSection from './components/sections/FirstSection';
import SecondSection from './components/sections/SecondSection';
import ThirdSection from './components/sections/ThirdSection';
import FourthSection from './components/sections/FourthSection';
import TheFooter from './components/sections/TheFooter';

export default {
name: 'App',
components: {
TheHeader,
FirstSection,
SecondSection,
ThirdSection,
FourthSection,
TheFooter,
}  
}
</script>

