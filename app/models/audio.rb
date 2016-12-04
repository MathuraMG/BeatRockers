class Audio < ApplicationRecord
   mount_uploader :audio, AudioUploader
   has_and_belongs_to_many :lessons
   has_and_belongs_to_many :students
   has_and_belongs_to_many :users
end
