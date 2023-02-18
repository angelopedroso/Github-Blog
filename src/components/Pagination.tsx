import { pagination, PostHomeContainer } from '@/styles/pages/home';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Post } from './Post';

interface Repo {
  id: number;
  name: string;
  description: string;
  pushedAt: string;
}

interface ReposProps {
  userRepos?: Repo[];

  filteredList: Repo[];
}

interface Paginate {
  selected: number;
}

export function Pagination({ userRepos, filteredList }: ReposProps) {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<Repo[]>([]);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    if (userRepos) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(userRepos?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(userRepos?.length / itemsPerPage));
    }
  }, [itemOffset, userRepos]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: Paginate) => {
    const newOffset = (event.selected * itemsPerPage) % userRepos!.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PostHomeContainer>
        {filteredList.length === 0
          ? currentItems.map((repos) => {
              return (
                <Post
                  key={repos.id}
                  dataRepo={{
                    name: repos.name,
                    pushedAt: repos.pushedAt,
                    description: repos.description,
                  }}
                />
              );
            })
          : filteredList.map((repos) => {
              return (
                <Post
                  key={repos.id}
                  dataRepo={{
                    name: repos.name,
                    pushedAt: repos.pushedAt,
                    description: repos.description,
                  }}
                />
              );
            })}
      </PostHomeContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel="⯈"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="⯇"
        className={pagination()}
      />
    </>
  );
}
