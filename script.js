//Today's day, time right now

var todaysDay = moment().format('MMMM Do YYYY, h:mm:ss A');
var weekDay = moment().format('dddd');
var todayHours = moment().hours();

$("#currentDay").text(todaysDay);
$("#weekDay").text(weekDay);

//Add background color based on time
function backgroundColor () {
      
    $(".form-control").each(function () {
        var testTime = parseInt($(this).attr("id"));
        todayHours = parseInt(todayHours);
        console.log(testTime);
        console.log(todayHours);
          if (todayHours > testTime) {
            $(this).addClass("past");
        } else if (todayHours < testTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }
    backgroundColor();

//Save input to local storage

$(".saveBtn").click(function () {
    console.log("save button clicked")
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

//Get input from local storage through loop 
var time = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < time.length; i++) {
    $(".form" + time[i]).val(localStorage.getItem(time[i]));
}

//Clear calendar

$("#clear").on("click", function(){
    localStorage.clear();
    window.location.reload();
 }) 