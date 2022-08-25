//https://practice.geeksforgeeks.org/problems/sum-of-primes0042/1

const primeSum =(str) =>{
    let sum =0
    for(let i=0;i<str.length;i++){
        let n = +str[i]
        if(prime(n)){
            sum += n
        }
    }
    console.log(sum)
}
    const prime =(n) =>{
        let count =0
        if(n <=1) return false
        for(let i=2;i<n;i++){
            if(n % i == 0){
                count++
            }
        }
        return count==0
    }

primeSum('333')
primeSum('686')