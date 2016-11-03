class CreateStudentsAudioJoin < ActiveRecord::Migration[5.0]
  def change
    create_join_table :audios, :students
  end
end
