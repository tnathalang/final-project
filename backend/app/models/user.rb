class User < ApplicationRecord
    has_secure_password
    has_secure_token :auth_token
    
    validates :email, presence: true,
                  uniqueness: { case_sensitive: false },
                  format: /@/
   
    has_and_belongs_to_many :interests
    has_and_belongs_to_many :polls 
    has_many :hosted_polls, class_name: "Poll", foreign_key: "host_id"

    #uses for logout
    def invalidate_token
        self.update_columns(auth_token: nil)
      end
      
      #built-it authenticate method with bcrypt with hashes password 
    def self.valid_login?(email, password)
        user = find_by(email: email)
        if user && user.authenticate(password)
          user
        end
     end

end
