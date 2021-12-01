var hour = moment().hour();

//Creates section and populates the section with text blocks labelled by the hour with a save button.
function createTimeblocks() {
  var color;
  var content;
  for (i = 0; i < 9; i++) {
    console.log(i + 9)
    console.log(hour)
    if (i + 9 < hour) {
      console.log(i + 9)
      color = `past`;
    } else if (i + 9 > hour) {
      console.log(i + 9)
      color = `future`;
    } else color = `present`
    if (localStorage.getItem(i + 9 + "00")) {
      content = localStorage.getItem(i + 9 + "00")
    } else content = ""
    $(".container").append(`<section class="row time-block">
    <div class="col col-md-1 hour">${i + 9}00</div>
    <textarea class="col col-md-10 description ${color}">${content}</textarea>
    <button class="col col-md-1 btn saveBtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
  </svg></button>
  </section>`);
  }
}

//runs above function and sets date and time of the paragraph with current date
createTimeblocks()
$('#currentDay').text(moment().format('LLLL'));

//adds save functionality to button
$(".time-block").on('click', '.saveBtn', function () {
  localStorage.setItem(
    $(this).parent().eq(0).text().trim(),
    $(this).siblings('.description').val()
  );
});