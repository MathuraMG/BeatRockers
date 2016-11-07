class AddColumnTags < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :tag_color, :string
  end
end
