class TagsController < ApplicationController

    def show 
        tag = Tag.find(params[:id])
        render json: tag
    end 


    def create 
        tag = Tag.create!(name: params[:name])
        render json: tag, status: :created 
    end
end
