<template>
    <div class="blogs">
        <h2>Blogs</h2>
        <input type="text" v-model="searchTerm">
        <div v-for="todo in filteredTodos" :key="todo.id">
            <h3>{{ todo.title }}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Blogs',
    data() {
        return {
            todos: [],
            searchTerm: ''
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            console.log(response)
            this.todos = response.data
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        
    },
    computed: {
        filteredTodos(){
            return this.todos.filter(todo => {
                return todo.title.match(this.searchTerm)
            })
        }
    }
}
</script>

<style>

</style>