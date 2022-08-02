# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

u1 = User.create("username": "saint3", "password": "Apple12!")
# u2 = User.create("username": "delvinDandy", "password": "McDandy12@")
# u3 = User.create("username": "travelgypsy", "password": "boEing56$")
# u4 = User.create("username": "helenhover", "password": "blashmerfA%")
# u5 = User.create("username": "glendaglampin" "password": "iSeeSwag2*")
require 'faker' 

10.times do
User.create(username:Faker::Name.unique.first_name, password: "iSeeSwag2*")
end 

10.times do 
    Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user: User.find(User.pluck(:id).sample
    # image: Faker::LoremFlickr.colorized_image(size: "50x60", color: 'red', search_terms: ['sports', 'fitness'], match_all: true)
    # image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['sports'])
    ))
end

