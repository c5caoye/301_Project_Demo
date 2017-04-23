$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    //var add_button      = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $('#addFileButton').click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div>Step'+(x+4).toString()+':<br><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a><label><input type="checkbox" id="trigger'+(x+3).toString()+'" value="" onchange="valueChanged()"><span>need timer</span></label><input type="number" id="timerSec'+(x+3).toString()+'" placeholder="enter the timer time in seconds" style="display: none;" min ="0"><br><br></div>'); //add input box
        }
    });

    $('#submit').click(function(e) {
        e.preventDefault();
        alert("Submit Success!");
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

function valueChanged()
{
    for(var i = 0; i<10;i++){
        console.log('#trigger'+i);
        if($(('#trigger'+i)).is(":checked"))
            $("#timerSec"+i).show();
        else
            $("#timerSec"+i).hide();
    }
}
