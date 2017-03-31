var term = 22;
var runned = false;
run();
function run()
{
  if(runned)
    term = document.getElementById('number').value;

var Pi2=3;
var n2=2;
for (i=0;i<=term;i++)
{
Pi2 = Pi2 + (4/(n2 * (n2+1) * (n2+2)))
n2 = (n2 + 2)
Pi2 = Pi2 - (4/(n2 * (n2+1) * (n2+2)))
n2 = (n2 + 2)
}
$("#results2").html(Pi2);
runned = true;
}
