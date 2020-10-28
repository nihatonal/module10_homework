/// 3.1
var btn_Task_3 = document.getElementById("task-3");

btn_Task_3.addEventListener('click', button => {
    let number = prompt("Write a number")
    let result = parseInt(number);
    if (isNaN(result)) {
      alert("Упс, кажется, вы ошиблись");
    } else if (result % 2 == 0) {
      document.getElementById( "task-10-3-1-result").innerHTML= "чётное";
      document.getElementById( "task-10-3-1-result").style.backgroundColor = "orangered";
    } else {
        document.getElementById( "task-10-3-1-result").innerHTML= "нечётное";
        document.getElementById( "task-10-3-1-result").style.backgroundColor = "paleturquoise"
    }
})

// 3.2
var btn_Task_3 = document.getElementById("task-3.2");

btn_Task_3.addEventListener('click', button => {

let x = "hello";
let y = typeof(x);
if (y ==="number") {
    alert(x+" — число");
} else if (y ==="string") {
    alert(x + " — строке ");
} else if (y ==="boolean") {
    alert(x + " — логическому");
}else {
    alert("Тип"+ x + " не определён");
}
})

//4.3

var btn_Task_3 = document.getElementById("task-4.3");

btn_Task_3.addEventListener('click', button => {
var inputVal = document.getElementById("myInput").value;
var reverseStr = inputVal.split("").reverse().join("");
alert(reverseStr)
console.log(reverseStr);

})

// 4.4
var btn_Task_3 = document.getElementById("task-4.4");

btn_Task_3.addEventListener('click', button => {
    var num = Math.floor(Math.random() * 100);
    document.getElementById( "resultNumber").innerHTML= num;
    console.log(num);
})

//5.5
var btn_Task_3 = document.getElementById("task-5.5");
items = [];
btn_Task_3.addEventListener('click', button => {
    
    var inputVal = document.getElementById("myInputArray").value;
    document.getElementById("myInputArray").value = ""
    items.push(inputVal)
    var lengthItems = items.length;
    console.log(items)
    console.log("length of array: " +lengthItems);
    
    items.forEach((element) => {
        console.log(element);
    });
    document.getElementById("length").innerHTML= "<span>Length of Array:</span> " + lengthItems;
    document.getElementById("items").innerHTML = "<span>Your Array:</span> { "+ items+ " }";
    
})
var btn_Clear = document.getElementById("Clear");
   
btn_Clear.addEventListener('click', button => {
    document.getElementById("length").innerHTML= "<span>Length of Array:</span> ";
    document.getElementById("items").innerHTML = "<span>Your Array:</span> { }";
    document.getElementById("myInputArray").value = "";
    items = [];
})

//5.6
var btn_Task_3 = document.getElementById("task-5.6");
items2 = [];

btn_Task_3.addEventListener('click', button => {
    var inputVal = document.getElementById("myInputArray2").value;
    document.getElementById("myInputArray2").value = ""
    items2.push(inputVal)
    document.getElementById("items2").innerHTML = "<span>Your Array:</span> { "+ items2+ " }";
})

var btn_Clear2 = document.getElementById("Clear5.6");  
btn_Clear2.addEventListener('click', button => {
    document.getElementById("items2").innerHTML = "<span>Your Array:</span> { }";
    document.getElementById("myInputArray2").value = "";
    items2 = [];
})
var btn_Check = document.getElementById("check"); 
btn_Check.addEventListener('click', button => {
const ifUniformArray = items2.every(function (uniformArrayElement) {
    return uniformArrayElement === items2[0];
});
alert(ifUniformArray) 
})

// 6.7
var btn_Task_3 = document.getElementById("task-6.7");
items3 = [];

btn_Task_3.addEventListener('click', button => {
    var inputVal = document.getElementById("myInputArray3").value;
    document.getElementById("myInputArray3").value = ""
    items3.push(inputVal)
    document.getElementById("items3").innerHTML = "<span>Your Array:</span> { "+ items3+ " }";
})

var btn_Clear2 = document.getElementById("Clear6.7");  
btn_Clear2.addEventListener('click', button => {
    document.getElementById("items3").innerHTML = "<span>Your Array:</span> { }";
    document.getElementById("myInputArray3").value = "";
    items3 = [];
})
var btn_Check = document.getElementById("check2"); 


btn_Check.addEventListener('click', button => {
let totalOdd = 0;
let totalEven = 0;
let totalZero = 0;
    for (let i = 0; i < items3.length; i++) {
        if (!isNaN(items3[i]) && typeof(items3[i]) !== "boolean") {
          if (items3[i] == 0) {
            totalZero++;
          } else if (items3[i] % 2 == 0) {
            totalEven++;
          } else {
            totalOdd++;
          }
        }
      }
var message = "Total Zero: " +totalZero+ " \nTotal even: "+totalEven+ " \nTotal odd: "+totalOdd;
alert(message)

})

// 7.8
var btn_show = document.getElementById("showMap");

btn_show.addEventListener("click", button => {
    let map = new Map();
    let MapDecryption = "";
    map.set("Sun", "Holiday");
    map.set("Monday", "Work");
    map.set(false, 0);
    map.set(true, 1);
    map.set([0, 1], [2, 3]);
    MapKeys = Array.from(map.keys());
    MapKeys.forEach((key) => {
        MapDecryption += `<span>Key — </span> ${key} <span>Value — </span> ${map.get(key)} <br> `;
    });
    document.getElementById("mapResult").innerHTML = MapDecryption;
    
})

