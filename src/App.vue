<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar :title="title"></Navbar>
    <Blogs></Blogs>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'

export default {
  name: 'App',
  components: {
    Navbar,
    Blogs
  },
  data(){
    return{
      title: 'My simple website'
    }
  },
  methods: {
   
  
  }
}
</script>

<style>

h1{
  text-align: center;
}
</style>
