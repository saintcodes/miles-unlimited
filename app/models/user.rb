class User < ApplicationRecord
has_many :comments 
has_many :posts 

has_secure_password  
validates :username, presence: true, uniqueness: true, length: { in: 6..12 }
validates :password, presence: true, format: { with: /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/ }
end