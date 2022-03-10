// import { useRouter } from 'next/router';
import LayoutPage from '../../components/LayoutPage';

interface IContext {
  params: {
    id: string,
  }
}

interface Blog {
  title: string,
  author: string,
  url: string,
  likes: number,
  user: {
    username: string,
    name: string,
    id: string,
  },
  comments: Array<{
    content: string,
    id: string,
  }>,
  id: string,
}

export default function UsersDetail(props: {blog: Blog}) {
  // const router = useRouter();
  // const { id } = router.query;
  const { blog } = props;
  const {
    title, author, url, likes, user, comments,
  } = blog;

  return (
    <LayoutPage pageTitle="Users Detail">
      <div>
        <h2>Users Detail</h2>
        <h3>{title} by {author}</h3>
        <a href={url}>{url}</a>
        <p>Total likes: {likes}</p>
        <p>Added by: {user.name}</p>
        {comments.length === 0
          ? <p>No comments found.</p>
          : (
            <ul>
              {comments.map(({ content, id }) => <li key={id}>{content}</li>)}
            </ul>
          )}
      </div>
    </LayoutPage>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3003/api/blogs');
  const blogs: Array<any> = await res.json();
  const paths = blogs.map((blog) => ({
    params: {
      id: blog.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: IContext) => {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3003/api/blogs/${id}`);
  const blog: Blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};
