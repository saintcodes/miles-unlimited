class CreatePostComments < ActiveRecord::Migration[7.0]
  def change
    create_table :post_comments do |t|
      t.integer :post_id 
      t.integer :user_id 
      t.integer :comment_id
      t.timestamps
    end
  end
end
