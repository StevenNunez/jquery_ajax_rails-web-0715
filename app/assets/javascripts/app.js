$(function(){
  $('.courses').on('click', '.existing_course_name', function(){
    $(this).siblings('.existing_course_description').fadeToggle();
  })

  $.getJSON('/courses.json', function(data){
    data.forEach(function(item){
      var course = Course.fromJson(item);
      $('.courses').append(course.render());
    });
  })

  $('#course_creation_form').submit(function(e){
    e.preventDefault();
    var course = Course.fromForm(this);
    this.reset()
    $('.courses').append(course.render());
  })
})
