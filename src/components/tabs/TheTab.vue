<template>
    <div class="details-wrapper" v-show="isActive">
        <slot></slot>
        </div>
</template>
<script>

export default {
  name: 'TheTab',
props: {
        name: { required: true },
        selected: { default: false}
    },
    
    data() {
        
        return {
            isActive: false
        };
        
    },
    
    computed: {
        
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        
        this.isActive = this.selected;
        
    }
}
</script>
<style lang="scss">
.details-wrapper {
        padding: 0 20px 0 20px;
        @media screen and (min-width: 576px) {
        padding: 0 20px 0 40px;
      }
      @media screen and (min-width: 768px) {
        padding: 0 20px 0 80px;
      }
      @media screen and (min-width: 1024px) {
       padding: 0 20px 0 80px;
      }
      @media screen and (min-width: 1280px) {
        padding: 0 20px 0 80px;
      }
}
</style>