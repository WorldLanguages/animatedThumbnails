document.getElementById("author").innerHTML += " - <b><div id='animatedThumbnailText' style='display:inline;'></div></b>";
document.getElementById("animatedThumbnailText").innerHTML = "<font color='blue'>Animated thumbnail script ready</font>";
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
document.getElementById("animatedThumbnailText").innerHTML = "<font color='orange'>Uploading thumbnail...</font>";
		$.ajax({
			type: "POST",
			url: "/internalapi/project/thumbnail/"+Scratch.INIT_DATA.PROJECT.model.id+"/set/",
			data: e2.target.result,
			contentType: "",
			processData: false,
			success: function(msg) {
if(msg.status == "ok"){
document.getElementById("animatedThumbnailText").innerHTML = "<font color='green'>Success</font>";} else{
document.getElementById("animatedThumbnailText").innerHTML = "<font color='red'>Error</font>";
}
            }
		});
	};
	reader.readAsArrayBuffer(file);
});
