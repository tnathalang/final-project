class UsersController < ApiController
    before_action :require_login, except: [:create]

    def create

        puts params
        user = User.new(first_name: params[:first_name],email: params[:email], last_name: params[:last_name], password: params[:password])
        puts user.inspect
        user.save
        render json: {token:user.auth_token}
      # TODO: error handling
      rescue Exception
        puts "Houston, we got a problem"
    end
  
    def index
      begin
        # request is made to `/user`
        # TODO: fix that
        user = User.find_by_auth_token!(request.headers[:token])
        # don't want to send back the whole user
        render json: {user: {email: user.email}}
      # TODO: error handling
      rescue Exception
        puts Exception
      ensure
        
      end
    end
    
    
    # private
    
    # def user_params
    #   params.require(:user).permit(
    #       :first_name,
    #       :last_name, 
    #       :email, 
    #       :password
    #       )
    # end
    
  end
