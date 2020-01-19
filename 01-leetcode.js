/**
 * leetcode 
 * 难度: base
 * 题意: 将 arr 数组中元素负数放在左边，正数放在右边，且不能使用改变 arr 数组的操作
 * 分析: 
 *      1. j 记录正数的索引位置
 *      2. 遍历数组，当 arr[i] < 0 时，交换位置
 *      3. 遍历结束，得到正确的数组 
 */

let arr = [2, -5, 3, -8, -9, 10, -56] 

let j = 0
for(let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    if (i !== j) {
      // 交换 i 和 j 的值
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    j++
  }
}

console.log(arr)