class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.string :topic
      

      t.timestamps
    end
    create_join_table :users, :interests
    
  end
end
