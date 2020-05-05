module Api 
    module V1 
        class GroupsController < ApplicationController
            def index 
                if user_signed_in? 
                    render json: current_user.group
                else 
                    render json: {}, status: 401
                end 
            end

            def create 
                if user_signed_in?
                    if tracker = current_user.group.create(group_params)
                        render json: group, status: :created 
                    else 
                        render json: group.errors, status: 400 
                    end 
                else 
                    render json: {}, status: 401 
                end
            end

            private 

            def group_params 
                params.require(:group).permit(:name)
            end
        end
    end
end 
