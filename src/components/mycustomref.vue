<template>
    <div ref="box">{{count}}</div>
    <button @click="changeCount">customRef点击</button>
</template>
<script>
        /*customRef */
/**用来自定义一个Ref方法 */
/**用处，可以用来请求数据--->因为setup不能设置为异步函数没法使用async */
import {customRef,ref,onMounted} from  'vue'
export default {
    setup(){
        let box =ref(null);//传入一个null，如果在template里定义了ref=box，那么就能通过box.value拿到节点
        let count = myRef(10);
        onMounted(()=>{
            console.log(box.value,'box.value')
        })
        function changeCount(){
            ++count.value
        }
        return{box,count,changeCount}
    }
}
function myRef(value){
    return customRef((track,trigger)=>{
        //track设置数据是响应式的
        //trigger用来更新视图
        return{
            get(){
                track();
                console.log('get',value);
                return value
            },
            set(newValue){
                trigger();
                console.log('set',newValue);
                value = newValue;
            }
        }
    })
}
</script>