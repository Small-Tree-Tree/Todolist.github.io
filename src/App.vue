<template>
    <div class="wrapper">
      <MyTop @addTodo="addTodo"/>
      <MyContent :plans="plans" />
      <MyBottom :plans="plans" @selectAll="selectAll" @clearTodo="clearTodo"/>
  </div>
</template>

<script>
    import MyTop from "./components/MyTop.vue"
    import MyBottom from "./components/MyBottom.vue"
    import MyContent from "./components/MyContent.vue"
    export default {
        name:"App",
        components:{MyTop,MyBottom,MyContent},
        data(){
            return{
                // []保证在没有值的时候可以读到length的值为0
                plans:JSON.parse(localStorage.getItem("plan")) || []
            }
        },
        watch:{
            plans:{
                handler(val){
                    localStorage.setItem("plan",JSON.stringify(val))
                },
                // 开启深层次监视，不然改对象里的属性watch检测不到
                deep:true
            }
        },
        methods:{
            // 添加任务
            addTodo(val){
                this.plans.unshift(val)
            },
            // 获取计划是否执行
            select(id){
                this.plans.filter((ele)=>{
                    if(ele.id === id)
                    return ele.complete = !ele.complete
                })
            },
            // 删除指定计划
            delTodo(id){
                /* 
                    filter返回的是一个全新的数组但是不会破坏原数组
                    所以想要改变就的重新赋值
                */
                this.plans = this.plans.filter((ele)=>{
                    return ele.id !== id
                })
            },
            //全选和全不选
            selectAll(flag){
                this.plans.forEach((ele)=>{
                    ele.complete = flag
                })
            },
            // 清除已经完成的任务
            clearTodo(){
                this.plans = this.plans.filter((ele)=>{
                    return !ele.complete
                })
            },
            //编辑内容
            editData(id,value){
               this.plans.forEach((ele)=>{
                   if(ele.id == id)
                   {
                       ele.name = value
                   }
               })
            }

        },
        mounted(){
            this.$bus.$on("select",this.select)
            this.$bus.$on("delTodo",this.delTodo)
            this.$bus.$on("edit",this.editData)
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .wrapper
    {
        width: 600px;
        outline: 1px solid rgb(133, 133, 133) ;
        border-radius: 10px;
        margin: 100px auto;
        padding-top: 20px;
        box-sizing:border-box;
    }
</style>