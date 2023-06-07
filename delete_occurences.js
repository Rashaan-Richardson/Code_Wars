function deleteNth(arr,n){
    obj = {}
    res = []
    for (i = 0; i < arr.length; i++){
      if (!(arr[i] in obj) ){
        obj[arr[i]] = 1
        res.push(arr[i])
      } 
      else if (arr[i] in obj && obj[arr[i]] < n){
        obj[arr[i]] += 1
        res.push(arr[i])
      }
  
    }
      return res
  }