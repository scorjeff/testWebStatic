var menu = new Array();
menu[0]="<ul><li>1.1</li><li>1.2</li></ul>";
menu[1]="<ul><li>2.1</li><li>2.2</li></ul>";
menu[2]="<ul><li>3.1</li><li>3.2</li><li>3.3</li><li>3.4</li></ul>";
menu[3]="<ul><li>4.1</li><li>4.2</li></ul>";

var liste;

var ancIndex=-1;
var ancLigne="";

function init()
{
	liste=document.getElementById("menu").getElementsByTagName("Li");
}

function debut(i)
{	
			if (ancIndex>=0)
			{
				liste[ancIndex].innerHTML=ancLigne;
			}
			ancLigne=liste[i].innerHTML
			ancIndex=i;
			liste[i].innerHTML+=menu[i];
}