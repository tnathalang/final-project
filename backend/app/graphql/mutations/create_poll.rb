module Mutations
  class CreatePoll < GraphQL::Schema::RelayClassicMutation
   # TODO: define return fields
    # field :post, Types::PostType, null: false
    argument :host_Id, ID, required: false
    argument :title, String, required: true
    argument :description, String, required: true

    # TODO: define arguments
    # argument :name, String, required: true

    field :poll, Types::PollType, null: false
    field :errors, [String], null: false

    def resolve(title:, description:)
      poll = Poll.new(title: title, description: description )
      if poll.save
        {
          poll: poll,
          errors:[],
        }
      else
        {
          poll: nil,
          errors: poll.errors.full_messages
        }
      end
    end
  end
end
