// copia y pega el siguiente codigo para descargar img las cuales previamente dejaste abiertas [on click) [aplica en tabloides]

link=document.querySelectorAll('img')

a=[]

link.forEach( url =>
a.push(url.src));

for (var i=1; i<link.length;i++) {
	if(link[i].width>500){
	var descargar = document.createElement('a');

	descargar.download = true;
	descargar.target = '_blank';
	descargar.href= a[i]
	
	document.body.appendChild(descargar);
	descargar.click(); 
	document.body.removeChild(descargar);
	}

}



