class Audio < ApplicationRecord
   mount_uploader :audio, AudioUploader
   has_and_belongs_to_many :students
end
