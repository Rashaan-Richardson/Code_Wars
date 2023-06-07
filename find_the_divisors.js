function divisors(integer) {
    res = []
    for (i = 2; i < (integer/2)+1; i++){
        integer % i ==0 ? res.push(i) : 0
    }
    return res.length == 0 ? `${integer} is prime`: res
    };