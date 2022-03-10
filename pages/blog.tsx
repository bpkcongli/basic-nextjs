import LayoutPage from '../components/LayoutPage';

interface Note {
  id: string,
  content: string,
  date: string,
  important: boolean,
  userId: string,
}

interface BlogProps {
  notes: Note[],
}

export default function Blog(props: BlogProps) {
  const { notes } = props;

  return (
    <LayoutPage pageTitle="Blog">
      <div>
        <h1>Blogs</h1>
        <ul>
          {notes.map(({ id, content, date }) => <li key={id}>{content} - {date}</li>)}
        </ul>
      </div>
    </LayoutPage>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fullstackopen-notes-apps.herokuapp.com/api/notes');
  const { notes } = await res.json();

  return {
    props: {
      notes,
    },
  };
};
