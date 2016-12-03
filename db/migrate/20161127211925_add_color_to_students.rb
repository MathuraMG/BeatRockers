class AddColorToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :color, :string
  end
end
