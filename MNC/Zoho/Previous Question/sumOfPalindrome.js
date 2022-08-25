// https://practice.geeksforgeeks.org/problems/sum-palindrome3857/1

const sumOfPalindrome =(num) =>{
    let sum  = +num
    let rev =''
    for(let i =num.length-1; i>=0;i--){
        rev += num[i]
    }
    console.log(sum + +rev)
}
sumOfPalindrome('23')



// not complete accroding to the GG question