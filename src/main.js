import Vue from "vue"
import App from "./App.vue"
Vue.config.productionTip = false   //阻止vue在生成时自动产生提示
new Vue({
    el: '#app',
    data: {
    },
    beforeCreate(){
        Vue.prototype.$bus = this  //绑定事件总线
    },
    render: h => h(App)
})