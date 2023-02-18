import { CardPost } from '@/components';
import { github } from '@/lib/github';
import { PostContainer, PostReadmeContent } from '@/styles/pages/post';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Commit {
  data: {
    days: number[];
    total: number;
    week: number;
  }[];
}

interface PostProps {
  name: string;
  owner: string;
  url: string;
  description: string;
  date: string;
  commitTotal: number | string;
}

export default function Post(props: PostProps) {
  return (
    <PostContainer>
      <CardPost
        content={{
          ...props,
        }}
      />

      <PostReadmeContent>
        <p>
          {!props.description
            ? 'Not has a description yet!'
            : props.description}
        </p>
      </PostReadmeContent>
    </PostContainer>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const repoName = params!.id;

  const { '0': dataPost, '1': commit } = await Promise.all([
    await github.request('GET /repos/{owner}/{repo}', {
      owner: String(process.env.GITHUB_USERNAME),
      repo: repoName,
    }),
    await github.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
      owner: String(process.env.GITHUB_USERNAME),
      repo: repoName,
    }),
  ]);

  const totalCommit = commit as Commit;

  const total = totalCommit.data.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);

  return {
    props: {
      name: dataPost.data.name,
      url: dataPost.data.html_url,
      description: dataPost.data.description,
      owner: dataPost.data.owner.login,
      date: formatDistanceToNow(Date.parse(dataPost.data.updated_at), {
        locale: ptBR,
        addSuffix: true,
      }),
      commitTotal: total,
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};
