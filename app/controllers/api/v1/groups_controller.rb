module Api 
    module V1 
        class GroupsController < ApplicationController
            def index
                groups = Group.all
                render json: groups
            end
        
            def show
                group = Group.find(params[:id])
                render json: group
            end
        
            def new
                group = Group.new
            end
            
        
            def create 
                group = Group.create(group_params)
                
                    if group.save 
                        render json: group
                    else 
                        render :new
                    end 
            end
        
            def edit 
                @group = Group.find(params[:id])
            end 
        
            def update 
                group = Group.find(params[:id])
                if group.update(group_params)
                    redirect_to group_path(group)
                else
                    render :edit
                end 
            end 
            
            def destroy 
                group = Group.find(params[:id])
                group.destroy
                redirect_to groups_path
            end 

            private 

            def group_params 
                params.require(:group).permit(:name)
            end
        end
    end
end 
