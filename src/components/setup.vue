<template>
    <div>{{count}}</div>
    <button @click="changeCount">点击</button>
</template>
<script>
import {ref} from 'vue'
export default {
    name:'setup',
    //setup在beforcreate和created之间执行的
    // beforeCreate
    // setup  ---此时无法使用data和methods，意味着this为undefined
    // created
    //如果给setup函数加上async异步后，页面数据就没有了
    setup(){//composition组合api
        let count = ref(0);//定义了一个变量，变量改变后vue会自动更新
        //ref注意点：
        //只能监听普通类型数据
        //变量,函数想要在外面使用必须通过return出去
        function changeCount(){
            count.value++;//只能通过.value获取ref中的值,但页面上=是直接用
        }
        return{count,changeCount}
    }
}
</script>
<style>

</style>