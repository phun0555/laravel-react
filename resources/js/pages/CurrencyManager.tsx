import React, { useState } from 'react';

type Rate = {
  id: number;
  from: string;
  to: string;
  rate: number;
};

export default function CurrencyManager() {
  const [rates, setRates] = useState<Rate[]>([
    { id: 1, from: 'USD', to: 'THB', rate: 35 },
    { id: 2, from: 'EUR', to: 'THB', rate: 38 },
  ]);
  const [form, setForm] = useState<Omit<Rate, 'id'>>({ from: '', to: '', rate: 0 });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.name === 'rate' ? +e.target.value : e.target.value });
  };

  const handleSubmit = () => {
    if (!form.from || !form.to || !form.rate) return alert('กรุณากรอกข้อมูลให้ครบ');
    if (editingId !== null) {
      setRates(rates.map(rate => rate.id === editingId ? { id: rate.id, ...form } : rate));
      setEditingId(null);
    } else {
      const newId = rates.length ? Math.max(...rates.map(r => r.id)) + 1 : 1;
      setRates([...rates, { id: newId, ...form }]);
    }
    setForm({ from: '', to: '', rate: 0 });
  };

  const handleEdit = (id: number) => {
    const rate = rates.find(r => r.id === id);
    if (rate) {
      setForm({ from: rate.from, to: rate.to, rate: rate.rate });
      setEditingId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบ?')) {
      setRates(rates.filter(r => r.id !== id));
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ระบบจัดการอัตราแลกเปลี่ยน</h1>

      <div className="mb-4 grid grid-cols-3 gap-2">
        <input
          name="from"
          placeholder="จาก (USD)"
          value={form.from}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="to"
          placeholder="เป็น (THB)"
          value={form.to}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="rate"
          type="number"
          placeholder="อัตรา (เช่น 35)"
          value={form.rate}
          onChange={handleChange}
          className="border p-2"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingId !== null ? 'บันทึกการแก้ไข' : 'เพิ่มอัตราแลกเปลี่ยน'}
      </button>

      <table className="mt-6 w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">จาก</th>
            <th className="border px-2 py-1">เป็น</th>
            <th className="border px-2 py-1">อัตรา</th>
            <th className="border px-2 py-1">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {rates.map(rate => (
            <tr key={rate.id}>
              <td className="border px-2 py-1">{rate.from}</td>
              <td className="border px-2 py-1">{rate.to}</td>
              <td className="border px-2 py-1">{rate.rate}</td>
              <td className="border px-2 py-1">
                <button onClick={() => handleEdit(rate.id)} className="text-yellow-600 mr-2">แก้ไข</button>
                <button onClick={() => handleDelete(rate.id)} className="text-red-600">ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
