class CreateTrackers < ActiveRecord::Migration[6.0]
  def change
    create_table :trackers do |t|
      t.integer :sunday_reps, default: 0
      t.integer :monday_reps, default: 0
      t.integer :tuesday_reps, default: 0
      t.integer :wednesday_reps, default: 0
      t.integer :thursday_reps, default: 0
      t.integer :friday_reps, default: 0
      t.integer :saturday_reps, default: 0
      t.references :user, null: false, foreign_key: true
      t.references :challenge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
