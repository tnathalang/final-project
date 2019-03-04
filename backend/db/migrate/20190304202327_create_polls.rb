class CreatePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.integer :host_id
      t.text :description
      t.string :title

      t.timestamps
    end
    create_join_table :users, :polls
  end
end
