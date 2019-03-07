class User < ApplicationRecord
    has_secure_password
    
    validates :email, presence: true,
                  uniqueness: { case_sensitive: false },
                  format: /@/
   
    has_and_belongs_to_many :interests

    has_and_belongs_to_many :polls 
    has_many :hosted_polls, class_name: "Poll", foreign_key: "host_id"
end
