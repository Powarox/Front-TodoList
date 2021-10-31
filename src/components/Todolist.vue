<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

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

        <div class="elem" v-on:click="check_todo(delkey)" v-for="(todo, delkey) in filterTodos" v-bind:key="todo.id">
            <input type="checkbox" v-model="todo.completed">
            <div class="content" :class="{ completed: todo.completed }">
                <label>{{ todo.name }}</label>
            </div>
            <button v-on:click="del_todo(delkey)"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="add_elem">
            <input type="text" placeholder="Ajouter une tâche" v-model="message" v-on:keyup.enter="add_todo">
        </div>

        <div class="filter_elem">
            <button v-on:click="filter = 'all'">All</button>
            <button v-on:click="filter = 'todo'">En Cours</button>
            <button v-on:click="filter = 'done'">Terminé</button>
        </div>
    </main>

</template>


<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Todolist",
        data() {
            return {
                filter: "all",
                message : "",
                lightMode: "light"
            }
        },
        methods: {
            ...mapActions([
                'addTask', 'delTask', 'checkTask'
            ]),

            add_todo(){
                this.addTask(this.message);
                this.message = "";
            },

            del_todo(delkey){
                this.delTask(delkey);
            },

            check_todo(key){
                this.checkTask(key);
            },

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
        computed: {
            ...mapGetters([
                'getallTodos'
            ]),

            filterTodos(){
                if(this.filter === "todo"){
                    return this.getallTodos.filter((todo) => !todo.completed);
                } else if(this.filter === "done"){
                    return this.getallTodos.filter((todo) => todo.completed);
                }
                return this.getallTodos;
            }
        }
    };
</script>


<style media="screen" scoped="true">
    main {
        /* margin: auto; */
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

    .elem {
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        background: #DDDDDD;
        border-radius: 5px;
        text-align: left;
        padding: 10px;
        margin: 10px;
        align-items: center;
    }

    .elem .content {
        margin: 0;
        overflow: hidden;
        word-wrap: break-word;
    }

    .elem button {
        color: #FE4A49;
        border: none;
        border-radius: 10%;
        background: #DDDDDD;
        font-size: 17px;
        padding: 5px;
        margin: 0 5px;
        transition: 0.5s;
        cursor: pointer;
    }

    .elem button:hover {
        color: #09BCA8;
    }

    .add_elem {
        height: 30px;
        font-size: 20px;
        display: grid;
    }

    .add_elem input[type = "text"] {
        color: #DDD;
        border: none;
        border-radius: 5px;
        background: #5068B0;
        padding: 10px 20px;
        margin: 0 50px;
        outline: none;
        transition: 0.5s;
    }

    .add_elem input[type = "text"]:focus {
        border-color: #5068B0;
        margin: 0 10px;
    }

    ::placeholder {
        color: #DDD;
        font-weight: bold;
    }

    .filter_elem {
        margin-top: 20px;
    }

    .filter_elem button {
        margin: 5px;
    }

    .completed {
        text-decoration: line-through;
    }

</style>
