export const createChannel = channel =>
  $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channel }
  });
