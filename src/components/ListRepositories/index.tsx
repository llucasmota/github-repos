import React from 'react';
import { ResponseRepoData } from '../../pages/Home/index';
import { IconBaseProps } from 'react-icons';
import { FiGithub } from 'react-icons/fi';
import { ItemList } from './styles';

interface List {
  data: ResponseRepoData;
  icon: React.ComponentType<IconBaseProps>;
}

const ListRepositories = ({ data, icon: Icon }: List) => {
  return (
    <ItemList key={data.id}>
      {Icon ? <Icon size={50} /> : <FiGithub size={50} />}
      <a href={data.html_url}>
        <strong>{data.full_name}</strong>
      </a>
    </ItemList>
  );
};

export default ListRepositories;
