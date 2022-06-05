document.addEventListener('DOMContentLoaded', () => {
	const many = document.querySelector('.section-many-notebook');
	const about = document.querySelector('.section-about-notebook');
	const icon = document.querySelector('.section-about-notebook__icons');
	const search = document.querySelector('.section-buy-notebook__photo_search');
	const pig = document.querySelector('.section-buy-notebook__photo_pig');
	const brown = document.querySelector('.section-buy-notebook__photo_brown');
	const button = document.querySelector('.section-buy-notebook__photo_button');

	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		console.log(scrollTop);
		if(scrollTop < 1750){
			icon.classList.remove('eight');
		}
		else if(scrollTop >= 1750 && scrollTop <= 1800){
			icon.classList.remove('seven');
			icon.classList.add('eight');
		}
		else if(scrollTop >= 1800 && scrollTop <= 1850){
			icon.classList.remove('eight');
			icon.classList.remove('six');
			icon.classList.add('seven');
		}
		else if(scrollTop >= 1850 && scrollTop <= 1900){
			icon.classList.remove('seven');
			icon.classList.remove('five');
			icon.classList.add('six');
		}
		else if(scrollTop >= 1900 && scrollTop <= 1950){
			icon.classList.remove('six');
			icon.classList.remove('four');
			icon.classList.add('five');
		}
		else if(scrollTop >= 1950 && scrollTop <= 2000){
			icon.classList.remove('five');
			icon.classList.remove('three');
			icon.classList.add('four');
		}
		else if(scrollTop >= 2000 && scrollTop <= 2050){
			icon.classList.remove('four');
			icon.classList.remove('two');
			icon.classList.add('three');
		}
		else if(scrollTop >= 2050 && scrollTop <= 2100){
			icon.classList.remove('three');
			icon.classList.remove('one');
			icon.classList.add('two');
		}
		else if(scrollTop > 2100){
			icon.classList.remove('two');
			icon.classList.add('one');
		}
/*********************Search**************************/
		if(scrollTop < 3200){
			search.classList.remove('search_one');
		}
		else if(scrollTop >= 3200 && scrollTop <=3250){
			search.classList.remove('search_two');
			search.classList.add('search_one');
		}
		else if(scrollTop >=3250 && scrollTop <= 3300){
			search.classList.remove('search_one');
			search.classList.remove('search_three');
			search.classList.add('search_two');
		}
		else if(scrollTop >=3300 && scrollTop <= 3350){
			search.classList.remove('search_two');
			search.classList.remove('search');
			search.classList.add('search_three');
		}
		else if(scrollTop > 3350){
			search.classList.remove('search_three');
			search.classList.add('search');
		}
/*********************PIG**************************/
		if(scrollTop < 3200){
			pig.classList.remove('pig_one');
		}
		else if(scrollTop >= 3200 && scrollTop <=3250){
			pig.classList.remove('pig_two');
			pig.classList.add('pig_one');
		}
		else if(scrollTop >=3250 && scrollTop <= 3300){
			pig.classList.remove('pig_one');
			pig.classList.remove('pig_three');
			pig.classList.add('pig_two');
		}
		else if(scrollTop >=3300 && scrollTop <= 3350){
			pig.classList.remove('pig_two');
			pig.classList.remove('pig');
			pig.classList.add('pig_three');
		}
		else if(scrollTop > 3350){
			pig.classList.remove('pig_three');
			pig.classList.add('pig');
		}
		/*********************BROWN**************************/
		if(scrollTop < 3200){
			brown.classList.remove('brown_one');
		}
		else if(scrollTop >= 3200 && scrollTop <=3250){
			brown.classList.remove('brown_two');
			brown.classList.add('brown_one');
		}
		else if(scrollTop >=3250 && scrollTop <= 3300){
			brown.classList.remove('brown_one');
			brown.classList.remove('brown_three');
			brown.classList.add('brown_two');
		}
		else if(scrollTop >=3300 && scrollTop <= 3350){
			brown.classList.remove('brown_two');
			brown.classList.remove('brown');
			brown.classList.add('brown_three');
		}
		else if(scrollTop > 3350){
			brown.classList.remove('brown_three');
			brown.classList.add('brown');
		}
		/*********************BUTTON**************************/
		if(scrollTop < 3200){
			button.classList.remove('button_one');
		}
		else if(scrollTop >= 3200 && scrollTop <=3250){
			button.classList.remove('button_two');
			button.classList.add('button_one');
		}
		else if(scrollTop >=3250 && scrollTop <= 3300){
			button.classList.remove('button_one');
			button.classList.remove('button_three');
			button.classList.add('button_two');
		}
		else if(scrollTop >=3300 && scrollTop <= 3350){
			button.classList.remove('button_two');
			button.classList.remove('button');
			button.classList.add('button_three');
		}
		else if(scrollTop > 3350){
			button.classList.remove('button_three');
			button.classList.add('button');
		}
	});
});