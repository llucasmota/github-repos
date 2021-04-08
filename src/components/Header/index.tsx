import React, { useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { Header } from './styles';
import { ThemeContext } from '../../contexts'

interface PropsHeader {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
}

const HeaderComponent = ({ title, icon: Icon }: PropsHeader) => {
  const { themeBlack, changeTheme } = useContext(ThemeContext)
  console.log('themeBlack', themeBlack)


  return (
    <Header theme={themeBlack}>
      {Icon && <Icon size={40} color="black" />}
      <h1>{title}
        <button type="button" onClick={changeTheme}> Tema</button>
      </h1>
    </Header>)

};

export default HeaderComponent;
