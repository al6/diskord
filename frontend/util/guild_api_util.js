export const create = formData =>
  $.ajax({
    method: "POST",
    url: "/api/guilds",
    data: formData,
    contentType: false,
    processData: false
  });
