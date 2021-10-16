<template>
    <div class="elem" v-for="(todo, delkey) in filterTodos" v-bind:key="todo.id">
        <input type="checkbox" v-model="todo.completed">
        <div class="content" :class="{ completed: todo.completed }">
            <label>{{ todo.name }}</label>
        </div>
        <button v-on:click="deleted(delkey)"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="add_elem">
        <!-- <input type="text" placeholder="Ajouter une tâche" v-model="message" v-on:keyup.enter="addTask(message)"> -->
        <input type="text" placeholder="Ajouter une tâche" v-model="message" v-on:keyup.enter="add_todo">
    </div>

    <div class="filter_elem">
        <button v-on:click="filter = 'all'">All</button>
        <button v-on:click="filter = 'todo'">En Cours</button>
        <button v-on:click="filter = 'done'">Terminé</button>
    </div>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Todolist",
        data() {
            return {
                filter: "all",
                message : ""
            }
        },
        methods: {
            add_todo(){
                this.addTask(this.message);
                this.message = "";
            },

            del_todo(){
                this.delTask(this.delKey);
            },

            ...mapActions([
                'addTask'
            ])

            // addTask: function(event) {
            //     if(event !== undefined && event.replace(/\s+/g, '') !== ""){
            //         let key = Object.keys(this.todos).length;
            //         let elem = {
            //             id: key,
            //             name: event,
            //             completed: false,
            //         };
            //         this.todos[key] = elem;
            //     }
            //     this.message = "";
            // }
            // increment() {
            //     this.store.state.compteur = store.state.compteur + 1;
            // }
            // deleted: function(delkey) {
            //     this.todos.splice(delkey, 1);
            // }
        },
        computed: {
            ...mapGetters([
                'getallTodos'
            ]),

            filterTodos(){
                if(this.filter === "todo"){
                    // return this.todos.filter((todo) => !todo.completed);
                    return this.getallTodos.filter((todo) => !todo.completed);
                } else if(this.filter === "done"){
                    // return this.todos.filter((todo) => todo.completed);
                    return this.getallTodos.filter((todo) => todo.completed);
                }
                // return this.todos;
                return this.getallTodos;
            }
        }
        // data() {
        //     return {
        //         filter: "all",
        //         newTodo: "",
        //         todos: [{
        //                 id: 1,
        //                 name: "faire ceci",
        //                 completed: false,
        //             },
        //             {
        //                 id: 2,
        //                 name: "faire cela",
        //                 completed: false,
        //             },
        //             {
        //                 id: 3,
        //                 name: "faire encore ça",
        //                 completed: true,
        //             },
        //         ]
        //     }
            // const getters = {
            //     getCompteur: (state) => {
            //         this.compteur = state.store.length;  //
            //         return compteur;
            //     }
            // }
        // }
    };
</script>


<style media="screen" scoped="true">
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
        position: relative;
        bottom: 10%;
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
