const list = [1,2,-1,8]

for(d in list){
    console.log(d)
}

let sum = list.reduce((total,cur) => total + cur , 0)
console.log('ผลรวม = ' , sum)