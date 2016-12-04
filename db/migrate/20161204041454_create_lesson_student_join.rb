class CreateLessonStudentJoin < ActiveRecord::Migration[5.0]
  def change
  create_join_table :lessons, :students
  end
end
