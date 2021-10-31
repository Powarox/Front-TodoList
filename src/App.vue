<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/Login">Login</router-link>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

        },
        methods: {

        },
        data() {
            return {

            }
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        display: flex;
    }

    #nav a {
        color: #DDD;
        margin: 0 10px;
        padding: 10px;
        background: #6A83D3;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
        border-radius: 5px;

    }
</style>
