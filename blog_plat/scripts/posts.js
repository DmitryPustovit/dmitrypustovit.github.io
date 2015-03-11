for (var i=0;i<=100;i++)
{
jQuery('<div/>', { id: 'a' + i,}).appendTo('#posts');
$( "#a" +  i ).load( "posts/Article" + i + ".htm" );
document.write("<br />");
}
