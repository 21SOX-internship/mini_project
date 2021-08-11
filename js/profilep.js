
$( document ).ready( function() {
  var jbOffset = $( '.sub_nav' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > jbOffset.top ) {
      $( '.sub_nav' ).addClass( 'sub_navfixed' );
    }
    else {
      $( '.sub_nav' ).removeClass( 'sub_navfixed' );
    }
  });
} );
