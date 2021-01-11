<template>
   <div class="tabs">
              <ul class="tabs__list">
                <li class="tabs__item" v-for="(tab,item) in tabs" :key="item" :class="{ 'is-active': tab.isActive }">
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
                tab.isActive = (tab.name === selectedTab.name);
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
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        margin-bottom: 80px;
        padding: 0;
        position: relative;
        @media screen and (min-width: 576px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0;
      }
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0;
      }
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: flex-start;
        align-items: initial;
        flex-direction: row;
        padding: 0 0 0 83px;
      }
      @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: flex-start;
        align-items: initial;
        flex-direction: row;
        padding: 0 0 0 83px;
      }
        &::after {
            content: "";
            background-color: $shop-card-border-color;
            position: absolute;
            width: 370px;
            height: 0px;
            bottom: 0;
            z-index: 1;
            @media screen and (min-width: 576px) {
        width: 470px;
        height: 0px;
    }
    @media screen and (min-width: 768px) {
        width: 570px;
        height: 2px;
    }
    @media screen and (min-width: 1024px) {
        width: 870px;
        height: 2px;
    }
    @media screen and (min-width: 1280px) {
        width: 970px;
        height: 2px;
    }
        }
    }
    &__item {
            margin-right: 0;
            margin-bottom: 30px;
            &:last-child {
                margin-right: 0;
            }
            @media screen and (min-width: 576px) {
        margin-right: 0px;
        margin-bottom: 30px;
            &:last-child {
                margin-right: 0;
            }
    }
    @media screen and (min-width: 768px) {
        margin-right: 0px;
        margin-bottom: 30px;
            &:last-child {
                margin-right: 0;
            }
    }
    @media screen and (min-width: 1024px) {
        margin-right: 70px;
        margin-bottom: 0px;
            &:last-child {
                margin-right: 0;
            }
    }
    @media screen and (min-width: 1280px) {
        margin-right: 100px;
        margin-bottom: 0px;
            &:last-child {
                margin-right: 0;
            }
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
    padding-bottom: 0px;
    border-bottom: none;
    z-index: 2;
    @media screen and (min-width: 576px) {
        border-bottom: none;
        padding-bottom: 0;
    }
    @media screen and (min-width: 768px) {
        border-bottom: none;
        padding-bottom: 0;
    }
    @media screen and (min-width: 1024px) {
        border-bottom: 2px solid $dark-text-color;
        padding-bottom: 10px;
    }
    @media screen and (min-width: 1280px) {
        border-bottom: 2px solid $dark-text-color;
        padding-bottom: 10px;
    }
}
</style>