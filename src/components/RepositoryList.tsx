import { RepositorioItem } from "./repositorioItem";

interface RepositoryItemProps {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList({
  name,
  description,
  html_url,
}: RepositoryItemProps) {
  return (
    <section className="text-base font-sans text-[rgb(18,18,20)]">
      <h1 className="text-2xl font-bold mb-2">Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{name}</strong>
          <p>{description}</p>
          <a href={html_url}>{"Acessar repositório"}</a>
        </li>
        <RepositorioItem />
        <RepositorioItem />
        <RepositorioItem />
      </ul>
    </section>
  );
}
