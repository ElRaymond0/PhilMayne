<template>
    <div>
        <nav :class="{ 'nav__open': isNavOpen }">
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Experience</a>
                </li>
            </ul>
        </nav>
        <div class="mobNav" :class="{ 'mobNav__open': isNavOpen }" @click="toggleNav">
            <span class="mobNav__elem"></span>
            <span class="mobNav__elem"></span>
            <span class="mobNav__elem"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isNavOpen: false
            }
        },
        methods: {
            toggleNav() {
                this.isNavOpen = !this.isNavOpen;
            }
        }
    }
</script>

<style lang="scss">
    @import '../framework/framework.scss';
    nav {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        background: linear-gradient( #1e1e1f, #19213e);
        height: 0;
        opacity: 0;
        padding: 20px;
        transition: opacity 0.3s cubic-bezier(0, 0.46, 0.01, 0.93);
        @media screen and (min-width: $tablet) {
            height: 70px;
            background: none;
            opacity: 1;
            justify-content: flex-end;
        }
        ul {
            margin: 0;
            padding: 0;
                
            li {
                padding: 0;
                list-style: none;
                text-align: left;
                margin-bottom: -30px;
                font-size: 1.3rem;
                transition: margin-bottom 0.5s ease, opacity 0.8s ease;
                @for $i from 1 through 3 {
                    &:nth-child(#{$i}) { 
                    transition-delay: (0.1s * $i); 
                    }
                }
                @media screen and (min-width: $tablet) {
                    display: inline-block;
                    margin: 0 1rem;
                }

                a {
                    color: $white;
                    text-decoration: none;
                    &:focus {
                        outline: 1px dashed $white;
                        outline-offset: 3px;
                    }
                }
            }
        }
    }

    .nav__open {
        opacity: 0.8;
        height: 100vh;
        transition: opacity 0.3s cubic-bezier(0.93, 0.24, 0.98, 0.85);

        li {
            margin-bottom: 1rem;
            transition: margin-bottom 0.5s ease, opacity 0.8s ease;
            @for $i from 1 through 3 {
                &:nth-child(#{$i}) { 
                transition-delay: (0.1s * $i); 
                }
            }
        }
    }

    .mobNav {
        position: absolute;
        right: 30px;
        top: 0;
        height: 20px;
        width: 30px;
        padding: 20px;
        @media screen and (min-width: $tablet) {
            display: none;
        }
        &__open {
            * {
                transition: all 0.2s ease-in;
            }
            span {
                &:nth-child(1) {
                    transform: rotate(-45deg);
                    margin-top: 10px;
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    transform: rotate(45deg);
                    margin-top: -14px;
                }
            }
        }

        &__elem {
            background-color: $white;
            width: 30px;
            height: 2px;
            display: block;
            margin-bottom: 5px;
            transition: all 0.2s ease-in;
            &:nth-child(1), &:nth-child(3) {
                transform: rotate(0);
            }
            &:nth-child(2) {
                opacity: 1;
            }
        }
    }
</style>
