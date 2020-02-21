Member.delete_all
Guild.delete_all
GuildMembership.delete_all
dommy  = Member.create!(email: "dt@a.com", username: "dommy tuek", password: "hunter2")
zalvin = Member.create!(email: "zalvin@a.com", username: "zalvin ablan", password: "hunter2")
albert = Member.create!(email: "albert@a.com", username: "albert", password: "hunter2")
# tjfan  = Member.create!(email: "tjfan@a.com", username: "trader joes fanatic", password: "hunter2")
# pf  = Member.create!(email: "pf@a.com", username: "pizza fan", password: "hunter2")
# tjfan  = Member.create!(email: "tjfan@a.com", username: "tjfan", password: "hunter2")

aA     = Guild.create!(name: "App Academy", owner_id: dommy.id)
aai    = Guild.create!(name: "App Academy Instructors", owner_id: dommy.id)
bf     = Guild.create!(name: "Bleats Fans", owner_id: dommy.id)
hrg    = Guild.create!(name: "Hidden Ruby Gem", owner_id: zalvin.id)
sac    = Guild.create(name: "Sleep And Code", owner_id: albert.id)
# tjs    = Guild.create!(name: "Trader Joes", owner_id: tjfan.id)

zalvin_aa = GuildMembership.create(member_id: zalvin.id, guild_id: aA.id)
zalvin_aai = GuildMembership.create(member_id: zalvin.id, guild_id: aai.id)
zalvin_bf = GuildMembership.create(member_id: zalvin.id, guild_id: bf.id)