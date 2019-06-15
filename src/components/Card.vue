<template>
  <section class="card" :class="{ 'card--unfocused': navToggled }">
    <div class="card__image">
      <img src="../assets/photo.jpg" alt="Photo of Phil Mayne">
    </div>
    <div class="card__title">
      <h1>{{ cardInfo.title }}</h1>
      <p v-html="cardInfo.subTitle"></p>
      <hr>
    </div>
    <div class="card__body">
      <div class="card__text" v-html="cardInfo.body"></div>
      <div class="card__body-image">
        <img
          src="https://images.pexels.com/photos/1391374/pexels-photo-1391374.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940"
        >
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      cardInfo: Object,
      navToggled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss">
  @import "../framework/framework.scss";
  .card {
    height: 100%;
    width: 100%;
    max-width: 400px;
    margin: auto;
    border-radius: 5px;
    margin-top: 0;
    position: relative;
    transition: all 0.5s ease;

    @media screen and (min-width: $tablet) {
      margin: 0;
      max-width: 800px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 150px;
      width: 5px;
      background-color: $yellow;
      top: -170px;
      left: 52px;
    }

    &--focused {
      display: block;
    }

    &--unfocused {
      margin-top: 50px;
    }

    &__image {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: absolute;
      left: 20px;
      top: -30px;
      border: 5px solid $white;
      z-index: 2;

      img {
        width: 80px;
      }
    }

    &__title {
      padding: 50px 20px 20px 20px;
      color: $white;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: lighten($darkBlue, 5%);
      background-image: url("https://images.pexels.com/photos/1391374/pexels-photo-1391374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
      background-size: cover;
      position: relative;
      z-index: 1;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);

        @media screen and (min-width: $tablet) {
          display: none;
        }
      }

      @media screen and (min-width: $tablet) {
        background-image: none;
        background-color: $white;
        border-top-right-radius: 0;
        color: $grey;
        max-width: 400px;
        padding: 50px 20px 0 20px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
      }

      hr {
        display: none;

        @media screen and (min-width: $tablet) {
          display: block;
          max-width: 50px;
          margin: 15px 0 0 0;
          opacity: 1;
          border-color: $yellow;
          border-style: solid;
        }
      }

      h1,
      p {
        margin: 0;
        position: relative;
        z-index: 2;
      }
      h1 {
        font-weight: 500;
      }
      p {
        font-weight: 200;
        font-size: 0.9rem;
      }
    }

    &__body {
      background-color: $white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 20px;

      @media screen and (min-width: $tablet) {
        padding: 0;
        background-color: $transparent;
      }

      &-image {
        display: none;
        @media screen and (min-width: $tablet) {
          display: block;
          max-width: 400px;
          max-height: 330px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow: hidden;
          position: absolute;
          right: 0;
          top: 0;

          img {
            max-width: 400px;
          }
        }
      }
    }

    &__text {
      padding: 0;
      line-height: 1.8rem;

      @media screen and (min-width: $tablet) {
        background-color: $white;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 20px;
        padding-right: 30px;
        max-width: 400px;
        position: relative;
        font-size: 0.9rem;
        z-index: 1;
      }

      strong {
        + p {
          margin-top: 0;
        }
      }

      a {
        color: $grey;
        font-weight: 400;
        text-decoration: none;
        position: relative;
        display: inline-block;
        padding: 0 5px;
        background-color: lighten($yellow, 20%);
        &:hover {
          background-color: lighten($yellow, 5%);
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background-color: $yellow;
        }
      }
    }
  }
</style>