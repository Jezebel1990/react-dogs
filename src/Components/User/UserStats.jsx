import React from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const UserStats = () => {
const {data, error, loading, request} = useFetch();

React.useEffect(() => {
  async function getData() {
  const { url, options } = STATS_GET();
  await request(url, options)
}
getData();
}, [request]);


if(loading) return <Loading />
if(error) return <Error error={error} />
  return (
    <div>
      <Head title="Estatísticas"/>
      Estatísticas
    </div>
  )
}

export default UserStats;
