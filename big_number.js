function narcissistic(value) {
    num = 0
    new_val = value.toString().split('')
    for (i = 0; i < new_val.length; i++){
      num += (new_val[i]**new_val.length)
    }
    return num == value ? true : false
  }