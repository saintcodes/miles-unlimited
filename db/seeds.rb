# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

u1 = User.create("username": "saint1", "password": "Apple12!", "bio": "Nuck Chorris", "image": "https://images.pexels.com/photos/7048347/pexels-photo-7048347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u2 = User.create("username": "saint2", "password": "Apple12!", "bio": "No bio here yet!", "image": "https://images.pexels.com/photos/3785991/pexels-photo-3785991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u3 = User.create("username": "saint3", "password": "Apple12!", "bio": "Some bio invariably raving about Chuck Norris", "image": "https://media.istockphoto.com/videos/portrait-of-handsome-latino-african-man-video-id1008458450?s=640x640")
u4 = User.create("username": "saint4", "password": "Apple12!", "bio": "Chuck Norris is da bomb", "image": "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u5 = User.create("username": "saint5", "password": "Apple12!", "bio": "Yes, Chuck Norris!", "image": "https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u6 = User.create("username": "saint6", "password": "Apple12!", "bio": "Chuck Norris BABEEEEEEEY", "image": "https://images.pexels.com/photos/1975342/pexels-photo-1975342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u7 = User.create("username": "saint7", "password": "Apple12!", "bio": "No bio here yet!", "image": "https://images.pexels.com/photos/1170261/pexels-photo-1170261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u8 = User.create("username": "saint8", "password": "Apple12!", "bio": "No bio here yet!", "image": "https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u9 = User.create("username": "saint9", "password": "Apple12!", "bio": "No bio here yet!", "image": "https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u10 = User.create("username": "saint10", "password": "Apple12!", "bio": "No bio here yet!", "image": "https://images.pexels.com/photos/9818341/pexels-photo-9818341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
u11 = User.create("username": "saint11", "password": "Apple12!", "bio": "Nuck Chorris", "image": "https://images.pexels.com/photos/3536067/pexels-photo-3536067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
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

Comment.create(comment: "What's this", post_id: 3)
Comment.create(comment: "Fake Comments", post_id: 3)
Comment.create(comment: "everywhere", post_id: 3)
Comment.create(comment: "why am i still here?", post_id: 3)