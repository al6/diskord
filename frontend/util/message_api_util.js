export const createMessage = message =>
  $.ajax({
    method: "POST",
    url: "/api/messages",
    data: { message }
  });

export const fetchMessages = channel_id =>
  $.ajax({
    method: "GET",
    url: `/api/channels/${channel_id}/messages`
  });
