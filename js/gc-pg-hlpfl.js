$(document).on("wb-ready.wb", function() {
	$("#btnno").click(function(e) {
		$(".gc-pg-hlpfl-no").removeClass("nojs-show");
		$(".gc-pg-hlpfl-btn").addClass("hide");
		$("#helpful").val("No");
	});
	$("#gc-pg-hlpfl-frm").submit(function(e) {
		e.preventDefault();
		$(".gc-pg-hlpfl-thnk").removeClass("hide");
		$("#gc-pg-hlpfl-frm").addClass("hide nojs-show");
		$.ajax({
			url: 'https://pagesuccessemailqueue.azurewebsites.net/api/QueueProblemForm',
			type: 'POST',
			dataType: 'text',
			data: $('form#gc-pg-hlpfl-frm').serialize(),
			success: function(data) {},
			error: function(xhr, status, err) {
				console.log(xhr.responseText);
			}
		});
	});
});
