import { Card, Pagination, Post } from '@/components';
import { UserProps } from '@/interface/userInterface';
import { github } from '@/lib/github';
import {
  HomeContainer,
  PostHomeContainer,
  SearchContainer,
  SearchHeaderContent,
} from '@/styles/pages/home';

import { GetStaticProps } from 'next';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormProps = {
  searchRepoFilter: string;
};

interface FilterProp {
  id: number;
  name: string;
  description: string;
  pushedAt: string;
}

export default function Home({ userInfo, userRepos }: UserProps) {
  const { register, reset, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      searchRepoFilter: '',
    },
  });
  let [filteredListRepo, setFilteredListRepo] = useState<FilterProp[]>([]);

  function handleSearchRepoFilter(data: FormProps) {
    if (userRepos) {
      setFilteredListRepo(
        userRepos.filter((repo) => repo.name.includes(data.searchRepoFilter))
      );
    }

    reset();
  }

  return (
    <HomeContainer>
      <Card userInfo={userInfo} />
      <SearchContainer onSubmit={handleSubmit(handleSearchRepoFilter)}>
        <SearchHeaderContent>
          <h2>Publicações</h2>
          <span>
            {userInfo?.totalRepos === 1
              ? '1 publicação'
              : `${userInfo?.totalRepos} publicações`}
          </span>
        </SearchHeaderContent>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('searchRepoFilter')}
        />
      </SearchContainer>

      <Pagination userRepos={userRepos} filteredList={filteredListRepo} />
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
      sort: 'updated',
    }),
  ]);

  const formattedRepos = repoData.map((repos) => {
    return {
      id: repos.id,
      name: repos.name,
      description: repos.description,
      pushedAt: repos.pushed_at,
    };
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
