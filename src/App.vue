<template>
  <div id="app">
    <Navbar :title="title"></Navbar>
    <div class="float-container">
      <AllFriends :friends="friends" @delete="deleteFriend"/>
      <OnlineFriends :friends="friends" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'

export default {
  name: 'App',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data(){
    return{
      title: 'Harry Potter',
      friends: [
            { name: 'Harry', online: true},
            { name: 'Ron', online: false},
            { name: 'Hermione', online: true},
            { name: 'Hagrid', online: false},
      ]
    }
  },
  methods: {
   deleteFriend(payload){
     console.log(payload);
     this.friends = this.friends.filter(friend  => {
       return friend.name !== payload.name
     })
   } 
  }
  
}
</script>

<style>
body{
  background-image: url('https://www.oscars.org/sites/oscars/files/akzaban_2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 80px ;
  padding: 30px;
  height: 125vh; 
}

.float-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  height: 75vh;
  position: relative;
}
</style>
