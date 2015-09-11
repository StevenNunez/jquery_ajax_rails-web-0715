$(function(){
  $('.courses').on('click', '.existing_course_name', function(){
    $(this).siblings('.existing_course_description').fadeToggle();
  })

  $('.courses').on('click', '.delete', function(e){
    var id = $(this).data('id');
    var self = this;
    e.stopPropagation();
    $.ajax({ method: "DELETE", url: "/courses/" + id }).done(function(data){
      $(self).parents('li').remove();
    })
  })

  $.getJSON('/courses.json', function(data){
    data.forEach(function(item){
      var course = Course.fromJson(item);
      $('.courses').append(course.render());
    });
  })

  $('#course_creation_form').submit(function(e){
    e.preventDefault();
    // var course = Course.fromForm(this);
    $.post('/courses', $(this).serialize(), function(data){
    // $.post('/courses', {course: {name: course.name, description: course.description}}, function(data){
      var course = Course.fromJson(data)
      $('.courses').append(course.render());
    })
    this.reset()
    // $('.courses').append(course.render());
  })
})
