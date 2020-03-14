Member.delete_all
Guild.delete_all
GuildMembership.delete_all

require 'open-uri'

albert = Member.create!(email: "albert@a.com", username: "albert", password: "hunter2")
dommy  = Member.create!(email: "dt@a.com", username: "dommy tuek", password: "hunter2")
zalvin = Member.create!(email: "zalvin@a.com", username: "zalvin ablan", password: "hunter2")
tjfan  = Member.create!(email: "tjfan@a.com", username: "trader joes fanatic", password: "hunter2")

aA     = Guild.create!(name: "App Academy", owner_id: dommy.id)
bf     = Guild.create!(name: "Bleats Fans", owner_id: zalvin.id)
hrg    = Guild.create!(name: "Hidden Ruby Gem", owner_id: zalvin.id)
sac    = Guild.create!(name: "Sleep And Code", owner_id: albert.id)
nyc    = Guild.create!(name: "New York City", owner_id: albert.id)
sf    = Guild.create!(name: "San Francisco", owner_id: albert.id)
tjs  = Guild.create!(name: "Trader Joes Worshippers", owner_id: tjfan.id)

dm_membership = DmMembership.create(first_member_id: albert.id, second_member_id: dommy.id)
message = Message.create(author_id: albert.id, channel_id: dm_membership.channel_id, body: "Thanks for checking out my project!")
welcome_gif = File.open('app/assets/images/welcome.gif')
message.image.attach(io: welcome_gif, filename: 'welcome.gif')

aA_emblem = File.open('app/assets/images/aalogo.png')
aA.emblem.attach(io: aA_emblem, filename: 'aalogo.png')

nyc_emblem = File.open('app/assets/images/NYC.jpg')
nyc.emblem.attach(io: nyc_emblem, filename: 'NYC.jpg')

sf_emblem = File.open('app/assets/images/sanfran.jpeg')
sf.emblem.attach(io: sf_emblem, filename: 'sanfran.jpeg')

tj_logo = File.open('app/assets/images/tj_logo.png')
tjs.emblem.attach(io: tj_logo, filename: 'tj_logo.png')

dommy_nyc = GuildMembership.create(member_id: dommy.id, guild_id: nyc.id)
dommy_sf = GuildMembership.create(member_id: dommy.id, guild_id: sf.id)
dommy_tj = GuildMembership.create(member_id: dommy.id, guild_id: tjs.id)
zalvin_aa  = GuildMembership.create(member_id: zalvin.id, guild_id: aA.id)
zalvin_bf  = GuildMembership.create(member_id: zalvin.id, guild_id: bf.id)