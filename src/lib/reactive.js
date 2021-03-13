function reactive(obj){
    console.log(typeof obj)
    if(typeof obj !== 'object'){
        console.warn(`${obj}不是一个object`);
        return
    }else{
        for(let key in obj){
            if(typeof obj[key] === 'object'){
                obj[key] = reactive(obj[key]);
            }
        }
        return new Proxy(obj,{
            get(obj,key){
                Reflect.defineProperty(obj,'isReactive',{
                    writable:false,
                    value:true
                })
                return obj[key]
            },
            set(obj,key,value){
                obj[key]= value;
                console.log('更新视图');
                return true;//用于告诉下一次set，我已经成功set完了
            }
        })
    }
}
function shallowReactive(obj){
    return new Proxy(obj,{
        get(obj,key){
            return obj[key]
        },
        set(obj,key,value){
            obj[key]= value;
            console.log('更新视图');
            return true;//用于告诉下一次set，我已经成功set完了
        }
    })
}
function isReactive(obj){
    return obj.isReactive
}
// let a = {name:'xx',aa:{age:10}};
let a = [{name:'xx',aa:{age:10}}];
let obj = reactive(a);
// obj.name='yy';
// obj.aa.age=12;
obj[0].name='yy';
obj[0].aa.age=12;
console.log(isReactive(obj));