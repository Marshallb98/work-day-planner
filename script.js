$(document).ready(function() {
    console.log( "ready!" );
    $("#currentDay").text(moment().format('dddd MMM Do'));
    var time = moment().hours()
    console.log(time)
    // function that changed the background color to gray red or green that corresponds with past present and future, time resets everyday at 12am to the new day
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

    $("saveBtn").on("click", function(){
        var input = $(this).siblings(".description").val();
        var inputTime = $(this).parent().attr("id");
    
       localStorage.setItem(input, inputTime)
    })
});
var localTime = [$("#9"),$("#10"),$("#11"),$("#12"),$("#13"),$("#14"),$("#15"),$("#16"),$("#17")]
$(localTime).each(function() {
    $(localTime).val(localStorage.getItem(localTime))
})
