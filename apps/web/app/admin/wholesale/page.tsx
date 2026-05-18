import { supabase } from '@/lib/supabaseClient';

export default async function AdminWholesalePage() {
  const { data: inquiries } = await supabase.from('wholesale_inquiries').select('*');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wholesale Inquiries</h1>
      <table className="w-full border">
        <thead>
          <tr className="border-b"><th className="p-2 text-left">Company</th><th className="p-2 text-left">Email</th><th className="p-2 text-left">Message</th></tr>
        </thead>
        <tbody>
          {inquiries?.map(i => <tr key={i.id} className="border-b"><td className="p-2">{i.company_name}</td><td className="p-2">{i.contact_email}</td><td className="p-2">{i.message}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
