<template>
    <div id="home">
        <slidebar/>
        <todolist/>
    </div>
</template>

<script>
    import Todolist from "../components/Todolist.vue";
    import Slidebar from "../components/SlideBar.vue";

    export default {
        name: 'Home',
        components: {
            Todolist,
            Slidebar
        },
    }
</script>

<style lang="css" scoped>
    #home {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
</style>
