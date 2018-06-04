$('.select-category-js').change( function() {
	var host = 'https://fashionunited.com';
	var category = $('.select-category-option-js:selected').val();
	var categoryLink = `${host}${category || '/fashion-jobs'}`;
	$('.add-category-link-js').attr('href', categoryLink);
	return;
});