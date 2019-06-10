<template>
  <div class="app__container">
    <span class="app__background"></span>
    <header>
      <Nav @setCardInfo="setInfo($event)" @navToggled="navState = $event"/>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <Card
          :cardInfo="cardInfo"
          :navToggled="navState"
          :key="0"
          v-if="cardInfo.title === 'Phil Mayne'"
        />
        <Card
          :cardInfo="cardInfo"
          :navToggled="navState"
          :key="1"
          v-if="cardInfo.title === 'Skills'"
        />
        <Card
          :cardInfo="cardInfo"
          :navToggled="navState"
          :key="2"
          v-if="cardInfo.title === 'Experience'"
        />
      </transition>
    </main>
  </div>
</template>

<script>
  import Nav from "./components/Nav.vue";
  import Card from "./components/Card.vue";
  import axios from "axios";
  export default {
    components: {
      Nav,
      Card
    },
    computed: {
      dataUrl() {
        return process.env.NODE_ENV === "production" ? "/PhilMayne/" : "/";
      }
    },
    data() {
      return {
        cardInfo: {
          title: "Phil Mayne",
          subTitle: "CV",
          body: ""
        },
        about: {},
        skills: {},
        experience: {},
        navState: false
      };
    },
    methods: {
      filterInfo(variable) {
        Object.keys(variable).forEach(
          info => (this.cardInfo[info] = variable[info])
        );
      },
      setInfo(data) {
        switch (data) {
          case "About":
            this.filterInfo(this.about);
            break;
          case "Skills":
            this.filterInfo(this.skills);
            break;
          case "Experience":
            this.filterInfo(this.experience);
            break;
          default:
            this.filterInfo(this.about);
        }
      }
    },
    created() {
      axios.get(`${this.dataUrl}data.json`).then(response => {
        this.about = response.data.about;
        this.skills = response.data.skills;
        this.experience = response.data.experience;
        Object.keys(this.about).forEach(
          info => (this.cardInfo[info] = this.about[info])
        );
      });
    }
  };
</script>

<style lang="scss">
  @import "./framework/framework.scss";

  * {
    box-sizing: border-box;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
    div,
    &::before {
      margin-top: 0;
    }
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    div,
    &::before {
      margin-top: -10px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.06, 0.38, 0.25, 1);
    div,
    &::before {
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
      background-color: $darkBrown;
      height: 400px;
      position: absolute;
      top: -40px;
      left: -20px;
      right: -20px;
      transform: rotate(-5deg);

      @media screen and (min-width: $tablet) {
        height: 300px;
        margin-top: -60px;
      }
    }
  }

  body {
    font-family: "Open Sans", sans-serif;
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

    @media screen and (min-width: $desktop) {
      max-width: 800px;
      margin: 20px auto;
    }
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