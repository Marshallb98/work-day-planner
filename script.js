$( document ).ready(function() {
    console.log( "ready!" );
    $("#currentDay").text(moment().format('dddd MMM Do'));
    var time = moment().format('h a');
    var timeBefore = ["12 am","1 am","2 am","3 am","4 am","5 am","6 am","7 am","8 am"]
    var textarea = !("textarea")
    console.log(time)
    if (time !== timeBefore){
        $(textarea).attr('class', 'col-md-10 description past')
    }
});
