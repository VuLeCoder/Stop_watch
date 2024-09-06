var txt = "Made by Vuz";
var speed = 190;
var i = 0;
var check = false;

function type_name() 
{
    if(!check)
    {
        document.getElementById('name').innerHTML += txt.charAt(i);
        i++;
        if(i == txt.length) check = true;
        setTimeout(type_name, speed);
    }
    // else
    // {
    //     i--;
    //     document.getElementById('name').innerHTML = txt.slice(0, i);
    //     if(i == 1) check = false;
    //     setTimeout(type_name, speed);
    // }
}

// start
var h = 0, m = 0, s = 0;
var index = 1000;
var sec_txt = "00", min_txt = "00", hour_txt = "00";
let Start_stopwatch;
function update_time()
{
    // document.getElementById('btn_start').style.display = 'none';
    // document.getElementById('btn_pause').style.display = 'flex';
    // document.getElementById('btn_pause').style.visibility = 'visible';
    if(s < 61)
    {   
        if(s < 10)
        {
            document.getElementById('second').innerHTML = "0"
            document.getElementById('second').innerHTML += s;
        }
        else document.getElementById('second').innerHTML = s;
        s++;

    }
    else
    {
        s = 0, m++;

        if(m < 61)
            if(m < 10)
            {
                document.getElementById('minute').innerHTML = "0"
                document.getElementById('minute').innerHTML += m;
            }
            else document.getElementById('minute').innerHTML = m;

        else
        {
            m = 0, h++;

            if(h < 61)
                if(h < 10)
                {
                    document.getElementById('hour').innerHTML = "0"
                    document.getElementById('hour').innerHTML += h;
                }
                else document.getElementById('hour').innerHTML += h;

            else h = 0;
        }
    }
}

function start()
{
    document.getElementById('btn_start').style.display = 'none';
    document.getElementById('btn_pause').style.display = 'flex';
    Start_stopwatch = setInterval(update_time, index);
}

// pause - continue
function pause_stopwatch()
{
    document.getElementById('btn_pause').style.display = 'none';
    document.getElementById('btn_continue').style.display = 'flex';
    clearInterval(Start_stopwatch);
}

function continue_stopwatch()
{
    document.getElementById('btn_continue').style.display = 'none';
    document.getElementById('btn_pause').style.display = 'flex';
    start();
}


// reset
function reset()
{
    clearInterval(Start_stopwatch);

    document.getElementById('btn_start').style.display = 'flex';
    document.getElementById('btn_continue').style.display = 'none';
    document.getElementById('btn_pause').style.display = 'none';
    // document.getElementById('btn_pause').style.visibility = 'hidden';

    document.getElementById('second').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('hour').innerHTML = "00";

    s = 0, m = 0, h = 0;
}


var cnt = 0;
function Like()
{
    if(cnt % 2 == 0)
    {
        document.getElementById('btn_like').classList.add('clicked');

        document.getElementById('btn_like').style.fontSize = '23px';
        document.getElementById('icon').style.transform = 'rotateZ(-15deg)';

        setTimeout(() => {
            document.getElementById('btn_like').style.fontSize = '20px';
            document.getElementById('icon').style.transform = 'rotateZ(0deg)';
        }, 400);
    }
    else document.getElementById('btn_like').classList.remove('clicked');
    cnt++;
}