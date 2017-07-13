var dropper = $("#info");
dropper.on("dragover", function(e) {
	e.stopPropagation();
	e.preventDefault();
	e.originalEvent.dataTransfer.dropEffect = "copy";
});
dropper.on("drop", function(e) {
	e.stopPropagation();
	e.preventDefault();
	file = e.originalEvent.dataTransfer.files[0];
	var reader = new FileReader();
	reader.onload = function(e2) {
		$.ajax({
			type: "POST",
			url: "/internalapi/project/thumbnail/"+Scratch.INIT_DATA.PROJECT.model.id+"/set/",
			data: e2.target.result,
			contentType: "",
			processData: false,
			success: function(msg) {
				alert("Server response: " + msg.status);
			}
		});
	}
	reader.readAsArrayBuffer(file);
});
