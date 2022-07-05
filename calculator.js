let display = document.getElementById("display");
function view(num){
    display.value += num;

}
function equal(){
    try{
        display.value = eval(display.value);
    }
    catch(err)
    {
        alert("invalid")
    }
}
function erase(){
    display.value = "";
}
function del(){
    display.value = display.value.slice(0, -1)
}