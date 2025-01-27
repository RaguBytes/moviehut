import { useSearchParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { Card } from "../components";

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const {data: movies} = useFetch(apiPath, queryTerm);

  useEffect(()=> {
    document.title = `Search result for ${queryTerm}`;
  })

  return (
    <main className="container">
        <h5 className="border-bottom text-success py-2">{movies.length == 0 ? `Movies not found for given search: ${queryTerm}` : `Results for ${queryTerm}`}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
            {
              movies && movies.map((movie) => {
                return <Card key={movie.id} movie={movie} />
              })
            }
        </div>
    </main>
  )
}
