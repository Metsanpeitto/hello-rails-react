class Api::V1::GreetingsController < ApiController
  def index
    render json: Greeting.all
  end
end
