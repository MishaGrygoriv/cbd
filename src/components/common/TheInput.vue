<template>
    <div class="the-input">
       <form action="#" class="the-input-form" method="get">
            <input type="email" required class="the-input__input" name="email" id="email" placeholder="Email">
            <button type="submit" class="the-input__btn" uk-icon="icon: arrow-right; ratio: 1"></button>
       </form>
</div>
</template>
<script>

    export default {
  name: 'TheInput',
}
</script>
<style lang="scss">
.the-input{
    margin-bottom: 60px;
&__form {
    max-width: 370px;
    width: 100%;
}
&__input {
    padding: 24px 150px 24px 33px;
    border: 1px solid $shop-card-border-color;
    outline: none;
    color: $green-text-color;
    &::placeholder {
        @include text($H60, 300, $green-text-color);
    }
}
&__btn {
    border: 1px solid $shop-card-border-color;
    padding: 22px 35px;
    outline: none;
}
}
</style>