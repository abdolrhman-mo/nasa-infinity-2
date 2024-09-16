import { NextPage } from 'next'
import TableData from './table-data'

interface Props { 
  row: any 
  labels: string[] 
}

const TableRow: NextPage<Props> = ({ row, labels }) => {
  return (
    <tr className="block md:table-row py-4 md:py-0 border-b border-gray-200 text-center">
      {labels.map((label: any, i: any) =>
        <TableData key={i} data={row[label]} label={labels[i]} />
      )}
    </tr>
  )
}

export default TableRow