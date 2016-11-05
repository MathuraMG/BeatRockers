class Student < ApplicationRecord
  has_and_belongs_to_many :users
  has_and_belongs_to_many :sections
  has_and_belongs_to_many :audios
  has_and_belongs_to_many :comments
end
