class CreateUserAudioJoin < ActiveRecord::Migration[5.0]
  def change
    create_join_table :audios, :users
  end
end
