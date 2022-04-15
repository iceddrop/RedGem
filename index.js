function guest(){
    document.getElementById("underline-1").style.visibility = "visible";
    document.getElementById("underline-2").style.visibility = "hidden";
    document.getElementById("staff-form").style.display = "none";
    document.getElementById("staff").style.opacity = "75%";
    document.getElementById("visitor").style.opacity = "100%";
}
function staff(){
    document.getElementById("underline-1").style.visibility = "hidden";
    document.getElementById("underline-2").style.visibility = "visible";
    document.getElementById("staff-form").style.display = "block";
    document.getElementById("staff").style.opacity = "100%";
    document.getElementById("visitor").style.opacity = "75%";
}