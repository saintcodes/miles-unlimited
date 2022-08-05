class AddCommentsToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :comment_id, :integer
  end
end
