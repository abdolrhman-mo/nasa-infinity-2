import { formatKeyToText } from '@/app/lib/utils'
import { NextPage } from 'next'

interface Props { 
  data: any
  label: string 
}

const TableData: NextPage<Props> = ({ data, label }) => {
  return (
    <td className="py-2 px-4 block md:table-cell">
      <div className="md:hidden font-semibold inline-block pr-2 capitalize">{formatKeyToText(label)}:</div>
      {data}
    </td>
  )
}

export default TableData