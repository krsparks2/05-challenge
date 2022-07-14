var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today.format("MMM Do, YYYY"))


// when clicked writes to local storage 

// function that retrieves the info from local storage 

//below shows the correct color on the lines for past, present and future
$("textarea").each(function(){
    var textAreaParent = $(this).parent().siblings().attr("id");
    // console.log(textAreaParent);
    // console.log("hello")
    var currentHour = moment().hour();
    // console.log(currentHour);
    if (textAreaParent > currentHour){
        $(this).addClass("future");
    }
    else if (textAreaParent < currentHour){
        $(this).addClass("past");
    }
    else {
        $(this).addClass("present");
    }
})

// on click funtion
submitBtn.addEventListener("click", locationInput)