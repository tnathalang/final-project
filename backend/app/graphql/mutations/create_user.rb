module Mutations
  class CreateUser < GraphQL::Schema::RelayClassicMutation
   # TODO: define return fields
    # field :post, Types::PostType, null: false
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :email, String, required: true
    argument :password, Integer, required: true
    
    # TODO: define arguments
    # argument :name, String, required: true
    
    field :user, Types::UserType, null: false 
    field :errors, [String], null: false 

    def resolve(first_name:, last_name:, email:, password:)
      user = User.new(first_name: first_name, last_name: last_name, email: email, password: password )
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
