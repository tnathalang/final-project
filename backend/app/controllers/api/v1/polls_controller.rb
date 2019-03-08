class Api::V1::PollsController < ApplicationController
    def create
      puts params
      @poll = Poll.new(poll_params) #create new poll w title and description as params

      if @poll.save
        render json: Poll.all #return the json pbject
      else
        render json: @poll.errors
      end

    end

    private
    def poll_params
      params.require(:poll).permit(
        :host_id,
        :title,
        :description
      )
    end
end
