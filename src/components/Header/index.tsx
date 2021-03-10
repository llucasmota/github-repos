import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Header } from './styles';

interface PropsHeader {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
}

const HeaderComponent = ({ title, icon: Icon }: PropsHeader) => (
  <Header>
    {Icon && <Icon size={40} color="black" />}
    <h1>{title}</h1>
  </Header>
);

export default HeaderComponent;
