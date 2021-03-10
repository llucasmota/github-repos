import React, { useState } from 'react';
import { Container, Form, ContainerList, Lista } from './styles';
import { AiFillGithub } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import api from '../../services/api';
import HeaderComponent from '../../components/Header';
import ListRepositories from '../../components/ListRepositories';
import { toast } from 'react-toastify';

export interface ResponseRepoData {
  id: number;
  full_name: string;
  owner: { avatar_url: string };
  url: string;
  private: boolean;
  html_url: string;
}

const Home = () => {
  const [inputUser, setInputUser] = useState('');
  const [repos, setRepos] = useState<ResponseRepoData[]>([]);
  const [error, setError] = useState(false);

  const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputUser.length === 0) {
      return setError(true);
    }
    const response = await api.get<ResponseRepoData[]>(
      `users/${inputUser}/repos`
    );
    const dados = response.data.filter((item) => item.private === false);
    if (!dados.length) {
      setError(true);
    } else {
      setError(false);
      setRepos(dados);
      setInputUser('');
    }
  };

  return (
    <Container>
      <HeaderComponent title="Github Repos" icon={AiFillGithub} />
      <main>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Informe o usuário do Github"
            name="user"
            value={inputUser}
            onChange={handleInputUser}
          />
          <button type="submit">Confirmar</button>
        </Form>
        <ContainerList>
          {repos.length > 0 && (
            <ul>
              {repos.map((item) => (
                <ListRepositories key={item.id} data={item} icon={FiGithub} />
              ))}
            </ul>
          )}
          {error && (
            <h1 style={{ color: 'red' }}>
              Não foram encontrados repositórios para o usuário informado ou o
              usuário não possui repositórios públicos
            </h1>
          )}
        </ContainerList>
      </main>
    </Container>
  );
};

export default Home;
