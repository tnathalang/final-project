class Api::V1::UsersController < ApplicationController
    # so
    def index
        users = User.all
        render json: users
    end
end
