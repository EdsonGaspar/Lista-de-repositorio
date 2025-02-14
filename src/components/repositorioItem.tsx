import { ComponentProps } from "react";

interface RepositorioItemProps extends ComponentProps<"li"> {
  nome: string;
  description: string;
  html_url: string;
}

export function RepositorioItem({ ...props }: RepositorioItemProps) {
  return (
    <li>
      <h2 className="font-bold text-[18px]">{props.nome}</h2>
      <p className="text-sm">{props.description} </p>
      <a
        href={props.html_url}
        className="text-lg border border-blue-500 text-blue-500 rounded py-1 px-4 mt-4 inline-block"
      >
        Acessar
      </a>
    </li>
  );
}
