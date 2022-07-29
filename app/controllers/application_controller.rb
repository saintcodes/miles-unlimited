class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid


  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: {count: session[:count]}
  end

private

  def render_not_found(invalid)
    render json: {error: "#{invalid.model} not found"}, status: :not_found
  end

  def render_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end


end
