class LandingsController < ApplicationController
  before_action :set_landing, only: %i[show edit update destroy]
end
