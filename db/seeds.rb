# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

u1 = User.create("username": "saint1", "password": "Apple12!")
u2 = User.create("username": "saint2", "password": "Apple12!")
u3 = User.create("username": "saint3", "password": "Apple12!")
u4 = User.create("username": "saint4", "password": "Apple12!")
u5 = User.create("username": "saint5", "password": "Apple12!")
u6 = User.create("username": "saint6", "password": "Apple12!")
u7 = User.create("username": "saint7", "password": "Apple12!")
u8 = User.create("username": "saint8", "password": "Apple12!")
u9 = User.create("username": "saint9", "password": "Apple12!")
u10 = User.create("username": "saint10", "password": "Apple12!")
u11 = User.create("username": "saint11", "password": "Apple12!")
# u2 = User.create("username": "delvinDandy", "password": "McDandy12@")
# u3 = User.create("username": "travelgypsy", "password": "boEing56$")
# u4 = User.create("username": "helenhover", "password": "blashmerfA%")
# u5 = User.create("username": "glendaglampin" "password": "iSeeSwag2*")
require 'faker' 



10.times do
User.create(username:Faker::Name.unique.first_name, password: "iSeeSwag2*")
end 

# 10.times do 
#     Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user: User.find(User.pluck(:id).sample
#     # image: Faker::LoremFlickr.colorized_image(size: "50x60", color: 'red', search_terms: ['sports', 'fitness'], match_all: true)
#     # image: Faker::LoremFlickr.image(size: "50x60", search_terms: ['sports'])
#     ))
# end

Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u1.id, image: 'travel_pics/travel1.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u2.id, image: 'travel_pics/travel2.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u3.id, image: 'travel_pics/travel3.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u4.id, image: 'travel_pics/travel4.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u5.id, image: 'travel_pics/travel5.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u6.id, image: 'travel_pics/travel6.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u7.id, image: 'travel_pics/travel7.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u8.id, image: 'travel_pics/travel8.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u9.id, image: 'travel_pics/travel9.jpeg')
Post.create(title: Faker::Nation.capital_city, content: Faker::ChuckNorris.fact, user_id: u10.id, image: 'travel_pics/travel10.jpeg')
