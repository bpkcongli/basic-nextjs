import { useRouter } from 'next/router';
import LayoutPage from '../../components/LayoutPage';

interface IUsersProps {
  blogs: Array<any>,
}

export default function Users(props: IUsersProps) {
  const { blogs } = props;
  const router = useRouter();

  return (
    <LayoutPage pageTitle="Users">
      <div>
        <h1>Users</h1>
        <ul>
          {blogs.map(({ id, title, author }) => (
            <li key={id}>
              {title} - {author}
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
  const res = await fetch('http://localhost:3003/api/blogs');
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
};
