<template>
    <div>{{state}}</div>
    <button @click="myFn">readonly点击</button>
</template>
<script>
import {readonly} from 'vue'
export default {
    setup(){
                    /**readonly */
         /** 创建的是一个只读数据不能修改*/
         /**与const区别，不只是赋值不能改，子级所有属性都不能改 */
                    /**isReadonly */
        /**判断是否为readonly */
                    /**shallowReadonly */
        /**只有第一层是只读，子级不是 */
        let state =readonly({name:'xx',attr:{age:18}});
        function myFn(){
            state.name = 'yy';
            state.attr.age =20;
        }
        return{state,myFn}
    }
}
</script>