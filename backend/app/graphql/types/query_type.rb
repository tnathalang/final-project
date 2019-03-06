module Types
  class QueryType < Types::BaseObject

    field :users, [Types::UserType], null: false
    field :interests, [Types::InterestType], null: false
    field :polls, [Types::PollType], null: false

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

    def polls
      Poll.all
    end

    field :poll, Types::PollType, null: false do
      argument :id, ID, required: true
    end

    def poll(id:)
      Poll.find(id)
    end

  end
end
