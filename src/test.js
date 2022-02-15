// let len = 3
// let str = ''
// //null
// console.log('{}')
// let num = 1
// //根据字母顺序从头开始循环
// for(let i = 0;i < len; i++){
//     //获取组合的头字母
//     str = String.fromCharCode((65+i))
//     console.log('{' + str + '}')
//     //获取每个组合后除去头字母后的全部字母
//     for(let j = i+num;j < len;){
//        str = str + ',' + String.fromCharCode((65+j))
//        console.log('{' + str + '}')
//        //去掉上一个组合的第二个字母重新循环
//        if(j == len-1){
//             num++
//             //头字母保持不变
//             str = String.fromCharCode((65+i))
//             j = i+num
//        } else {
//             j++
//        }
//     }
//     //初始化num，保证头字母更改后依旧可以去除第二个字母
//     num = 1
// }

// 全排列
// var arr = ['a', 'b', 'c'];
// // 临时变量，用于输出
// let temp = [];
// function fullArrangement(arr) {
//      for (var i = 0; i < arr.length; i++) {
//           // 插入第i个值
//           temp.push(arr[i]);
//           // 复制数组
//           var copy = arr.slice();
//           // 删除复制数组中的第i个值，用于递归
//           copy.splice(i, 1);
//           if(copy.length == 0) {
//           // 如果复制数组长度为0了，则打印变量
//           result.push([...temp]);
//           }else {
//           // 否则进行递归
//           fullArrangement(copy);
//           }
//           // 递归完了之后删除最后一个元素，保证下一次插入的时候没有上一次的元素
//           temp.pop();
//      }
// }
// fullArrangement(array);



let data = ['a','b','c','d','e'];
 
function getGroup(data, index = 0, group = []) {
	let need_apply = new Array();
	need_apply.push(data[index]);
	for(let i = 0; i < group.length; i++) {
		need_apply.push(group[i] + data[index]);
	}
	group.push.apply(group, need_apply);
 
	if(index + 1 >= data.length) return group;
	else return getGroup(data, index + 1, group);
}
let result = getGroup(data)
console.log(result)

// result.sort();
// console.log('{}')
// result.forEach(element => {
//      console.log('{' + element.split('') +'}')
// });