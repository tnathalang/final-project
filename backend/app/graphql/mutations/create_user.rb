module Mutations
  class CreateUser < GraphQL::Schema::RelayClassicMutation
   # TODO: define return fields
    # field :post, Types::PostType, null: false
    argument :name, String, required: true
    
    # TODO: define arguments
    # argument :name, String, required: true
    
    field :user, Types::UserType, null: false 
    field :errors, [String], null: false 

    def resolve(name:)
      user = User.new(name: name)
      if user.save
        {
          user: user,
          errors:[],
        }
      else
        {
          user: nil,
          errors: user.errors.full_messages
        }
      end
    end
  end
end
