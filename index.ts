function reverse(s:string):string{
    return s.split("").reverse().join("")
}
function reverseRecurse(s:string):string{
if(!s.includes("(")){
    return s
}
if(s.split("(").length == 2){
let openingIndex = s.indexOf("(")
const closeIndex = s.indexOf(")")
return [
    s.substring(0,openingIndex),
    reverse(s.substring(openingIndex + 1, closeIndex)),
    s.substring(closeIndex+1),
].join("")
}
const lastOpenBracketIndex = s.lastIndexOf('(');
let closingIndex = lastOpenBracketIndex + 1;
while(closingIndex < s.length){
    if(s[closingIndex]==")"){
        break;
    }
    closingIndex++
}

    const prefix = s.substring(0, lastOpenBracketIndex)
    const suffix = s.substring(closingIndex + 1)
    const toReverse = s.substring(lastOpenBracketIndex + 1, closingIndex)
return reverseRecurse((prefix + reverse(toReverse) + suffix))
}

function reverseParentheses(s: string): string {
    return reverseRecurse(s)
};


let result= reverseParentheses("(ed(et(oc))el)")

console.log(result)