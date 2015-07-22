app.factory( 'serviceAlert', function(){
	return {
		show : function( msg ) {
			alert( msg );
		}
	};
});

app.service( 'serviceFlashMsg', function(){
	return function( msg ) {
		$( '#flash_msg' ).html( msg ).fadeIn( 1000 ).fadeOut( 1000, function(){
			$( '#flash_msg' ).html( '' );	
		});
	};
});