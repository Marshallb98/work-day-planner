$(document).ready(function() {
    console.log( "ready!" );
    $("#currentDay").text(moment().format('dddd MMM Do'));
    var time = moment().hours()
    var textarea = $("textarea")
    console.log(time)
    function backgroundColor() {
    $(".row").each(function() {
    rowHour = parseInt($(this).attr("id"))
    console.log(rowHour)
    if (rowHour < time) {
    $(this).addClass("past")
    }
    else if(rowHour === time){
    $(this).removeClass("past")    
    $(this).addClass("present")
    }
    else {
    $(this).removeClass("past") 
    $(this).removeClass("present") 
    $(this).addClass("future")
    }
}
    )
    }
    backgroundColor()
});
