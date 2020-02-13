Member.delete_all
Guild.delete_all
tommy = Member.create!(email: "tommy@fakemail.com", username: "tommy", password: "hunter2")
aA = Guild.create!(name: "App Academy", owner_id: 1)


