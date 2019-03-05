module Types
  class PollType < Types::BaseObject
    field :id, ID, null: false
    field :host_id, Integer, null: true 
    field :title, String, null: true
    field :description, String, null: true
  end

  def interest_count
    interests.size
  end

end
