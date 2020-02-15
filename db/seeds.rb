Member.delete_all
Guild.delete_all
GuildMembership.delete_all
tommy = Member.create!(email: "tommy@fakemail.com", username: "tommy", password: "hunter2")
trader_joes_fanatic = Member.create!(email: "tjfan1@fakemail.com", username: "tjfan1", password: "hunter3")
aA = Guild.create!(name: "App Academy", owner_id: 1)
aA_instructors = Guild.create!(name: "App Academy Instructors", owner_id: 1)
aA_membership = GuildMembership.create!(member_id: 1, guild_id: 1)
aA_instructors_membership = GuildMembership.create!(member_id: 1, guild_id: 2)


