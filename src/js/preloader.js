(()=>{
	const preloader = document.createElement('section')
	preloader.className = 'preloader'
	preloader.innerHTML = '<div class="preloader__ico"></div><div class="preloader__spiner"></div>'
	document.body.appendChild(preloader)

	window.addEventListener('load', ()=>{
		preloader.className += ' fade'
		setTimeout(()=>{
			preloader.style.display = 'none';
		}, 600)
	})
})()