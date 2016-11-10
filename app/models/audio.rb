class Audio < ApplicationRecord
  has_and_belongs_to_many :students
  has_attached_file :file,
    :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml")
  # do_not_validate_attachment_file_type :file
end
