<template>
    <div>{{count}}</div>
    <button @click="changeCount">点击</button>
</template>
<script>
//无论是ref还是reactive都是用的递归监听
//shallowRef,shallowReactive是非递归监听，前者只会监听value层，后者只会监听第一层
//前者提供了triggerRef方法去更新视图
               /*toRef */
//toRef(obj,name(属性名))通过这个方法将obj的name属性变成响应式，修改了响应式数据原数据obj的name会影响
//但是通过这种方法创建的ref数据，修改不会更新视图
               /*toRefs */
//toRefs(obj),会遍历将所有属性变成响应式，也是不会更新视图
import {ref,isRef} from 'vue'
export default {
    name:'setup',
    //setup在beforcreate之前执行的
    // setup  意味着没有this，vue里吧this设置为了undefined
    // beforeCreate
    //如果给setup函数加上async异步后，页面数据就没有了
    setup(){//composition组合api
        let count = ref(0);//定义了一个变量，变量改变后vue会自动更新视图
        //ref注意点：
        //为了方便定义一些基本类型的数据而提供的方法
        //本质是转换成reactive({value:0})一样，会被Proxy包成Proxy{value:0}的对象
        //变量,函数想要在外面使用必须通过return出去
        function changeCount(){
            console.log(isRef(count),count,'isRef');//isRef可以判断是否为ref类型数据,原理是调用私有属性__v_isRef的值是否为true
            count.value++;//只能通过.value获取ref中的值,但在template里，vue会判断是否ref类型自动添加value
        }
        return{count,changeCount}
    }
}
</script>
<style>

</style>