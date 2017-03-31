var term = 500000;
var runned = false;
run();
function run()
{
  if(runned)
    term = document.getElementById('number').value;

var Pi=0;
var n=1;
for (i=0;i<=term;i++)
{
  Pi = Pi + (4/n)
  n = (n + 2)
  Pi = Pi - (4/n)
  n = (n + 2)
}
$("#results").html(Pi);
runned = true;
}
