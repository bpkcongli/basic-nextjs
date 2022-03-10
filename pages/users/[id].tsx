import LayoutPage from '../../components/LayoutPage';

interface IContext {
  params: {
    id: string,
  }
}

interface Person {
  id: string,
  name: string,
  number: string,
}

export default function UsersDetail(props: {person: Person}) {
  const { person } = props;
  const { name, number } = person;

  return (
    <LayoutPage pageTitle="Users Detail">
      <div>
        <h2>Users Detail</h2>
        <h3>{number} by {name}</h3>
      </div>
    </LayoutPage>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fullstackopen-phonebookapps.herokuapp.com/api/persons');
  const persons: Person[] = await res.json();
  const paths = persons.map((person) => ({
    params: {
      id: person.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IContext) => {
  const { id } = context.params;
  const res = await fetch(`https://fullstackopen-phonebookapps.herokuapp.com/api/persons/${id}`);
  const person: Person = await res.json();

  return {
    props: {
      person,
    },
  };
};
