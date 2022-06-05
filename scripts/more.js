document.addEventListener('DOMContentLoaded', () => {
	const title = document.querySelector('.section-more-notebook__text');
	const one = document.querySelector('.section-more-notebook__text_one');
	const ribbon = document.querySelector('.design__ribbon');
	const card = document.querySelector('.design__img');
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		if(scrollTop <= 4100){
			title.classList.remove('text_open_one');
		}
		else if(scrollTop >=4100 && scrollTop <= 4154){
			title.classList.remove('text_open_two');
			title.classList.add('text_open_one');
		}
		else if(scrollTop >=4154 && scrollTop <= 4208){
			title.classList.remove('text_open_three');
			title.classList.remove('text_open_two');
			title.classList.add('text_open_one');
		}
		else if(scrollTop >=4208 && scrollTop <= 4262){
			title.classList.remove('text_open_one');
			title.classList.remove('text_open_four');
			title.classList.add('text_open_three');
		}
		else if(scrollTop >=4262 && scrollTop <= 4316){
			title.classList.remove('text_open_three');
			title.classList.remove('text_open_five');
			title.classList.add('text_open_four');
		}
		else if(scrollTop >=4316 && scrollTop <= 4370){
			title.classList.remove('text_open_four');
			title.classList.remove('text_open_six');
			title.classList.add('text_open_five');
		}
		else if(scrollTop >=4370 && scrollTop <= 4424){
			title.classList.remove('text_open_five');
			title.classList.remove('text_open_seven');
			title.classList.add('text_open_six');
		}
		else if(scrollTop >=4424 && scrollTop <= 4478){
			title.classList.remove('text_open_six');
			title.classList.remove('text_open_eight');
			title.classList.add('text_open_seven');
		}
		else if(scrollTop >=4478 && scrollTop <= 4532){
			title.classList.remove('text_open_seven');
			title.classList.remove('text_open_nine');
			title.classList.add('text_open_eight');
		}
		else if(scrollTop >=4532 && scrollTop <= 4586){
			title.classList.remove('text_open_eight');
			title.classList.remove('text_open');
			title.classList.add('text_open_nine');
		}
		else if(scrollTop >=4586 && scrollTop <= 4640){
			title.classList.remove('text_open_eight');
			title.classList.add('text_open');
		}
		/*ONE*/
		if(scrollTop < 4600){
			ribbon.style="width: 65px";
			card.style = "rotate(81deg)";
		}
		else if(scrollTop >=4600 && scrollTop <= 4700){
			ribbon.style="width: 130px";
			card.style = "rotate(72deg)";
		}
		else if(scrollTop >=4700 && scrollTop <= 4800){
			ribbon.style="width: 195px";
			card.style = "transfotm: rotate(63deg)";
		}
		else if(scrollTop >=4800 && scrollTop <= 4900){
			ribbon.style="width: 260px";
			card.style = "transfotm: rotate(54deg)";
		}
		else if(scrollTop >=4900 && scrollTop <= 5000){
			ribbon.style="width: 325px";
			card.style = "transfotm: rotate(45deg)";
		}
		else if(scrollTop >=5000 && scrollTop <= 5100){
			ribbon.style="width: 390px";
			card.style = "transfotm: rotate(36deg)";
		}
		else if(scrollTop >=5100 && scrollTop <= 5200){
			ribbon.style="width: 455px";
			card.style = "transfotm: rotate(27deg)";
		}
		else if(scrollTop >=5200 && scrollTop <= 5300){
			ribbon.style="width: 520px";
			card.style = "transfotm: rotate(18deg)";
		}
		else if(scrollTop >=5300 && scrollTop <= 5400){
			ribbon.style="width: 585px";
			card.style = "transfotm: rotate(9deg)";
		}
		else if(scrollTop >=5400 && scrollTop <= 5500){
			ribbon.style="width: 640px";
			card.style = "transfotm: rotate(0deg)";
		}

	});
});