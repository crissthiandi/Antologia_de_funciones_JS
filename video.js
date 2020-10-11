// Videos

link=document.querySelectorAll('video')

a=[]

link.forEach( url =>
a.push(url.currentSrc));

for (var i=0; i<link.length;i++) {
	var descargar = document.createElement('a');

	descargar.download = 'Morenita';
	descargar.target = '_blank';
	descargar.href= a[i]
	
	document.body.appendChild(descargar);
	descargar.click(); 
	document.body.removeChild(descargar);

}