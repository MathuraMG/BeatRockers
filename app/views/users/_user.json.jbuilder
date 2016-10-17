json.extract! user, :id, :name, :role, :studentID, :created_at, :updated_at
json.url user_url(user, format: :json)