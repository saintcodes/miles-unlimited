class CreatePostReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :post_replies do |t|
      t.integer :post_id
      t.integer :comment_id
      t.integer :user_id
      t.timestamps
    end
  end
end
