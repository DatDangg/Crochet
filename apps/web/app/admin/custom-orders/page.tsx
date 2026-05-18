import { supabase } from '@/lib/supabaseClient';

export default async function AdminCustomOrdersPage() {
  const { data: orders } = await supabase.from('custom_orders').select('*');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Custom Orders</h1>
      <table className="w-full border">
        <thead>
          <tr className="border-b"><th className="p-2 text-left">Description</th><th className="p-2 text-left">Status</th></tr>
        </thead>
        <tbody>
          {orders?.map(o => <tr key={o.id} className="border-b"><td className="p-2">{o.description}</td><td className="p-2">{o.status}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
