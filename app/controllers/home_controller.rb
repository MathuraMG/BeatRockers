class HomeController < ApplicationController
  def index
    @students = Student.all
    @lessons = Lesson.all.order(order: :asc)
    
  end
end
