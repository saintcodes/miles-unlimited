class PostsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    post = Post.all
    render json: post.to_json(include: :user), status: :ok
  end
  
  def show
    post = Post.find(params[:id])
    render json: post.to_json(include: [:user]), status: :ok
  end

  def update
    post = Post.find(params[:id])
    post.update!(post_params)
    render json: post.to_json(include: [:user]), status: :accepted
  end
  
  def create
    post = Post.create!(post_params)
    render json: post, status: :created
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

private

def post_params
  params.permit(:title, :content, :image, :user_id)
end


end
