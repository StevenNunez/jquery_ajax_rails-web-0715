function Course(name, description){
  this.name = name;
  this.description = description;
}

Course.prototype.render = function(){
     return "<li>" +
      "<div class='existing_course_name'>" +
        this.name +
        "<span class='delete' data-id=" + this.id + "> &times;</span>" + 
      "</div>" +
      "<div class='existing_course_description'>" +
        this.description +
      "</div>" +
    "</li>";
}

Course.fromForm = function(form){
    var courseName = $(form).find('#course_name').val();
    var courseDescription = $(form).find('#course_description').val();
    return new Course(courseName, courseDescription);
}

Course.fromJson = function(jsonObject){
  var course = new Course(jsonObject.name, jsonObject.description);
  course.id = jsonObject.id;
  return course;
}
