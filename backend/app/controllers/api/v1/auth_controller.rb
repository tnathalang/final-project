class Api::V1::AuthController < ApplicationController
    def create
        user = User.find_by(params[:email])
        if user && user.authenticate(params[:password])
          created_jwt = issue_token({id: user.id})
          #this sets a signed cookie.
          cookies.signed[:jwt] = {value:  created_jwt, httponly: true}
          render json: {username: user.username}
        else
          render json: {
            error: 'Username or password incorrect'
          }, status: 404
        end
      end

      def destroy
        cookies.delete(:jwt)
      end
end
