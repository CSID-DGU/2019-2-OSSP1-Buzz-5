const users = [
  { email: 'kim@test.com', password: '123456', name: 'Kim' },
  { email: 'lee@test.com', password: '456789', name: 'Lee' },
  { email: 'park@test.com', password: '789012', name: 'Park' }
]

export function signIn({ email, password }) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}