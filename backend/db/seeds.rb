
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Interest.destroy_all

puts "users were being burn alive"
puts "Resurrecting a better version of the users"

20.times do
    user = User.create first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email
end 

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

puts "Seed process completed"



