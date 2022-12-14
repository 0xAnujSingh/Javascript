function isPrime(n){
    let prime = true
    for(i=2;i<n;i++){
        if(n%i==0){
        prime = false
        break
        }
    }
    return prime 
}
str = ' '
    for(j=2;j<=100;j++){
        if(isPrime(j))
        str+=j+" "
    }    
    console.log(str)