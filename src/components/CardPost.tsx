import {
  CardContainer,
  CardDescriptionContainer,
  CardHeaderContainer,
  CardPostDetails,
} from '@/styles/pages/cardpost';

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Link from 'next/link';

interface ContentProps {
  content: {
    name: string;
    owner: string;
    url: string;
    description?: string;
    date: string;
    commitTotal: number | string;
  };
}

export function CardPost({ content }: ContentProps) {
  return (
    <CardContainer>
      <CardHeaderContainer>
        <Link href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href={content.url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </CardHeaderContainer>
      <CardDescriptionContainer>
        <h1>{content.name}</h1>
        <CardPostDetails>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {content.owner}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {content.date}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {content.commitTotal == 0
              ? 'Sem commits'
              : `${content.commitTotal} commits`}
          </span>
        </CardPostDetails>
      </CardDescriptionContainer>
    </CardContainer>
  );
}
