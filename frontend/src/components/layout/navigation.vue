<template>
    <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
            <img src="https://www.flaticon.es/premium-icon/icons/svg/1698/1698293.svg" width="30" height="100">
            <p class="title ml-5">IoT Web TET</p>
            </router-link>

            <a role="button" class="navbar-burger burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">
                    Home
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link class="button is-primary is-light" to="/register">
                            <strong>Sign up</strong>
                        </router-link>
                        <router-link class="button is-primary" to="/login">
                            Log in
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
</template>
<script>
export default {
    data(){
        return{
            isOpen: false
        }
    },
    methods:{
        toggleMenu(){
            const status = !this.isOpen
            this.isOpen = status
        }
    }
}
</script>