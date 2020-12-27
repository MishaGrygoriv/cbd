<template>
   <div class="tabs">
              <ul class="tabs__list">
                <li class="tabs__item" v-for="(tab,idx) in tabs" :key="idx" :class="{ 'is-active': tab.isActive }">
                    <a class="tabs__link" :href="tab.href" @click.prevent="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
                <slot></slot>
            </div>
</template>
<script>

export default {
  name: 'TheTabs',
data() {
        return {tabs: [] };
    },
    
    created() {
        
        this.tabs = this.$children;
        
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>
<style lang="scss">
.tabs {
    @include flex(center, stretch, column);
    &__list {
        display: flex;
        margin-bottom: 80px;
        padding: 0 0 0 83px;
        position: relative;
        &::after {
            content: "";
            background-color: $shop-card-border-color;
            position: absolute;
            // width: 970px;
            width: 370px;
            height: 2px;
            bottom: 0;
            z-index: 1;
            @media screen and (min-width: 576px) {
        width: 470px;
    }
    @media screen and (min-width: 768px) {
        width: 570px;
    }
    @media screen and (min-width: 1024px) {
        width: 870px;
    }
    @media screen and (min-width: 1280px) {
        width: 970px;
    }
        }
    }
    &__item {
            margin-right: 100px;
            &:last-child {
                margin-right: 0;
            }
    }
    &__link {
        @include text($H300, 400, $dark-text-color);
        letter-spacing: 6px;
        text-transform: uppercase;
        padding-bottom: 10px;
        &:hover {
            border-bottom: 2px solid $dark-text-color;
        }
    }
}
.is-active {
    padding-bottom: 10px;
    border-bottom: 2px solid $dark-text-color;
    z-index: 2;
}
</style>