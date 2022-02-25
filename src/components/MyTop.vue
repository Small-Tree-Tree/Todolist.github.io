<template>
      <div class="top-wrapper">
        <input type="text" placeholder="请输入需要添加的任务" @keyup.enter="addPlan" v-model="val">
    </div> 
</template>

<script>
    // 导入nanoid，这是个随机生成不重复值的包
    import { nanoid } from "nanoid"
    export default {
        name:"Top",
        data(){
            return{
                val:""
            }
        },
        methods:{
            addPlan(){
                if(this.val.trim())
                {   
                    const wrapper = {id:nanoid(),name:this.val,complete:false}
                    this.$emit("addTodo",wrapper)
                    this.val = ""
                }
            }
        },
    }
</script>

/* 
    scoped表示该样式为该组件的样式，避免了类名冲突问题
    - 但是发现父子组件是没有办法避免的，因为子组件会得到
    父组件的类名所以没有办法解决类名冲突问题.
    - 该属性如果给App使用那就变成只能App所有的样式给他自己使用
    造成样式出现问题，所以并不适合使用
 */
<style scoped>
    .top-wrapper{
        width: 550px;
        height: 50px;
        margin: 0 auto;
    }
    .top-wrapper input{
        width: 550px;
        height: 30px;
        font-size: 18px;
        outline: none;
        border: 1px solid black;
        padding-left: 8px;
        box-sizing: border-box;
    }
    .top-wrapper input:focus{
        border: 1px solid rgb(75, 75, 75);
        box-shadow: 0 0 4px rgb(75,75,75);
    }
</style>