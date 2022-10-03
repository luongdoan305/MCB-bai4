function switchOnOff($event, index){
    var element = document.getElementsByClassName('switch-wrapper')[index];
    var btn = event.target;
    if(confirm('Are you sure') == true){
        if(btn.innerHTML == "ON")
    {
        btn.innerHTML = "OFF"
        element.classList.remove("bg-success")
        element.classList.add("bg-danger")
        console.log(document.getElementsByClassName("myImage")[index].src);
        document.getElementsByClassName("myImage")[index].src = "/image/tat.png"

    }else{
        btn.innerHTML = "ON"
        element.classList.add("bg-success")
        element.classList.remove("bg-danger")
        document.getElementsByClassName("myImage")[index].src = "/image/bat.png"
    }
    }
}



    // function on() {
    //     document.getElementById("myImage").src= "https://www.pngitem.com/pimgs/m/265-2659843_light-light-bulb-incandescent-light-bulb-hd-png.png"
    // }
    // function off() {
    //     document.getElementById("myImage").src= "https://www.pngitem.com/pimgs/m/433-4330245_bulb-png-image-transparent-background-light-bulb-png.png"
    // }


    // function bat() {
    //     document.getElementById("myImage2").src= "https://www.pngitem.com/pimgs/m/265-2659843_light-light-bulb-incandescent-light-bulb-hd-png.png"
    // }   
    // function tat() {
    //     document.getElementById("myImage2").src= "https://www.pngitem.com/pimgs/m/433-4330245_bulb-png-image-transparent-background-light-bulb-png.png"
    // }








