<template>
    <div class="con-wrapper">
    <MyItem 
      v-for="planobj in plans" 
      :key="planobj.id" 
      :planobj="planobj"  
      /> 
  </div>
</template>

<script>
import MyItem from "./MyItem.vue"
export default {
    name:"MyContent",
    components:{MyItem},
    props:["plans"]
}
</script>

<style scoped>
    .con-wrapper{
    width: 550px;
    margin: 0 auto;
  }
</style>