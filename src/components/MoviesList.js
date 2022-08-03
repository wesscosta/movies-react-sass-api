import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title} />)}
            {/* posso passar a de 3 formas as propriedades, explicida uma por uma id={} title={}, 
            ou o objeto movie por completo ou por meio de spreed operator ""..."" */}

        </ul>
    </section>
);