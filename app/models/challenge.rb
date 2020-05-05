class Challenge < ApplicationRecord
  belongs_to :group
  has_many :trackers
end
