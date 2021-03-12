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
import {reactive,watch} from 'vue'
export default {
    name:'reactive',
    setup(){
        let {arr,remArr} = useRemArr();
        watch(arr,()=>{
            console.log(arr,1212)
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
        arr.splice(id,1);
        console.log(arr,id,1515);
    }
    return {arr,remArr}
}
</script>