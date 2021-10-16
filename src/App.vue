<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

    <div id="app">
        <slidebar/>

        <main>
            <header>
                <section class="title_section">
                    <h1>Ma journée</h1>
                    <h4>{{ time() }}</h4>
                </section>

                <section class="button_section">
                    <button type="button" name="btn_light" v-on:click="light()"><i class="far fa-lightbulb"></i></button>
                    <button type="button" name="btn_more"><i class="fas fa-ellipsis-h"></i></button>
                </section>
            </header>

            <todolist/>
        </main>
    </div>
</template>

<script>
    import Todolist from "./components/Todolist.vue";
    import Slidebar from "./components/SlideBar.vue";

    export default {
        name: 'App',
        components: {
            Todolist,
            Slidebar
        },
        methods: {
            time() {
                const date = (new Date()).toLocaleDateString('fr-fr', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                } );
                return date;
            },
            light() {
                let body = document.querySelector('body');
                let h1 = document.querySelector('h1');
                let h4 = document.querySelector('h4');

                if(this.lightMode !== "dark"){
                    this.lightMode = "dark";
                    h1.style.color = "#333";
                    h4.style.color = "#333";
                    body.style.backgroundColor = "#333";
                }
                else {
                    this.lightMode = "light";
                    h1.style.color = "#FFF";
                    h4.style.color = "#FFF";
                    body.style.backgroundColor = "#FFF";
                }

            }
        },
        data() {
            return {
                lightMode: "light"
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

    #app {
        display: flex;
        justify-content: center;
    }

    main {
        margin: auto;
        width: 500px;
        min-height: 710px;
        background: #6A83D3;
        border-radius: 10px;
    }

    header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        margin: 0;
    }

    header .title_section {
        color: #DDDDDD;
    }

    header .title_section h1, h4 {
        margin: 0;
        text-align: left;
    }

    header .title_section h4 {
        font-size: 13px;
    }

    header .button_section {
        width: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    header .button_section button {
        color: #BBB;
        border: none;
        border-radius: 10%;
        background: #5068B0;
        font-size: 16px;
        padding: 5px 10px;
        margin: 0 5px;
        transition: 0.5s;
        cursor: pointer;
    }

    header .button_section button:hover {
        color: #FE4A49;
    }

    main {
        padding: 20px;
    }

</style>
