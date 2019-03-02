module Types
  class InterestType < Types::BaseObject
    field :id, ID, null: false
    field :topic, String, null: true
    field :users,[Types::UserType], null: true
  end
end
