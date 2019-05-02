var tab = new Array('red', 'green', 'blue');
var i = 0;
circle = document.getElementById('Ballon');
circle.onclick = my_function;
circle.onmouseleave = my_reverse_function;
function  my_function()
{
    change_size();
    change_color();
}

function change_size()
{

    var width = parseInt(circle.clientWidth, 10);
    var height = parseInt(circle.clientHeight, 10);
    width += 10;
    height += 10;
    if (width > 420)
    {
        width = 200;
        height = 200;
    }
    circle.style.width = width + 'px';
    circle.style.height = height + 'px';
}
function change_color()
{
    i++;
    if (i > 2)
        i = 0;
    circle.style.backgroundColor = tab[i];
}
function my_reverse_function()
{
    var width = parseInt(circle.clientWidth, 10);
    var height = parseInt(circle.clientHeight, 10);
    if (width > 200)
    {
        width -= 5;
        height -= 5;
    }
    circle.style.width = width + 'px';
    circle.style.height = height + 'px';
    i--;
    if (i < 0)
        i = 2;
    circle.style.backgroundColor = tab[i];
}