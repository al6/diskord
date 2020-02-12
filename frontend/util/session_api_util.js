export const register = member => (
  $.ajax({
    method: 'POST',
    url: '/api/members',
    data: { member },
  })
);

export const login = member => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {member},
  })
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);