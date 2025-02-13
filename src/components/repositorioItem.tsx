import { ComponentProps } from "react";
import { Counter } from "./counter";

interface RepositorioItemProps extends ComponentProps<"li"> {}

export function RepositorioItem({ ...props }: RepositorioItemProps) {
  return (
    <li>
      <h2 className="font-bold text-[18px]">{props.children}</h2>
      <p>Descrição do repositorio Unform </p>
      <a href="">Acessar Repositoro</a>
      <Counter />
    </li>
  );
}
