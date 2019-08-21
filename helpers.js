adve = "http://sf-pyw.mosyag.in/m04/api/forecasts"

$("#test").click(function() 
{
	$.getJSON(adve, function(data)
	{
		paragraphs = data["prophecies"]
		set_secret_messages(paragraphs)
	});
});

function set_secret_messages(msg) {
	$.each(msg, function(i, d) {
		p = $("#p-" + i)
		p.html("<p>" + d + "</p>")
    });
}

