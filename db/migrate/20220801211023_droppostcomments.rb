class Droppostcomments < ActiveRecord::Migration[7.0]
  def change
    drop_table :post_comments 
  end
end
