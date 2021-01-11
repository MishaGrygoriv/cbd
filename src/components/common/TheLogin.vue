<template>
    <div id="modal-sections" uk-modal>
    <div class="uk-modal-dialog login">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header login__header">
            <h2 class="uk-modal-title login__header-title">Login</h2>
        </div>
        <form id="login" class="login__form" method="get">
            <h3 class="login__title">Email</h3>
            <input type="email" required class="login__input" name="email">
            <h3 class="login__title">Username</h3>
            <input class="login__input" required type="text" minlength="4" maxlength="15" name="username" id="username" autocomplete="off" spellcheck="true">
            <h3 class="login__title">Password</h3>
            <input class="login__input" required type="password" minlength="6" maxlength="12" name="password" id="password" spellcheck="true">
            </form>
        <div class="uk-modal-footer login__footer uk-text-center">
            <button class="login__btn login__btn--hover-effect uk-button uk-modal-close" type="button">Cancel</button>
            <button class="login__btn login__btn--hover-effect uk-button" type="submit" form="login">Sign In</button>
        </div>
    </div>
</div>
</template>
<script>

    export default {
  name: 'TheLogin',
}
</script>
<style lang="scss">
.login {
    &__header-title {
        color: $main-bg-color;
    }
    &__form {
        padding: 20px 50px;
    }
    &__input {
        padding: 10px;
        width: 100%;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__title {
        @include text($H200, 400, $dark-text-color);
        margin-top: 0;
    }
    &__btn {
        margin-right: 20px;
        background-color: $main-bg-color;
        &:last-child {
            margin-right: 0;
        }
    &--hover-effect {
  color: $dark-text-color;
  background-color: $main-bg-color;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
}
    &--hover-effect:hover {
  background-color: $green-text-color;
  color: $main-bg-color;
  box-shadow:0px 0px 0px 4px rgba($main-bg-color, 0.7) inset;
}
    &--hover-effect:after {
  background: #FFF;
  border: 0px solid #000;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .8;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  width: 50px;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);/*easeOutCirc*/
  z-index: 1;
}
    &--hover-effect:hover:after {
  background: #FFF;
  border: 20px solid #000;
  opacity: 0;
  left: 120%;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
}
    }
    &__header, 
    &__footer {
        background-color: $green-text-color;
background-image: linear-gradient(315deg, $green-text-color 0%, #05110471 74%);
    }
}
</style>