class Api::V1::AuthenticationController < ApplicationController
  def create
      puts params
      user = User.find_by(email: params[:email])
      puts user
    if user && user.authenticate(params[:password])
      puts "hello"
      puts user
      auth_token = ::JsonWebToken.encode({user_id: user.id})
      render json: {auth_token: auth_token}, status: :ok
    else
      render json: {error: 'Login Unsuccessful'}, status: :unauthorized
    end
  end
end
