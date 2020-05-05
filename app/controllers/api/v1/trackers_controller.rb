module Api 
    module V1
        class TrackersController < ApplicationController
            def index
                if user_signed_in? 
                    render json: current_user.trackers
                else 
                    render json:{}, status: 401
                end
            end

            def create 
                if user_signed_in?
                    if tracker = current_user.trackers.create(tracker_params)
                        render json: tracker, status: :created 
                    else 
                        render json: tracker.errors, status: 400 
                    end 
                else 
                    render json: {}, status: 401 
                end
            end
            
            private

            def tracker_params
                params.require(:tracker).permit(:user_id, :challenge_id, :sunday_reps, :monday_reps, :tuesday_reps, :wednesday_reps, :thursday_reps, :friday_reps, :saturday_reps)
            end 
        end
    end 
end 
