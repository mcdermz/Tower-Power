class CreateTower < ActiveRecord::Migration[5.1]
  def change
    create_table :towers do |t|
      t.string :name, :required => true
      t.string :user_id, :required => true
    end
  end
end
