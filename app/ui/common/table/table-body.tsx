import { NextPage } from 'next'
import TableRow from './table-row'

interface Props {
  labels: string[]
  data: any[]
}

const TableBody: NextPage<Props> = ({ labels, data }) => {
  return (
    <tbody>
      {data.map((row: any, i: number) =>
        <TableRow 
          key={i} 
          row={row}
          labels={labels}
        />
      )}
    </tbody>
  )
}

export default TableBody