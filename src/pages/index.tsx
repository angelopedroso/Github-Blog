import { Card } from '@/components/Card';
import { UserProps } from '@/interface/userInterface';
import { github } from '@/lib/github';
import {
  HomeContainer,
  PostCardContainer,
  PostCardHeaderContent,
  PostContainer,
  SearchContainer,
  SearchHeaderContent,
} from '@/styles/pages/home';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export default function Home({ userInfo, userRepos }: UserProps) {
  return (
    <HomeContainer>
      <Card userInfo={userInfo} />
      <SearchContainer>
        <SearchHeaderContent>
          <h2>Publicações</h2>
          <span>
            {userInfo?.totalRepos === 1
              ? '1 publicação'
              : `${userInfo?.totalRepos} publicações`}
          </span>
        </SearchHeaderContent>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostContainer>
        {userRepos?.map((repos) => {
          return (
            <Link key={repos.id} href={`/posts/${repos.id}`}>
              <PostCardContainer>
                <PostCardHeaderContent>
                  <h2>{repos.name}</h2>
                  <span>
                    {formatDistanceToNow(Date.parse(repos.pushedAt), {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </span>
                </PostCardHeaderContent>
                <p>
                  {repos.description
                    ? repos.description
                    : 'Repository has no description.'}
                </p>
              </PostCardContainer>
            </Link>
          );
        })}
      </PostContainer>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    '0': { data: userData },
    '1': { data: repoData },
  } = await Promise.all([
    await github.request('GET /users/{username}', {
      username: String(process.env.GITHUB_USERNAME),
    }),
    await github.request('GET /users/{username}/repos', {
      username: String(process.env.GITHUB_USERNAME),
    }),
  ]);

  const formattedRepos = repoData
    .map((repos) => {
      return {
        id: repos.id,
        name: repos.name,
        description: repos.description,
        pushedAt: repos.pushed_at,
      };
    })
    .sort((a, b) => {
      return Date.parse(String(b.pushedAt)) - Date.parse(String(a.pushedAt));
    });

  return {
    props: {
      userInfo: {
        user: userData.login,
        name: userData.name,
        bio: userData.bio,
        profileUrl: userData.html_url,
        avatarUrl: userData.avatar_url,
        totalFollowers: userData.followers,
        totalRepos: userData.public_repos,
        company: userData.company,
      },

      userRepos: formattedRepos,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
