<template>
  <div>
    <header>
      <div class="photo__container">
        <img src="./assets/photo.jpg" alt="Photo of Phil Mayne"/>
      </div>
      <Nav/>
    </header>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
  export default {
    components: {
      Nav
    },
    props: {
      title: {
        type: String,
        default: 'Hey'
      }
    }
  }
</script>

<style lang="scss">
  @import "./framework/framework.scss";

  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient($darkBlue, $black);
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    height: 100vh;
  }

  header {
    position: absolute;
    width: 100%;
    height: 70px;
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