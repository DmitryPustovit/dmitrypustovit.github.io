var number = 100;

for (var i=0; i<=number; i++)
{
jQuery('<div/>', { id: 'a' + i,}).appendTo('#posts');
$( "#a" +  i ).load( "posts/Article" + i + ".htm" );
document.write("<br />");
}
