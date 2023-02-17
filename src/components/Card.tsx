import {
  CardProfileAboutContainer,
  CardProfileContainer,
  CardProfileInfoContainer,
  CardProfileNameContainer,
} from '@/styles/pages/card';
import Image from 'next/image';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { UserProps } from '@/interface/userInterface';

export function Card({ userInfo }: UserProps) {
  return (
    <CardProfileContainer>
      <Image
        src={userInfo!.avatarUrl}
        alt="Github Profile Picture"
        width={148}
        height={148}
        priority
      />
      <CardProfileInfoContainer>
        <CardProfileNameContainer>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.profileUrl} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </CardProfileNameContainer>
        <p>{userInfo?.bio}</p>
        <CardProfileAboutContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userInfo?.user}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {userInfo?.company ? userInfo?.company : 'Untitled Company'}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {userInfo?.totalFollowers === 1
              ? '1 seguidor'
              : `${userInfo?.totalFollowers} seguidores`}
          </span>
        </CardProfileAboutContainer>
      </CardProfileInfoContainer>
    </CardProfileContainer>
  );
}
