var arr=["blue","green","red","yellow"];
var pattern=[];
var userpattern=[];
var level=0;
var bool=false;
$(document).on("keypress",function(){
    if(!bool)
    {
        start();
        bool=true;
    } 
});
function start()
{
    $("h1").text("You are on "+level);
    radm();
}
$(".btn").on("click",function(){
    var c=$(this).attr("id");
    sound(c);
    userpattern.push(c);
    checkpattern(userpattern.length-1);
});
function radm()
{
    var idx=Math.floor(Math.random()*4);
    sound(arr[idx]);
    pattern.push(arr[idx]);
}
function checkpattern(q)
{
    if(userpattern[q]==pattern[q])
    {
        if(q===pattern.length-1)
        {
            setTimeout(function(){
                level+=1;
                userpattern=[];
                start();
            },1000);
        }
    }
    else{
        over();
    }
}
function press(idx)
{
    $('#'+idx).addClass("pressed");
    setTimeout(function(){
        $('#'+idx).removeClass("pressed");
    },100);
}
function sound(idx)
{
    var audio=new Audio("sounds/"+idx+".mp3");
    audio.play();
    press(idx);
}
function over()
{
    $('h1').text("Game over!!");
    var e=new Audio("sounds/wrong.mp3");
    e.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);
    setTimeout(function(){
        $('h1').text('Press any Key to Start');
    },2000);
    bool=false;
    pattern=[];
    userpattern=[];
    level=0;
}