import { Container } from "./style";
import { Film } from "../../store/ducks/films/types";

interface OwnProps {
  film: Film
}

export default function FilmItem (props: OwnProps) {
  return (
    <Container>
      <h2 className="title">{props.film.title} - {props.film.release_date}</h2>
      <h3 className="original-title">{props.film.original_title} - {props.film.original_title_romanised}</h3>
      <p className="description">{props.film.description}</p>
      <footer>
        <span className="director">Director: {props.film.director}</span>
        <span className="duration">{props.film.running_time}min</span>
      </footer>
    </Container>
  )
}