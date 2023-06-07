function getMiddle(s)
{
  len = Math.floor(s.length/2)
  for (i = 0; i < s.length; i++){
    s.length % 2 == 0 ? res = (s[len-1] + s[len]) : res = s[len]
  }
  return res
}