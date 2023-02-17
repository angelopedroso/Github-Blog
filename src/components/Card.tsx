import {
  CardProfileAboutContainer,
  CardProfileContainer,
  CardProfileInfoContainer,
  CardProfileNameContainer,
} from '@/styles/pages/home';
import Image from 'next/image';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profileImg from 'public/profile.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Card() {
  return (
    <CardProfileContainer>
      <Image
        src={profileImg}
        alt="Github Profile Picture"
        width={148}
        height={148}
      />
      <CardProfileInfoContainer>
        <CardProfileNameContainer>
          <h1>Angelo Pedroso</h1>
          <a href="#">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </CardProfileNameContainer>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem
          unde iure velit, tempora voluptate, dolore vero nostrum et ipsum,
          nihil dignissimos rerum modi.
        </p>
        <CardProfileAboutContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            angelopedroso
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Developer
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </CardProfileAboutContainer>
      </CardProfileInfoContainer>
    </CardProfileContainer>
  );
}
