
var isValid = function(s) {
    var a = []
    for(var i = 0; i<s.length; i++){
        if(s[i] == '('){
            a.push(')')
        }else if(s[i] == '['){
            a.push(']')
        }else if(s[i] == '{'){
            a.push('}')
        }else if(a.pop() !== s[i]){
            return false
        }
    }
    console.log(a)
    return !a.length
};