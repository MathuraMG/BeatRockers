json.extract! comment, :id, :comments_text, :created_at, :updated_at
json.url comment_url(comment, format: :json)