class User < ApplicationRecord
    has_and_belongs_to_many :interests

    has_and_belongs_to_many :polls 
    has_many :hosted_polls, class_name: "Poll", foreign_key: "host_id"
end
