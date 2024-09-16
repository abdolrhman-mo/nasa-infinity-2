import { formatKeyListToText } from '@/app/lib/utils'
import { NextPage } from 'next'

interface Props {
  items: string[]
}

const TableHead: NextPage<Props> = ({ items }) => {
  return (
    <thead className="hidden md:table-header-group bg-gray-200 text-gray-600">
      <tr>
        {formatKeyListToText(items).map(item =>
          <th className="py-2 px-4 text-center capitalize">{item}</th>
        )}
      </tr>
    </thead>
  )
}

export default TableHead