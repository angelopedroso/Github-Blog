import { Card } from '@/components/Card';
import { github } from '@/lib/github';
import {
  HomeContainer,
  PostCardContainer,
  PostCardHeaderContent,
  PostContainer,
  SearchContainer,
  SearchHeaderContent,
} from '@/styles/pages/home';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <HomeContainer>
      <Card />

      <SearchContainer>
        <SearchHeaderContent>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SearchHeaderContent>

        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostContainer>
        <PostCardContainer>
          <PostCardHeaderContent>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardHeaderContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCardContainer>
        <PostCardContainer>
          <PostCardHeaderContent>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardHeaderContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCardContainer>
        <PostCardContainer>
          <PostCardHeaderContent>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardHeaderContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCardContainer>
        <PostCardContainer>
          <PostCardHeaderContent>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardHeaderContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
        </PostCardContainer>
      </PostContainer>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
