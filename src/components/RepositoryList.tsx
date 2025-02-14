import { useEffect, useState } from "react";
import { RepositorioItem } from "./repositorioItem";

//https://api.github.com/users/EdsonGaspar/repos

const RepositoryItemProps = {
  name: "Unform",
  description: "descrição da unform",
  html_url: "Caminho",
};

export function RepositoryList() {
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EdsonGaspar/repos")
      .then((response) => response.json())
      .then((data) => setRepositorio(data));
  }, []);

  console.log(repositorio);

  return (
    <section className="text-base font-sans text-[rgb(18,18,20)]">
      <h1 className="text-2xl font-bold mb-2">Lista de repositórios</h1>
      <ul className="flex flex-col space-y-4">
        <RepositorioItem
          nome={RepositoryItemProps.name}
          description={RepositoryItemProps.description}
          html_url={RepositoryItemProps.html_url}
        />
        <RepositorioItem
          nome={RepositoryItemProps.name}
          description={RepositoryItemProps.description}
          html_url={RepositoryItemProps.html_url}
        />
        <RepositorioItem
          nome={RepositoryItemProps.name}
          description={RepositoryItemProps.description}
          html_url={RepositoryItemProps.html_url}
        />
      </ul>
    </section>
  );
}
