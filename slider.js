 var allParas = document.getElementsByTagName("p");
 var allH2 =  document.getElementsByTagName("h2");

let adaptive = e =>
{

if(innerWidth < innerHeight)
{
	for(let i = 0; i < allParas.length; i++)
 {
 	allParas[i].style.fontSize = innerWidth/innerHeight * 11 + 'px';
 }
}



 for(let i = 0; i < allParas.length; i++)
 {
 	allParas[i].style.fontSize = innerWidth/innerHeight * 12 + 'px';
 }
 for(let i = 0; i < allH2.length; i++)
 {
 	allH2[i].style.fontSize = innerWidth/innerHeight * 14 + 'px';
 }
}
addEventListener('resize', adaptive);
function ready()
{
	if(innerWidth < innerHeight)
{
	for(let i = 0; i < allParas.length; i++)
 {
 	allParas[i].style.fontSize = innerWidth/innerHeight * 11 + 'px';
 }
}



 for(let i = 0; i < allParas.length; i++)
 {
 	allParas[i].style.fontSize = innerWidth/innerHeight * 12 + 'px';
 }
 for(let i = 0; i < allH2.length; i++)
 {
 	allH2[i].style.fontSize = innerWidth/innerHeight * 14 + 'px';
 }
}
addEventListener('DOMContentLoaded', ready);
////////////////////////////////
let samsung = document.getElementById('Samsung');
let xiaomi = document.getElementById('Xiaomi');
let apple = document.getElementById('Apple');

let filter = data =>
{
	var dat = data.getAttribute('data');
	var checkbox = data;
	if(dat.toLowerCase() == 'samsung')
	{
		if(checkbox.checked == true)
		{
			samsung.style.display = "flex";
		}
		else
		{
		samsung.style.display = "none";
		}
	}
	if(dat.toLowerCase() == 'xiaomi')
	{
		if(checkbox.checked == true)
		{
				xiaomi.style.display = "flex";
		}
		else
		{
				xiaomi.style.display = "none";
		}
	}
	if(dat.toLowerCase() == 'apple')
	{
		if(checkbox.checked == true)
		{
				apple.style.display = "flex";
		}
		else
		{
				apple.style.display = "none";
		}
	}
}