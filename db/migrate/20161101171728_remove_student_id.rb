class RemoveStudentId < ActiveRecord::Migration[5.0]
  def change
    remove_column :students, :studentID, :integer
  end
end
