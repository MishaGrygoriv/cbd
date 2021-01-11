<template>
    <div id="modal-shopping-list" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header modal-shop__header">
            <h2 class="modal-shop__header-title uk-modal-title">Shopping List</h2>
        </div>
        <div class="uk-modal-body modal-shop" uk-overflow-auto>
            <ul class="modal-shop__list">
                <li class="modal-shop__item" v-for="(item, idx) in cart" :key="item.id+idx">
                    <img class="modal-shop__img" :src="item.imgSrc" alt="img">
                    <h4 class="modal-shop__title">{{ item.title }}</h4>
                    <span class="modal-shop__price">{{ item.price }}</span>
                    <span class="modal-shop__qty">({{ item.qty }} pcs)</span>
                </li>
            </ul>
        </div>
        <div class="uk-modal-footer modal-shop__footer uk-text-center">
            <button class="modal-shop__btn login__btn--hover-effect uk-button" type="button" @click="$store.dispatch('littleStore/clearCartState')">Clear List</button>
            <button class="modal-shop__btn login__btn--hover-effect uk-button" type="button">Buy Now</button>
        </div>
    </div>
</div>
</template>
<script>
    import { mapState } from "vuex";
    
    export default {
        name: 'ShoppingList',
        computed: {
    ...mapState("littleStore", ['cart']),
  },
    }
</script>
<style lang="scss">
.modal-shop {
    &__header-title {
        color: $main-bg-color;
    }
    &__list {
        padding: 0;
    }
    &__item {
        @include flex(flex-start, center);
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__img {
        max-width: 50px;
        width: 100%;
        max-height: 100px;
        height: 100%;
        margin-right: 30px;
    }
    &__title {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 10px;
    }
    &__price {
        margin-right: 5px;
    }
    &__qty {
        color: $green-text-color;
    }
    &__btn {
        margin-right: 20px;
         &:last-child {
            margin-right: 0;
        }
    }
    &__header,
    &__footer {
        background-color: $green-text-color;
background-image: linear-gradient(315deg, $green-text-color 0%, #05110471 74%);
    }
}
</style>