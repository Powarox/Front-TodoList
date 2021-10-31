<template>
    <div class="slidebar">
        <div class="menu">
            <input type="text" placeholder="Ajouter une liste" v-model="new_list" v-on:keyup.enter="add_list">
        </div>

        <div class="list_todo" v-for="list in listTodos" v-bind:key="list.id">
            <label>{{ list.name }}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slidebar",
        data() {
            return {
                listTodos: [
                    { id: 1, name: 'Ma journée' },
                    { id: 2, name: 'Mes Objectifs' }
                ]
            }
        },
        methods: {
            add_list() {
                if(this.new_list !== undefined && this.new_list.replace(/\s+/g, '') !== ""){
                    this.listTodos.push({
                        id: this.listTodos.lenght,
                        name: this.new_list,
                    })
                }
                this.new_list = '';
            }
        }
    }
</script>

<style lang="css" scoped>
    .slidebar {
        width: 200px;
        background: #CCC;
    }
</style>
