<template>
    <footer>
        <div class="social">
            <div class="social__icon">
                <a href="https://instagram.com/el.raymond" title="Phil Mayne's Instagram account" target="_blank">
                    <img src="../assets/instagram-logo.png" alt="Instagram logo"/>
                    Instagram
                </a>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss">
@import "../framework/framework.scss";
    footer {
        background-color: $darkBrown;
        color: $white;
        padding: 30px;
        width: 100%;
    }

    .social { 
        &__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (min-width: $tablet) {
                justify-content: flex-end;
            }
            @media screen and (min-width: $desktop) {
                max-width: 850px;
                margin: auto;
            }

            img {
                height: 1.5rem;
                margin-right: 0.5rem;
            }
        }
        a {
            display: inherit;
            text-decoration: none;
            color: $white;
        }
    }
</style>