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
                        <template v-if="!loggedIn">
                            <router-link class="button is-primary is-light" to="/register">
                                <strong>Sign up</strong>
                            </router-link>
                            <router-link class="button is-primary" to="/login">
                                Log in
                            </router-link>
                        </template>
                        <template v-else>
                            <img class="profile-ico" src="../../assets/profile.png" width="30" height="100">
                            <p class="username-css">Hi, {{nameUser}}</p>
                            <a @click="logout" class="button is-danger">Logout</a>
                        </template>
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
            isOpen: false,
            loggedIn: '',
            nameUser: ''
        }
    },
    methods:{
        toggleMenu(){
            const status = !this.isOpen
            this.isOpen = status
        },
        logout(){
            this.loggedIn = false
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            this.$router.push({name: 'login'})
        },
        getUsername(){
            let id_user = localStorage.getItem('user_id')
            this.$http.get('http://localhost:3000/api/users/'+id_user)
                .then(response => {
                    this.nameUser = response.data.username
                })
        }
    },
    mounted() {
        this.getUsername()
        this.loggedIn = localStorage.getItem('token')
    },
    watch: {
        loggedIn:{
            handler: function() {
                //console.log(this.loggedIn)                                  
            },
        }
    },
}
</script>