import { useRouter } from 'next/router';
import LayoutPage from '../../components/LayoutPage';

interface IPerson {
  id: string,
  name: string,
  number: string,
}

interface IPersonsProps {
  persons: IPerson[],
}

export default function Users(props: IPersonsProps) {
  const { persons } = props;
  const router = useRouter();

  return (
    <LayoutPage pageTitle="Users">
      <div>
        <h1>Users</h1>
        <ul>
          {persons.map(({ id, name, number }) => (
            <li key={id}>
              {name} - {number}
              <br />
              <button type="button" onClick={() => router.push(`/users/${id}`)}>Go to Details</button>
            </li>
          ))}
        </ul>
      </div>
    </LayoutPage>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://fullstackopen-phonebookapps.herokuapp.com/api/persons');
  const persons = await res.json();

  return {
    props: {
      persons,
    },
  };
};
