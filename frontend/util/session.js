export const postMember = member => (
  $.ajax({
    method: 'POST',
    url: '/api/members',
    data: { member },
  })
);

export const postSession = member => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { member },
  })
);

export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);