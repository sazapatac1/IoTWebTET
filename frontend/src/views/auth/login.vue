<template>
    <div class="container mt-50">
        <div class="column is-6 is-offset-3">
            <h3 class="title is-3">
                Sign in to IoT WEB
            </h3>
            <hr>
            <div class="notification is-danger " v-if="error">
                {{error}}
            </div>
            <form action="#" @submit.prevent="login">
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                </div>
                </div>
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
                </div>
                <button type="submit" class="button is-link">Sign in</button>
            </form>

            <div class="mt-10 has-text-centered">
                <p>New to IoT WEB? <router-link to="/register">Create an account</router-link></p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Login',
    data (){
        return{
            email: '',
            password: '',
            error: ''
        }
    }
}
</script>