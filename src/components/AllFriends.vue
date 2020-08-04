<template>
    <div id="all-friends">
        <h2 class="box-title">All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AllFriends',
  props: ['friends'],
  data(){
    return{
       
    }
  },
  methods: {
    unfriend(name){
        this.$emit('delete', { name })
    }
  }
  
}
</script>

<style>
#all-friends {
  font-family: 'Open Sans';
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
	margin:auto;
}

</style>