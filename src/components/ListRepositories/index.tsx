import React, { useState, useCallback } from 'react';
import { ResponseRepoData } from '../../pages/Home/index';
import { IconBaseProps } from 'react-icons';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ItemList } from './styles';

interface List {
  data: ResponseRepoData;
  icon: React.ComponentType<IconBaseProps>;
  starringFunction(id: number): Boolean;
}

const ListRepositories = ({ data, icon: Icon, starringFunction }: List) => {
  const [isStarring, setStarring] = useState<Boolean>();
  const callStarring = useCallback(
    (id: number) => {
      return starringFunction(id) === true
        ? setStarring(true)
        : setStarring(false);
    },
    [starringFunction]
  );

  return (
    <ItemList key={data.id}>
      {Icon ? <Icon size={50} /> : <FiGithub size={50} />}
      <a href={data.html_url}>
        <strong>{data.full_name}</strong>
      </a>
      <button type="button" onClick={(e) => callStarring(data.id)}>
        {isStarring === true ? (
          <AiFillStar size={20} />
        ) : (
          <AiOutlineStar size={20} />
        )}
      </button>
    </ItemList>
  );
};

export default ListRepositories;
