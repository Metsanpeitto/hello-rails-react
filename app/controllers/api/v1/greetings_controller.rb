class Api::V1::GreetingsController < ApiController
  # before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:index]

  def index
    render json: Greeting.all
  rescue ActiveRecord::RecordNotFound
    render json: {}, status: :not_found
  end
end
