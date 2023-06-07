function isPangram(string){
    //...
    res = true
    newString = string.toLowerCase().replace(/[\s\d!@#$%^&*()\-_=+[\]{};:'"<>,.?/\\|]/g,"")
    sent = new Set(newString)
    console.log(sent = new Set(newString),sent.size)
  return sent.size != 26 ? false : true
  
  }