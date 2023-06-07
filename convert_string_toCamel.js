function toCamelCase(str){
    res = ''
    for (i = 0; i < str.length; i++){
      (str[i-1] == '_'||str[i-1]=='-') ? res += str[i].toUpperCase():res += str[i]
    }
   return res.replace(/[-_]/g,'')
  }