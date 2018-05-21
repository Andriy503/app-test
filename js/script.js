$(document).ready(function() {
	var mobile = [];

	$("#send_api").click(function() {
		$.ajax({
			url: "./api.php",
			type: "GET",
			dataType: "JSON",
			success: function(response) {
				var len = response.length;
				console.log(response);

				for (var i=0; i < len; i++) {

					var name = response[i].name;	
					var price = response[i].price;

					mobile[i] = [
									{name: name, price: price}
							 	];
				}
			}
		});
	});

	$(".show_all").click(function() {
		$(".table").fadeIn(500);
		this.style.display = 'none';
		for(var i=0; i<mobile.length; i++){
			name_resp = mobile[i][0].name;
			price_resp = mobile[i][0].price;

			tr_str = "<tr>" +
							"<th scope='row'>"+ (i+1) +"</th>" +
		                    "<td style='color: blue'>" + name_resp + "</td>" +
		                    "<td style='color: #a01c1c'><strong>" + price_resp + "</strong></td>" +
		                 "</tr>";
			
			$(".tbl_test").append(tr_str);
		}
	});

	$(".sort_down").click(function() {
		for(var i=0; i<mobile.length; i++){
			console.log(mobile[i][0].name, mobile[i][0].price)
		}
	});
});

$(function() {
	//----- OPEN
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault();
	});

	//----- CLOSE
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		e.preventDefault();
	});
});