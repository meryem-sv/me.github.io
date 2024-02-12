
let p=["ana","jamal","meryem"];
function verifier(lettre){ 
for(let i=0;i<p.length;i++){
    if(p[i].startsWith(lettre)){
       console.log("godbyJsomeone"   +p[i])
    }else{
        console.log("hello someone"  +p[i])
    }
}
}
verifier("j");