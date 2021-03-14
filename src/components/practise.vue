<template>
    <div>{{count}}</div>
</template>
<script>
import {ref,reactive,shallowRef,shallowReactive,readonly,customRef,toRaw,toRef,toRefs,watch,onMounted,onUnmounted} from 'vue'
export default {
    setup(){
        let count = ref(0);
        let reac = reactive({name:'张三'});

        return [count,reac]
    }
}
</script>