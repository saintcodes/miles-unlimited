class AddLikesToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :likes, :integer
  end
end
