
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://uifaces.co/api?limit=19&emotion[]=happiness&from_age=18&fto_age=40


User.destroy_all
Interest.destroy_all
puts "Users were being burn alive"



puts "generating interests"

    Interest.create(topic: "Food")
    Interest.create(topic: "Travel")
    Interest.create(topic: "Sports")
    Interest.create(topic: "Cars")
    Interest.create(topic: "Healthy Living")
    Interest.create(topic: "Spicy Cuisine")
    Interest.create(topic: "Gadgets")
    Interest.create(topic: "Apple Products")
    Interest.create(topic: "Android Products")
    Interest.create(topic: "SpaceX")
    Interest.create(topic: "Ruby on Rails")
    Interest.create(topic: "React.JS")
    Interest.create(topic: "JAVA")
    Interest.create(topic: "Video Games")
    Interest.create(topic: "Dogs")
    Interest.create(topic: "Cats")
    Interest.create(topic: "Coffee")
    Interest.create(topic: "Tea")
    Interest.create(topic: "Winter Sports")
    Interest.create(topic: "Swimming")
    Interest.create(topic: "GitHub")
    Interest.create(topic: "Blogging")
    Interest.create(topic: "Outdoor")
    
    
    puts "Resurrecting a better version of the users"

    user = User.create first_name: "Alex", last_name: "Smith", email: "mrmeowyagi@cats.com", password: "meowster", avatar_url: "https://randomuser.me/api/portraits/men/11.jpg"
    interests = [
        Interest.find_by_topic("React.JS"), 
        Interest.find_by_topic("Ruby on Rails"), 
        Interest.find_by_topic("SpaceX"), 
        Interest.find_by_topic("Coffee")
    ]
    user.interests << interests
    user.save

    user = User.create first_name: "Alice", last_name: "Wonder", email: "alicewonder@mail.com", password: "meowster", avatar_url: "https://randomuser.me/api/portraits/women/2.jpg"
    interests = [
        Interest.find_by_topic("React.JS"), 
        Interest.find_by_topic("Spicy Cuisine"), 
        Interest.find_by_topic("Healthy Living"), 
        Interest.find_by_topic("Tea")
    ]
    user.interests << interests
    user.save

    4.times do |t|
        user = User.create first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar_url: "https://randomuser.me/api/portraits/#{t % 2 == 0 ? "women" : "men"}/#{rand(1..60)}.jpg"
        2.times do 
            user.interests << ((interests) - user.interests).sample
        end
        2.times do
            user.interests << (Interest.all - user.interests).sample
        end
        user.save
    end

    19.times do |t|
        user = User.create first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar_url: "https://randomuser.me/api/portraits/#{t % 2 == 0 ? "women" : "men"}/#{rand(1..60)}.jpg"
       4.times do
        user.interests << (Interest.all - user.interests).sample
       end
       user.save
    end 

# puts "Seed process completed"



