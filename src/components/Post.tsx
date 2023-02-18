import { PostCardContainer, PostCardHeaderContent } from '@/styles/pages/home';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Link from 'next/link';

interface PostProps {
  dataRepo: {
    id?: number;
    name: string;
    description: string;
    pushedAt: string;
  };
}

export const Post = ({ dataRepo }: PostProps) => {
  return (
    <Link href={`/posts/${dataRepo.name}`}>
      <PostCardContainer>
        <PostCardHeaderContent>
          <h2>{dataRepo.name}</h2>
          <span>
            {formatDistanceToNow(Date.parse(dataRepo.pushedAt), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </PostCardHeaderContent>
        <p>
          {dataRepo.description
            ? dataRepo.description
            : 'Repository has no description.'}
        </p>
      </PostCardContainer>
    </Link>
  );
};
