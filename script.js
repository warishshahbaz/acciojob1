let res1 ;
let res2 ;
let res3 ;

async function apiOne(callback){
    try {
        let res =await fetch("https://dummyjson.com/posts");
        res1 = await res.json();
        callback(apiThree); // call 2
    } catch (error) {
        console.log(error)
    }
}
async function apiTwo(callback){
    try {
        let res =await fetch("https://dummyjson.com/products");
        res2 = await res.json();
        callback()
        console.log('2')
    } catch (error) {
        console.log(error)
    }
}
async function apiThree(){
    try {
        let res =await fetch("https://dummyjson.com/todos");
        res3 = await res.json();
        console.log('3')
    } catch (error) {
        console.log(error)
    }
}
function handleSubmit(){
    console.log('hello')
    apiOne(apiTwo)
}

