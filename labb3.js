var menu = {
	"Pizzor klass 1": [
		{ "name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
		{ "name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
		{ "name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
	],
	"Pizzor klass 2": [
		{ "name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
		{ "name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner"], "price": 70 },
		{ "name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor"], "price": 70 },
		{ "name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas"], "price": 70 },
		{ "name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs"], "price": 70 },
		{ "name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk"], "price": 70 },
		{ "name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök"], "price": 70 },
		{ "name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner"], "price": 70 }
	],
	"Pizzor klass 3": [
		{ "name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg"], "price": 75 },
		{ "name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 75 },
		{ "name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner"], "price": 75 },
		{ "name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan"], "price": 75 },
		{ "name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 85 },
		{ "name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor"], "price": 75 },
		{ "name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor"], "price": 75 },
		{ "name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas"], "price": 75 },
		{ "name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)"], "price": 75 },
		{ "name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika"], "price": 75 },
		{ "name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök"], "price": 75 },
		{ "name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan"], "price": 75 },
		{ "name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
	],
	"Såser": [
		{ "name": "Bearnaisesås 10 cl ", "price": 10 },
		{ "name": "Kebabsås mild 10 cl ", "price": 10 },
		{ "name": "Kebabsås stark 10 cl ", "price": 10 },
		{ "name": "Kebabsås blandad 10 cl ", "price": 10 },
		{ "name": "Tzatzikisås 10 cl ", "price": 10 },
		{ "name": "Vitlökssås 10 cl ", "price": 10 }
	],
	"Dryck": [
		{ "name": "Coca-Cola 33 cl ", "price": 15 },
		{ "name": "Coca-Cola light 33 cl ", "price": 15 },
		{ "name": "Fanta 33 cl ", "price": 15 },
		{ "name": "Sprite 33 cl ", "price": 15 },
		{ "name": "Mineralvatten 33 cl ", "price": 15 },
		{ "name": "Lättöl 33 cl ", "price": 15 },
		{ "name": "Coca-Cola 50 cl ", "price": 20 },
		{ "name": "Fanta 50 cl ", "price": 20 }
	]
}


