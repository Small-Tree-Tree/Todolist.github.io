<template>
    <li class="it-wrapper" >
      <input type="checkbox" :checked = planobj.complete @click="negation">
      <span v-show="!planobj.isEdit">{{planobj.name}}</span>

      <input type="text" 
      v-show="planobj.isEdit" 
      :value="planobj.name"
       @blur="cancel(planobj,$event)"
        ref="inp">

      <button class="btn" @click="del">删除</button>
      <button class="btn1" @click="edit(planobj)">编辑</button>
  </li>
</template>

<script>
export default {
    name:"MyItem",
    props:["planobj"],
    methods:{
      negation(){
        this.$bus.$emit("select",this.planobj.id)
      },
      del(){
        if(confirm("确定要删除 "+this.planobj.name +" 任务"))
        {
          this.$bus.$emit("delTodo",this.planobj.id)
        }
      },
      edit(planobj){
        this.$set(planobj,"isEdit",true)
        this.$nextTick(function(){
           this.$refs.inp.focus()
        })
       
      },
      cancel(planobj,e){
        planobj.isEdit = false
        this.$bus.$emit("edit",planobj.id,e.target.value)
      }
    }
}
</script>

<style scoped>
     .it-wrapper{
      list-style: none;
      height: 40px;
      width: 550px;
      line-height: 40px;
      padding-left: 12px;
      border: 1px solid #bbb;
      border-bottom: none;
      box-sizing: border-box;
      position: relative;
    }
    .it-wrapper:hover
    {
      background-color:rgba(187, 187, 187, 0.301) ;
    }
    .it-wrapper:hover .btn,.it-wrapper:hover .btn1
    {
      display: block;
    }  
    .it-wrapper span{
      padding-left: 8px;
      font-size: 16px;
    }
    .btn,.btn1{
      border: none;
      width: 60px;
      height: 30px;
      color: aliceblue;
      border-radius: 5px;
      position: absolute;
      outline: none;
      background-color: #f04b4b;
      top: 50%;
      right:3px;
      transform: translateY(-50%);
      display: none;
    }
    .btn:hover{
      background-color: #cc4040;  
    }
    .btn1:hover{
       background-color: rgb(43, 173, 224);
    }
    .btn1{
      background-color: rgb(41, 194, 255);
      right: 75px;
    }

</style>