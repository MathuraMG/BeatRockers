class Comment < ApplicationRecord
  has_and_belongs_to_many :sections
  has_and_belongs_to_many :students
  has_and_belongs_to_many :users
end
