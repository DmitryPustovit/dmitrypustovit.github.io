---
layout: post
title: Pi Day Math Fun
summery: It's Pi day. Let's find some Pi.
---

![_config.yml]({{ site.baseurl }}/images/pi.jpg)

Its Pi day so I am obligated to do something that has to do with Pi so I decided to find Pi. I will use calculus to do this, specifically infinite series. My calculus teacher should be very proud of me. I will be using two different methods.

<h1> Gregory–Leibniz Series </h1>
The first is the Gregory–Leibniz series which is best explained as the following:

Pi = (4/1) – (4/3) + (4/5) – (4/7) + (4/9) – (4/11) …

After 500,000 terms the first 5 decimals are correct.

Try it out:

<iframe src="http://dmitrypustovit.com/pi/pi.html" style="border:none"></iframe>



<h1> Nilakantha's Series </h1>
Next I will be using Nilakantha's series which is similar but converges to the first five decimals much faster. It is explain as the following:

Pi = 3 + ( 4 / (2 * 3 * 4) ) - ( 4 / (4 * 5 * 6) ) + ( 4 / (6 * 7 * 8) ) …

This series converges to the first 5 decimals much faster than the Gregory–Leibniz series.  It gets the first 5 terms after only 22 terms it converges to the first 5 decimals.


Try it out:

<iframe src="http://dmitrypustovit.com/pi/pi2.html" style="border:none"></iframe>


I will only go over Nilakantha's series, it is pretty similar to the code I used for the Gregory–Leibniz Series.
I used a basic for loop to perform a calculation for a user defined number of terms. This was then outputted to a div in the html.

<code>
function FindPi()
{
    var Pi=3;
    var v=2;
    var term = document.getElementById('number').value;

    for (i=0;i<=term;i++)
    {
        Pi = Pi + (4/(v * (v+1) * (v+2))) - (4/((v +2) * (v+3) * (v+4)))
        v = (v + 4)
    }

    $("#PiResults").html(Pi); // This is a bit of JQuery... You can do the same with JS easily.
}
</code>

<br/><br/>
That is it for this quick post. Go out, have some fun, and eat some pie. Happy &pi; day!
