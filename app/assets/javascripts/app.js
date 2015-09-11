// $(document).ready(function(){
$(function(){
  $('.courses').on('click', '.existing_course_name', function(){
    $(this).siblings('.existing_course_description').fadeToggle();
  })

  $('#course_creation_form').submit(function(e){
    e.preventDefault();
    // Read Form data
    var courseName = $(this).find('#course_name').val();
    var courseDescription = $(this).find('#course_description').val();
    // clear form fields
    $(this).find('#course_name').val("");
    $(this).find('#course_description').val("");
    // create Template with Data
    var template = "<li>" +
      "<div class='existing_course_name'>" +
        courseName +
      "</div>" +
      "<div class='existing_course_description'>" +
        courseDescription +
      "</div>" +
    "</li>"
    // Insert into .courses ul
    $('.courses').append(template);
  })
})
