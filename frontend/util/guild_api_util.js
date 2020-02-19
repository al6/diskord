export const create = guild =>
  $.ajax({
    method: "POST",
    url: "/api/guilds",
    data: { guild }
  });
