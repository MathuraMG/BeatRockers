class AddNicknameToLessons < ActiveRecord::Migration[5.0]
  def change
    add_column :lessons, :nickname, :string
  end
end
