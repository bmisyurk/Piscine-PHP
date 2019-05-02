var i = 0;
var f = 0;
circle = document.getElementById('Ballon');
circle.onclick = onclick;

circle.onmousedown = my_function; //нажата
circle.onmouseout = leave;
circle.onmouseup = circle.style.backgroundColor = "rgb("+166+","+173+","+168+")";           //отпущена
circle.onmouseover = nav;
function nav()
{
    circle.style.backgroundColor = "rgb("+166+","+173+","+168+")";
}
function onclick()
{
    circle.style.backgroundColor = 'black';
    f = 1;

}
function leave()
{
    if(f == 0)
        circle.style.backgroundColor = "rgb("+197+","+204+","+199+")";
}

function  my_function()
{
    circle.style.backgroundColor = "rgb("+95+","+102+","+97+")";
}