$(document).ready(function () {
	console.log("ready!");

	$.each(menu.Dryck, function (index, value) {
		$("#dryck-tab-pane > ol").append('<li data-namn="' + value.name + '" data-pris="' + value.price + '" class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + value.name + ' (' + value.price + 'kr)' + '</div></div><div class="btn-group  align-self-center" aria-label="Basic example"><button type="button" class="btn btn-primary"><</button><p class="border m-0  d-flex align-items-center nr-falt">0</p><button type="button" class="btn btn-primary">></button></div></li>');
	});

	$.each(menu["Pizzor klass 1"], function (index, value) {

		var innehall = "";
		$.each(value.contents, function (index, value) {
			
			if(value.includes("a:")){
				innehall += "<strong>" + value + "</strong>" + ", ";
			} else {
				innehall += value + ", ";
			}

		});

		innehall = innehall.substring(0, innehall.length - 2);

		$("#pizzor-tab-pane .accordion-item:nth-child(1) ol ").append('<li data-namn="' + value.name + '" data-pris="' + value.price + '" class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + value.name + ' (' + value.price + 'kr)' + '</div>' + innehall + '</div><div class="btn-group  align-self-center" aria-label="Basic example"><button type="button" class="btn btn-primary"><</button><p class="border m-0  d-flex align-items-center nr-falt">0</p><button type="button" class="btn btn-primary">></button></div></li>');
	});

	$.each(menu["Pizzor klass 2"], function (index, value) {

		var innehall = "";
		$.each(value.contents, function (index, value) {

			if(value.includes("a:")){
				innehall += "<strong>" + value + "</strong>" + ", ";
			} else {
				innehall += value + ", ";
			}
			
		});

		innehall = innehall.substring(0, innehall.length - 2);

		$("#pizzor-tab-pane .accordion-item:nth-child(2) ol").append('<li data-namn="' + value.name + '" data-pris="' + value.price + '" class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + value.name + ' (' + value.price + 'kr)' + '</div>' + innehall + '</div><div class="btn-group  align-self-center" aria-label="Basic example"><button type="button" class="btn btn-primary"><</button><p class="border m-0  d-flex align-items-center nr-falt">0</p><button type="button" class="btn btn-primary">></button></div></li>');
	});

	$.each(menu["Pizzor klass 3"], function (index, value) {

		var innehall = "";
		$.each(value.contents, function (index, value) {
			
			if(value.includes("a:")){
				innehall += "<strong>" + value + "</strong>" + ", ";
			} else {
				innehall += value + ", ";
			}

		});

		innehall = innehall.substring(0, innehall.length - 2);

		$("#pizzor-tab-pane .accordion-item:nth-child(3) ol").append('<li data-namn="' + value.name + '" data-pris="' + value.price + '" class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + value.name + ' (' + value.price + 'kr)' + '</div>' + innehall + '</div><div class="btn-group  align-self-center" aria-label="Basic example"><button type="button" class="btn btn-primary"><</button><p class="border m-0  d-flex align-items-center nr-falt">0</p><button type="button" class="btn btn-primary">></button></div></li>');
	});

	$.each(menu.Såser, function (index, value) {
		$("#saser-tab-pane > ol").append('<li data-namn="' + value.name + '" data-pris="' + value.price + '" class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="fw-bold">' + value.name + ' (' + value.price + 'kr)' + '</div></div><div class="btn-group  align-self-center" aria-label="Basic example"><button type="button" class="btn btn-primary"><</button><p class="border m-0  d-flex align-items-center nr-falt">0</p><button type="button" class="btn btn-primary">></button></div></li>');
	});

	$(".dropdown-menu .btn").click(function (event) {

		var bordNr = $(event.target).text();
		$(".bekrafta-bar > div:nth-child(2)").text(bordNr);
		$(".alert-warning").addClass("d-none");


	});

	$(".dropdown > .btn:first-child").click(function () {
		$(".bekrafta-bar > div:nth-child(2)").text("#");
	});

	$(".bekrafta-btn").click(function () {

		if ($(".bekrafta-bar > div:nth-child(2)").text() != "#") {

			console.log("Hej");

		} else {
			$(".alert-warning").removeClass("d-none");
		}

	});


	$(".alert-warning").click(function () {
		$(".alert-warning").addClass("d-none");
	});

	$(".list-group-item button").click(function (event) {

		if ($(event.target).text() == "<" && parseInt($(event.target).siblings("p").text()) > 0) {
			var newVal = parseInt($(event.target).siblings("p").text());
			newVal--;
			$(event.target).siblings("p").text(newVal);

			// Sparar antal (newVal) i listItem-taggen som hör ihop med aktuell knapp
			$(event.target).closest("li").data("antal", newVal);
		}

		if ($(event.target).text() == ">") {
			var newVal = parseInt($(event.target).siblings("p").text());
			newVal++;
			$(event.target).siblings("p").text(newVal);

			// Sparar antal (newVal) i listItem-taggen som hör ihop med aktuell knapp
			$(event.target).closest("li").data("antal", newVal);

		}

	});


	$('#bekraftaModal').on('hide.bs.modal', function (event) {

		$(".bekrafta-btn").addClass("no-modal");

		$(".dryck-tabell tbody").empty();
		$(".pizza-tabell tbody").empty();
		$(".sas-tabell tbody").empty();

	});


	$('#bekraftaModal').on('show.bs.modal', function (event) {

		var button = event.relatedTarget;

		if ($(".bekrafta-bar > div:nth-child(2)").text() != "#") {

			// Tar bort klassen "no-modal" från bekräfta-knappen för att visa modal-fönstret
			$(button).removeClass("no-modal");

			// Skriver ut valt bordsnummer på kvittot
			$(".bord-nr-kvitto").text("Bord: " + $(".bekrafta-bar > div:nth-child(2)").text());


			var totalen = 0;

			$("#dryck-tab-pane li").each(function(){

				if($(this).data("antal") > 0) {

					if($(this).data("antal") > 1){

						$(".dryck-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + " " + $(this).data("antal") + "x" + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					} else {

						$(".dryck-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					}

					totalen += ($(this).data("pris") * $(this).data("antal"));

				}

			});

			$("#pizzor-tab-pane li").each(function(){

				if($(this).data("antal") > 0) {

					if($(this).data("antal") > 1){

						$(".pizza-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + " " + $(this).data("antal") + "x" + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					} else {

						$(".pizza-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					}

					totalen += ($(this).data("pris") * $(this).data("antal"));

				}

			});

			$("#saser-tab-pane li").each(function(){

				if($(this).data("antal") > 0) {

					if($(this).data("antal") > 1){

						$(".sas-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + " " + $(this).data("antal") + "x" + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					} else {

						$(".sas-tabell tbody").append(
							"<tr>" +
								"<td>" + $(this).data("namn") + "</td>" +
								"<td>" + $(this).data("pris") + "kr" + "</td>" +
							"</tr>"
						);

					}

					totalen += ($(this).data("pris") * $(this).data("antal"));

				}

			});


			$(".modal-footer > p").text("Totalt: " + totalen + "kr");


		}

		if ($(button).hasClass("no-modal")) {
			event.preventDefault();
		}
	});

	$(".skriv-ut-btn").click(function(){

		$(".dryck-tabell tbody").empty();
		$(".pizza-tabell tbody").empty();
		$(".sas-tabell tbody").empty();
		$(".bekrafta-bar > div:nth-child(2)").text("#");
		$(".nr-falt").text("0");
		$(".modal-footer > p").text("Totalt:");
		$(".bord-nr-kvitto").text("Bord:");
		$("#noteringTextFalt").val("");

		$("#saser-tab-pane li").each(function(){
			$(this).data("antal", 0);
		});
	
		$("#pizzor-tab-pane li").each(function(){
			$(this).data("antal", 0);
		});

		$("#dryck-tab-pane li").each(function(){
			$(this).data("antal", 0);
		});

		// Stänger modal-komponenten som visar kvittot
		$('#bekraftaModal').modal("toggle");

		// Visar bekräftelsemeddelande att beställningen har gått iväg
		$('#meddelandeModal').modal("toggle");

	});


});