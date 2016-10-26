class CreateSectionsStudents < ActiveRecord::Migration[5.0]
  def change
    create_join_table :sections, :students
  end
end
