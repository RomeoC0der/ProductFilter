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
function ramFilter(ram)
{
let VofRAM = ram.getAttribute('RAMS');
let allSmarts = document.querySelectorAll('[ram=\''+VofRAM+'\']');
	if(ram.checked == true)
	{
		for(let i = 0; i < allSmarts.length; i++)
		{
			allSmarts[i].style.display = "flex";
		}
	}
	else
	{
		for(let i = 0; i < allSmarts.length; i++)
		{
			allSmarts[i].style.display = "none";
		}

	}
}
let filterM = document.querySelector('.filter');
let btnOpen;
let btnClose = document.querySelector('#closeFilter');;
function openMenu(btn)
{	
		if(btnClose.style.display == 'none')
		{
			btnClose.style.display = "flex";
		}
		filterM.style.transform = 'translateX(0%)';
		btn.style.display = 'none';
		btnOpen = btn;

}

function closeMenu(btn)
{
filterM.style.transform = 'translateX(-100%)';
closeFilter.style.display = 'none';
btnOpen.style.display = "flex";
}
