import { NextPage } from 'next'
import TableHead from './table-head'
import TableBody from './table-body'

interface Props {
  data: any[]
}

const Table: NextPage<Props> = ({ data }) => {

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  let headerss = Object.keys(data[0])

  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full bg-white text-sm">
        <TableHead
          items={headerss}
        />
        <TableBody labels={headerss} data={data} />
      </table>
    </div>
  )
}

export default Table