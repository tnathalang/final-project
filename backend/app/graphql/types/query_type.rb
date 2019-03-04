module Types
  class QueryType < Types::BaseObject
    
    field :users, [Types::UserType], null: false
    field :interests, [Types::InterestType], null: false

    def users
      User.all
    end

    field :user, Types::UserType, null: false do
      argument :firstName, String, required: true
    end

    def user(args)
      User.find_by(first_name: args[:first_name])
    end
 
    def interests
      Interest.all
    end
    
    field :interest, Types::InterestType, null: false do
      argument :id, ID, required: true
    end

    def interest(id:)
      Interest.find(id)
    end

  end
end
