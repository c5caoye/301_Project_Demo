$(document).ready( function () {
    var $alertS = $(".alert.alert-success");
    if (!isEmptyS($alertS)) {
    	$alertS.css("display", "block");
    }
    var $alertF = $(".alert.alert-danger");
	if (!isEmptyF($alertF)) {
    	$alertF.css("display", "block");
    }
});

function isEmptyF( el ){
      var result = ($.trim(el.html()).toString() === "<strong>Danger!</strong>");
      console.log($.trim(el.html()));
      return result
}

function isEmptyS( el ){
      var result = ($.trim(el.html()).toString() === "<strong>Seccess!</strong>");
      console.log($.trim(el.html()));
      return result
}