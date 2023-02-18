import { pagination, PostHomeContainer } from '@/styles/pages/home';
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
    if (filteredList.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filteredList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredList.length / itemsPerPage));
    } else if (userRepos) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(userRepos.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(userRepos.length / itemsPerPage));
    }
  }, [itemOffset, userRepos, filteredList]);

  const handlePageClick = (event: Paginate) => {
    if (userRepos) {
      const newOffset = (event.selected * itemsPerPage) % userRepos.length;

      setItemOffset(newOffset);
    }
  };

  return (
    <>
      <PostHomeContainer>
        {currentItems.map((repos) => {
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
