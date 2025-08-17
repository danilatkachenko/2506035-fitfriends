export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: 'client' | 'coach';
  dateOfBirth?: string;
  certificate?: string;
}

export async function registerUser(data: {
  password: string;
  role: string;
  name: string;
  dateOfBirth: undefined;
  location: string;
  email: string;
}) {
  const response = await fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Ошибка при регистрации');
  }

  return response.json();
}
