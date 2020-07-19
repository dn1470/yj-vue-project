<template>
  <div id="app">
   <app-header v-bind:title="title" @changeTitle="updateTitle($event)"></app-header>
   <yj-project v-bind:babies="babies"></yj-project>
   <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import YJproject from './components/YJproject'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'yj-project': YJproject
  },
  data(){
    return{
       babies:[
           {name: 'YJ', speciality: 'Boss', show: false},
           {name: 'Hamish', speciality: 'Farting', show: false},
           {name: 'QnQn', speciality: 'Cat punch', show: false},
           {name: 'Heachi Girl', speciality: 'Girl Boss', show: false},
           {name: 'Woofie', speciality: 'Barking at nothing', show: false},
           {name: 'Chrissy', speciality: 'Cuddling', show: false}
       ],
       title: 'First Vue Project'
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }
  }
  
}
</script>

<style>

</style>
