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
import Link from 'next/link';

export function CardPost() {
  return (
    <CardContainer>
      <CardHeaderContainer>
        <Link href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href="#">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </CardHeaderContainer>
      <CardDescriptionContainer>
        <h1>JavaScript data types and data structures</h1>
        <CardPostDetails>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            angelopedroso
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </CardPostDetails>
      </CardDescriptionContainer>
    </CardContainer>
  );
}
