function randompickerbtn() {
    let clr="#";
    for(let i=0;i<6;i++){
        clr=clr+Math.floor(Math.random()*9);
    }
    document.getElementById("randomPicker").style.backgroundColor=clr;
    document.getElementById("randomValuePara").innerText=clr;
  
}

function hexFindbtn() {
        let hexVal=document.querySelector("#hexInput").value;
        document.querySelector("#color-box").style.backgroundColor=hexVal;

    
}

function RGBFindbtn() {
    let r=document.getElementById("RInput").value;
    let b=document.getElementById ("BInput").value;
    let g=document.getElementById("GInput").value;
    document.querySelector("#rgb-color-box").style.backgroundColor=`rgb(`+r+`,`+g+`,`+b+`)`;
  
}

function RangeSelector() {
    let r=document.getElementById("RrInput").value;
    let b=document.getElementById ("BrInput").value;
    let g=document.getElementById("GrInput").value;
    document.getElementById("range-color-box").style.backgroundColor='rgb('+ r +','+ g +','+ b + ')';
  
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
let hexVal=document.querySelector("input#hexCInp").value;
var red=parseInt(hexVal[0]+hexVal[1],16);
var green=parseInt(hexVal[2]+hexVal[3],16);
var blue=parseInt(hexVal[4]+hexVal[5],16);
document.querySelector("#hexCOut").textContent= ` rgb(${red} , ${green} , ${blue})`;
};

// rgb to hex converter

String.prototype.convertToHex = function () {
    let r=Number(document.querySelector("input#RCInput").value);
    let g=Number(document.querySelector("input#GCInput").value);
    let b=Number(document.querySelector("input#BCInput").value);
    
    document.querySelector("#rgbCOut").textContent="#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
    };
    function ColorToHex(color){
        let hexClr=color.toString(16);
    return hexClr.length==1?"0"+hexClr:hexClr;
    }
    

function hexConvbtn() {
    String.prototype.convertToRGB()
  
}

function rgbConvbtn() {
  String.prototype.convertToHex()
}
