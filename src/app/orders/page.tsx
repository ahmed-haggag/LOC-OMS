'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function OrdersPage() {
  return (
    <>
      <Breadcrumb pageName="Orders" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Orders content goes here */}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

type Order = {
  id: number;
  status: string;
  total: string;
  date_created: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">WooCommerce Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Total</th>
                <th className="text-left p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">#{order.id}</td>
                  <td className="p-3 capitalize">{order.status}</td>
                  <td className="p-3">EGP {order.total}</td>
                  <td className="p-3">{new Date(order.date_created).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
