class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :comments
  has_and_belongs_to_many :audios
end
