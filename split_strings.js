function solution(str){
    res = []
    if (str.length % 2 != 0){
      str += '_'
    }
    for (i = 0; i < str.length; i+=2){
      res.push(str.slice(i,i+2))
    }
    return res
  }