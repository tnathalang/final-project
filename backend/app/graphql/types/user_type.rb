module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: true
    field :last_name, String, null: true
    field :email, String, null: true
    field :interests, [Types::InterestType], null: true
    field :interests_count, Integer, null: true
  end

  def interest_count
    interests.size
  end

end
