<template>
    <nav>
        <h1 class="title">{{ title }}</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['title'],
  data(){
    return{
   
    }
  },
  methods: {
    
  }
  
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap');

    .title{
        margin: 30px;
        font-weight: normal;
    }
    nav{
        text-align: center;
        font-family: 'Oswald', sans-serif;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        display: inline-block;
        align-items: center;
        padding-top: 20px;
        color: white;
        font-size: 30px;
    }
    nav * {
        display: inline;
    }
    nav ul{
        padding: 0;
    }
    nav li{
        list-style-type: none;
        margin: 20px;
    }
    nav li a{
        text-decoration: none;
    }
    nav li a:visited {
        color: white;
    }
</style>