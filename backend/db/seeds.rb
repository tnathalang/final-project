
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

    user = User.create first_name: "Mister", last_name: "Meowyagi", email: "mrmeowyagi@cats.com", password: "meowster"
    4.times do
        user.interests << (Interest.all - user.interests).sample
    end

    user.save

    19.times do 
        user = User.create first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password
       4.times do
        user.interests << (Interest.all - user.interests).sample
       end
       user.save
    end 

puts "Seed process completed"



