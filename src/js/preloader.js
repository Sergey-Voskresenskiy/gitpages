(()=>{
	const preloader = document.querySelector('section')

	window.addEventListener('load', ()=>{
		preloader.className += ' fade'
		setTimeout(()=>{
			preloader.style.display = 'none';
		}, 600)
	})
})()