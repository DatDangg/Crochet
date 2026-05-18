export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 flex">
      <aside className="w-64 bg-stone-900 text-stone-100 p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <a href="/admin/products" className="block p-2 hover:bg-stone-800 rounded">Products</a>
          <a href="/admin/orders" className="block p-2 hover:bg-stone-800 rounded">Orders</a>
          <a href="/admin/coupons" className="block p-2 hover:bg-stone-800 rounded">Coupons</a>
          <a href="/admin/custom-orders" className="block p-2 hover:bg-stone-800 rounded">Custom Requests</a>
          <a href="/admin/wholesale" className="block p-2 hover:bg-stone-800 rounded">Wholesale Inquiries</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
