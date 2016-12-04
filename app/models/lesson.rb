class Lesson < ApplicationRecord
  has_and_belongs_to_many :audios
  has_and_belongs_to_many :students
  has_and_belongs_to_many :tags
end
