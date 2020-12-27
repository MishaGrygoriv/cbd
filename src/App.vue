<template>
  <div class="app">
<main-layout></main-layout>
  </div>
</template>
<script>
import MainLayout from './components/layout/MainLayout'
 import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
name: 'App',
components: {
  MainLayout,
}  
}
</script>

