export default async function AdminOrdersPage() {
  // Mock data for MVP as schema not yet defined
  const orders = [
    { id: '1', customer: 'Alice', total: 50, status: 'Pending' },
    { id: '2', customer: 'Bob', total: 30, status: 'Shipped' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <table className="w-full bg-white border border-stone-200">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-4">{order.customer}</td>
              <td className="p-4">${order.total}</td>
              <td className="p-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
