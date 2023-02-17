export interface UserProps {
  userInfo?: {
    name: string;
    user: string;
    bio: string;
    profileUrl: string;
    avatarUrl: string;
    totalFollowers: number;
    totalRepos: number;
    company: string | null;
  };

  userRepos?: {
    id: number;
    name: string;
    description: string;
    pushedAt: string;
  }[];
}
