$(document).ready(function() {
	var mobile = [];
	var mobile_ot = [];

	$("#send_api").click(function() {
		$.ajax({
			url: "./api.php",
			type: "GET",
			dataType: "JSON",
			success: function(response) {
				var len = response.length;
				// console.log(response);

				for (var i=0; i < len; i++) {
					var name = response[i].name;	
					var price = response[i].price;

					if(i < 5) {
						mobile[i] = {name: name, price: price};	
					} else {
						mobile_ot.push({name: name, price: price})
					}
				}
			}
		});
	});

	$(".show_all").click(function() {
		$(".table").fadeIn(500);
		this.style.display = 'none';
		for(var i=0; i<mobile.length; i++){
			name_resp = mobile[i].name;
			price_resp = mobile[i].price;

			tr_str = "<tr class='out_tov'>" +
							"<th scope='row'>"+ (i+1) +"</th>" +
		                    "<td style='color: blue'>" + name_resp + "</td>" +
		                    "<td style='color: #a01c1c'><strong>" + price_resp + "</strong></td>" +
		                 "</tr>";
			
			$(".tbl_test").append(tr_str);
		}
	});

	$(".sort_down").click(function() {
		// sorting price
		function num_sort(a,b) {
			return (a.price - b.price);
		}

		mobile.sort(num_sort);
			
		$(".out_tov").hide();
		$(".filt_name_out_tov").hide();	

		for(var i = 0; i < mobile.length; i++){
			name = mobile[i].name;
			price = mobile[i].price;

			tr_str = "<tr class='filt_price_out_tov'>" +
							"<th scope='row'>"+ (i+1) +"</th>" +
		                    "<td style='color: blue'>" + name + "</td>" +
		                    "<td style='color: #d61111;text-align: center; background-color: #939393;'><strong>" + price + "</strong></td>" +
		                 "</tr>";

			$(".tbl_test").append(tr_str);
		}
		
	});

	$(".sort_up").click(function() {
		// sorting name
		function SortByName(a, b){
		  var aName = a.name.toLowerCase();
		  var bName = b.name.toLowerCase(); 
		  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
		}

		mobile.sort(SortByName);

		$(".filt_price_out_tov").hide();
		$(".out_tov").hide();
		
		for(var i = 0; i < mobile.length; i++){
			var name_1 = mobile[i].name;
			var price_1 = mobile[i].price;

			tr_str = "<tr class='filt_name_out_tov'>" +
							"<th scope='row'>"+ (i+1) +"</th>" +
		                    "<td style='color: blue; background-color: #9b9b9b;'>" + name_1 + "</td>" +
		                    "<td style='color: #e20606;text-align: center;'><strong>" + price_1 + "</strong></td>" +
		                 "</tr>";

			$(".tbl_test").append(tr_str);	
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