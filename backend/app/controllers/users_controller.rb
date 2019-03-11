class UsersController < ApiController
    before_action :require_login, except: [:create]

      def create
          user = User.new(first_name: params[:first_name],email: params[:email], last_name: params[:last_name], password: params[:password])
          user.save
          render json: {token:user.auth_token}
        # TODO: error handling
        rescue Exception
          puts "Houston, we got a problem"
      end
  
      def index
            
            users = User.where.not(id: authenticate_token.id).as_json(only:[:id, :first_name, :last_name, :email], include: {interests: {only: [:topic] }})
            render json: users
      end
  end

