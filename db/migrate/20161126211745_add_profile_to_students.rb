class AddProfileToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :profile, :text
  end
end
