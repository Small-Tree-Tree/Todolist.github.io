<template>
      <div class="foot-wrapper" v-if="plans.length">
      <input type="checkbox" @click="judge" :checked="plans.length === completes&&completes > 0">
      <span>已完成 {{completes}} / </span>
      <span>全部任务 {{plans.length}}</span>
      <button @click="clearPlan">清除已完成的任务</button>
  </div>
</template>

<script>
export default {
    name:"Bottom",
    props:["plans"],
    computed:{
      completes(){
        /*
            pre表示上一次的返回值
            current表示当前正在处理的元素 
            后面的数字表示起始的pre的值
            数组长度有多长就执行多少次
         */
        return this.plans.reduce((pre,current)=>{
            return pre + (current.complete ? 1 : 0)
        },0)
      }
    },
    methods:{
      judge(e){
          this.$emit("selectAll",e.target.checked)
      },
      clearPlan(){
        if(confirm("确定要删除已完成的任务？"))
        this.$emit("clearTodo")
      }
    }
}
</script>

<style scoped>
     .foot-wrapper
  {
    width: 550px;
    height: 70px;
    margin: 0 auto;
    padding :20px 0 0 4px ;
    box-sizing: border-box;
    border-top: 1px solid #BBBBBB;
    position: relative;
  }
  .foot-wrapper input
  {
    margin-right: 8px;
  }
    button{
      border: none;
      width: 120px;
      height: 40px;
      color: aliceblue;
      border-radius: 5px;
      position: absolute;
      outline: none;
      background-color: #f04b4b;
      top: 50%;
      right:3px;
      transform: translateY(-50%);

    }
    button:hover{
      background-color: #cc4040;  
    }
</style>