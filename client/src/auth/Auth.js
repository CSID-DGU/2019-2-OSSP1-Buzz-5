const users = [
  { email: 'kim@test.com', password: '111111', name: 'Kim' },
  { email: 'lee@test.com', password: '111111', name: 'Lee' },
  { email: 'park@test.com', password: '111111', name: 'Park' },
  { email: 'seo@test.com', password: '111111', name: 'Seo' },
]

export function signIn( email, password ) {
  console.log(email, password)
  const user = users.find(user => user.email === email && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}