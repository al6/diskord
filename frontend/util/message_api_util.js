export const createMessage = formData =>
  $.ajax({
    method: "POST",
    url: "/api/messages",
    data: formData,
    contentType: false,
    processData: false
  });

export const fetchMessages = channel_id =>
  $.ajax({
    method: "GET",
    url: `/api/channels/${channel_id}/messages`
  });
