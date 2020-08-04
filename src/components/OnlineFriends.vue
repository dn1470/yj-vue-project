<template>
    <div id="online-friends">
        <h2 class="box-title">Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span v-if="friend.online">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'OnlineFriends',
  props: ['friends'],
  data(){
    return{
        
    }
  },
  methods: {
    
  }
  
}
</script>

<style>
#online-friends {
  font-family: 'Open Sans';
  color: #fff;
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
	margin:auto;
}

.box-title{
  margin-top: 0;
}
</style>