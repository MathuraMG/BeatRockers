class CreateCommentsStudentsJoin < ActiveRecord::Migration[5.0]
  def change
    create_join_table :comments, :students
  end
end
