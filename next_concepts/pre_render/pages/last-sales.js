import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [users, setUsers] = useState(props.users);

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users');

  useEffect(() => {
    setUsers(data);
  }, [data]);

  if (!data && !users) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      return {
        props: {
          users: data,
        },
        revalidate: 10,
      };
    });
}
