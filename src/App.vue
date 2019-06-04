<template>
  <div class="app__container">
    <span class="app__background"></span>
    <header>
      <Nav @setCardInfo="setInfo($event)" @navToggled="navState = $event"/>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <Card :cardInfo="cardInfo"
              :navToggled="navState"
              :key="0"
              v-if="cardInfo.title === 'Phil Mayne'"
              />
        <Card :cardInfo="cardInfo"
              :navToggled="navState"
              :key="1"
              v-if="cardInfo.title === 'Skills'"
              />
        <Card :cardInfo="cardInfo"
              :navToggled="navState"
              :key="2"
              v-if="cardInfo.title === 'Experience'"
              />
      </transition>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Card from './components/Card.vue';
  export default {
    components: {
      Nav,
      Card
    },
    data() {
      return {
        cardInfo: {
          title: 'Phil Mayne',
          subTitle: 'CV',
          body: ''
        },
        navState: false
      }
    },
    methods: {
      setInfo(data) {
        Object.keys(data).forEach((info) => this.cardInfo[info] = data[info])
      }
    }
  }
</script>

<style lang="scss">
  @import "./framework/framework.scss";

  * {
    box-sizing: border-box;
  }
  .fade-leave, .fade-enter-to {  
    opacity: 1;
    div, &::before {
      margin-top: 0;
    }
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    div, &::before {
      margin-top: -10px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.06, 0.38, 0.25, 1);
    div, &::before {
      transition: all 0.5s cubic-bezier(0.06, 0.38, 0.25, 1);
      @for $i from 1 through 3 {
                &:nth-child(#{$i}) { 
                transition-delay: (0.1s * $i); 
                }
            }
    }
  }
  .app {
    &__container {
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }
    &__background {
      background: linear-gradient($darkBlue, $black);
      height: 400px;
      position: absolute;
      top: -40px;
      left: -20px;
      right: -20px;
      transform: rotate(-5deg);

      @media screen and (min-width: $tablet) {
        height: 200px;
      }
    }
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    height: 100vh;
    @media screen and (min-width: $tablet) {
      background-color: $lightGrey;
    }
  }

  main {
    margin: 20px;
  }

  header {
    width: 100%;
    height: 70px;
    position: relative;
  }

  .photo {
    &__container {
      display: none;
      border-radius: 50%;
      overflow: hidden;
      height: 70px;
      width: 70px;
      margin-top: 20px;
      margin-left: 20px;
      text-align: center;
      border: 5px solid $white;
    }
  }
</style>