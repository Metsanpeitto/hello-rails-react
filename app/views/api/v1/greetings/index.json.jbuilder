json.greetings @greetings do |greeting|
  json.id greeting.id
  json.user do
    json.id greeting.user.id
    json.name greeting.user.name
  end
  json.content greeting.content
  json.created_at greeting.created_at
end
