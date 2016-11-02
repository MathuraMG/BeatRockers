class HomeController < ApplicationController
  before_filter :authorize, :only => [:index]
  def index
    @students = Student.all
    @lessons = Lesson.all.order(order: :asc)

  end
end
