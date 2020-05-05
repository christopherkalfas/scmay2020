module Api 
    module V1
        class ChallengesController < ApplicationController
            def index 
                if user_signed_in? 
                    render json: current_user.challenges
                else 
                    render json: {}, status: 401
                end 
            end

            def create 
                if user_signed_in?
                    if tracker = current_user.challenges.create(challenge_params)
                        render json: challenge, status: :created 
                    else 
                        render json: challenge.errors, status: 400 
                    end 
                else 
                    render json: {}, status: 401 
                end
            end

            private
            def challenge_params 
                params.require(:challenge).permit(:name, :activity_name, :activity_reps, :group_id)
            end 

        end
    end 
end 
