<template>
  <div>
    <ul>
      <li v-for="(item,i) in arr" :key="item.name" @click="remArr(i)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
      /*toRaw */
//ref，reative会在每次修改数据都会更新视图
//reative创建的数据可以通过toRaw()方法返回包装之前的原始数据，修改原始数据不会更新视图
//ref创建的数据也可以通过toRow()方法返回包装前原始数据，但参数必须加上.value
      /*markRaw */
//markRow(obj)通过这个方法使obj永远不会被追踪，即使包装成了响应式数据
import {reactive,isReactive,watch} from 'vue'
export default {
    name:'reactive',
    setup(){
        let {arr,remArr} = useRemArr();
        watch(arr,()=>{
            // console.log(arr,1212)
        })
        return{arr,remArr}
    },

}
function useRemArr(){
    //reactive本质是将传入的数据包装成一个Proxy对象
    //必须传入一个（json、arr）类型的值，也就是对象、数组
    //如果传递的是date对象，修改对象时无法更新视图，需要重新赋值
    let arr = reactive(
    [{
        id:1,
        name:'张三'
    },{
        id:2,
        name:'王五'
    },{
        id:3,
        name:'李四'
    }])
    function remArr(id){
        // arr = arr.filter(v=>v.id!==id);//此种从新赋值方式不会更新视图
        console.log(isReactive(arr),'isReactive');//isReactive判断是否为reactive类型
        arr.splice(id,1);
        console.log(arr,id,1515);
    }
    return {arr,remArr}
}
</script>