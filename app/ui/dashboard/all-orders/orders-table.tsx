import { OrderResponse } from "@/app/lib/types/orderTypes"
import { formatDate } from "@/app/lib/utils"
import { ROUTES } from "@/app/lib/constants/routes"
import Table from "../../common/table/table"
import Link from "next/link"
import { useAppDispatch } from "@/redux/store"
import { changeOrderStatus } from "@/redux/features/orders/orderAdminThunk"

export default function OrdersTable({
  orders,
}: {
  orders: OrderResponse[]
}) {
  const dispatch = useAppDispatch()

  const toggleStatus = (orderData: OrderResponse) => {
    dispatch(changeOrderStatus({ orderId: orderData.id, state: orderData.status, orderData}))
  }

  return (
    <Table
      data={orders.map(order => {
        return {
          orderId: order.id,
          name: (
            !order.user.first_name && !order.user.last_name ?
            <span 
              className="text-gray-500"
            >
              No name
            </span> :
            order.user.first_name + ' ' + order.user.last_name
          ),
          date: formatDate(order.created_at),
          totalPrice: `${order.totalOrderPrice} EGP`,
          status: (
            <span className={`${
              order.status === 'pending'
                ? 'text-yellow-600'
                : order.status === 'delivered'
                ? 'text-green-600'
                : 'text-red-600'
            }`}>
              {order.status}
            </span>
          ),
          actions: (
            <div className="inline-block">
              <div className="flex items-center divide-x-2 text-center text-xs">
                <Link
                  href={ROUTES.DASHBOARD.ORDER_DETAILS(order.id)} 
                  className="text-blue-500 hover:underline pr-1"
                >
                  View
                </Link>
                <button
                  className="text-blue-500 hover:underline flex-wrap w-16 pl-1"
                  onClick={() => toggleStatus(order)}
                >
                  {order.status === 'pending' ? 'Mark as Delivered' : 'Mark as Pending'}
                </button>
              </div>
            </div>
          ),
          governorate: order.address.city,
        }
      })}
    />
  )
}