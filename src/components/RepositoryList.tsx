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
    <section>
      <h1 className="text-2xl">Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{name}</strong>
          <p>{description}</p>
          <a href="">{html_url}</a>
        </li>
      </ul>
    </section>
  );
}
