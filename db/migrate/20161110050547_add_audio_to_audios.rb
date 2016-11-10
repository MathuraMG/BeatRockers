class AddAudioToAudios < ActiveRecord::Migration[5.0]
  def change
    add_column :audios, :audio, :string
  end
end
