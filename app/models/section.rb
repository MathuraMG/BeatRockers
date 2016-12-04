class Section < ApplicationRecord
  has_and_belongs_to_many :comments
  has_and_belongs_to_many :students
end
