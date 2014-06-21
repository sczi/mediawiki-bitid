jQuery(function($) {
	$('a[href$="#bitid-manual-signing"]').click(function() {
		$('#qr-code').fadeOut('fast', function() {
			$('#manual-signing').fadeIn();
			$('#manual-signing input[name="address"]').focus();
		});
	});
	$('a[href$="#bitid-qr-code"]').click(function() {
		$('#manual-signing').fadeOut('fast', function() {
			$('#qr-code').fadeIn();
		});
	});
	if ($('#qr-code').length) {
		setInterval(function() {
			var r = new XMLHttpRequest();
			r.open("POST", location.href+'/ajax', true);
			r.onreadystatechange = function () {
				if (r.readyState != 4 || r.status != 200) return;
				if(r.responseText!='null') {
					window.location = "";
				}
			};
			r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			r.send("nonce="+$('input[name="nonce"]').val());
		}, 3000);
	}
});
