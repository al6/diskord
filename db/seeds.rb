Member.delete_all
Guild.delete_all
GuildMembership.delete_all
dommy = Member.create!(email: "dommy@a.com", username: "tommy", password: "hunter2")
trader_joes_fanatic = Member.create!(email: "tjfan1@a.com", username: "tjfan1", password: "hunter2")
zalvin = Member.create!(email: "zalvin@a.com", username: "zalvin", password: "hunter2")
albert = Member.create!(email: "albert@a.com", username: "albert", password: "hunter2")
aA = Guild.create!(name: "App Academy", owner_id: dommy.id)
aA_instructors = Guild.create!(name: "App Academy Instructors", owner_id: dommy.id)
trader_joes = Guild.create!(name: "Trader Joes", owner_id: trader_joes_fanatic.id)
hidden_ruby_gem = Guild.create!(name: "Hidden Ruby Gem", owner_id: zalvin.id)
bleats_fan = Guild.create!(name: "Bleats Fans", owner_id: dommy.id)
sleep_and_code = Guild.create(name: "Sleep and Code", owner_id: albert.id)