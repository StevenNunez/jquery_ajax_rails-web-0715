class CoursesController < ApplicationController
  def index
    @courses = Course.all
    render json: @courses
  end

  def create
    course = Course.create(course_params)
    render json: course
  end


  def destroy
    course = Course.find(params[:id])
    course.destroy
    render json: course
  end

  private
  def course_params
    params.require(:course).permit(:name, :description)
  end
end
