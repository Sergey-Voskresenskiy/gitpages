(()=>{
	const preloader = document.createElement('section')
	const firstChild = document.body.firstChild

	preloader.className = 'preloader'
	preloader.innerHTML = '<div class="preloader__ico"></div><div class="preloader__spiner"></div>'
	document.body.insertBefore(preloader, firstChild);

	window.addEventListener('load', ()=>{
		preloader.className += ' fade'
		setTimeout(()=>{
			preloader.style.display = 'none';
		}, 600)
	})
})()