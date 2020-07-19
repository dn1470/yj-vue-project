<template>
    <div id="babies">
        <ul>
            <li v-for="baby in babies" :key="baby.show" @click="baby.show = !baby.show">
                <h2>{{ baby.name }}</h2>
                <h3 v-show="baby.show">{{ baby.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: {
      babies: {
          type: Array
      }
  },
  data(){
    return{
      
    }
  }
  
}
</script>

<style scoped>
  #babies {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    }
    li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    }
</style>
