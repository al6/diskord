Member.delete_all
Guild.delete_all
GuildMembership.delete_all
tommy = Member.create!(email: "tommy@fakemail.com", username: "tommy", password: "hunter2")
trader_joes_fanatic = Member.create!(email: "tjfan1@fakemail.com", username: "tjfan1", password: "hunter3")
aA = Guild.create!(name: "App Academy", owner_id: tommy.id)
aA_instructors = Guild.create!(name: "App Academy Instructors", owner_id: tommy.id)
