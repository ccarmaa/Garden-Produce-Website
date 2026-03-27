"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { X, Loader2, CalendarDays } from "lucide-react";

type ReservationItem = {
  id: string;
  product_name: string;
  price: number;
  quantity: number;
};

type Reservation = {
  id: string;
  name: string;
  email: string | null;
  status: "confirmed" | "completed";
  proposed_pickup: string | null;
  final_cost: number | null;
  reservation_items: ReservationItem[];
};

export default function CalendarTab() {
  const supabase = createClient();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [popup, setPopup] = useState<Reservation | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select("*, reservation_items(*)")
        .in("status", ["confirmed", "completed"]);
      if (!error) setReservations(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const byDay: Record<number, Reservation[]> = {};
  for (const r of reservations) {
    if (!r.proposed_pickup) continue;
    const datePart = r.proposed_pickup.split(" · ")[0];
    const d = new Date(datePart);
    if (isNaN(d.getTime())) continue;
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate();
      if (!byDay[day]) byDay[day] = [];
      byDay[day].push(r);
    }
  }

  const monthLabel = new Date(year, month).toLocaleDateString("en-US", {
    month: "long", year: "numeric",
  });

  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 size={28} className="animate-spin text-[var(--teal)]" />
      </div>
    );
  }

  return (
    <div>
      {/* month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="px-3 py-1.5 rounded-md border border-[var(--card-border)] text-[var(--text)] hover:bg-[var(--card-bg)] transition-colors text-sm"
        >
          ←
        </button>
        <h3 className="text-base font-semibold text-[var(--text)]">{monthLabel}</h3>
        <button
          onClick={nextMonth}
          className="px-3 py-1.5 rounded-md border border-[var(--card-border)] text-[var(--text)] hover:bg-[var(--card-bg)] transition-colors text-sm"
        >
          →
        </button>
      </div>

      {/* day headers */}
      <div className="grid grid-cols-7 mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center text-xs uppercase tracking-widest text-[var(--input-border)] py-2">
            {d}
          </div>
        ))}
      </div>

      {/* grid */}
      <div className="grid grid-cols-7 border-l border-t border-[var(--card-border)]">
        {cells.map((day, i) => (
          <div
            key={i}
            className={`min-h-[90px] border-r border-b border-[var(--card-border)] p-1.5 ${
              day ? 'bg-[var(--header)]' : 'bg-[var(--card-bg)]'
            }`}
          >
            {day && (
              <>
                <span className={`text-xs font-medium mb-1 w-6 h-6 flex items-center justify-center rounded-full ${
                  isToday(day)
                    ? 'bg-[var(--rust)] text-white'
                    : 'text-[var(--text)]'
                }`}>
                  {day}
                </span>
                <div className="space-y-1">
                  {(byDay[day] ?? []).map(r => (
                    <button
                      key={r.id}
                      onClick={() => setPopup(popup?.id === r.id ? null : r)}
                      className={`w-full text-left px-1.5 py-0.5 rounded text-xs font-medium truncate transition-colors ${
                        r.status === 'completed'
                          ? 'bg-[var(--card-border)] text-[var(--text)] hover:bg-[var(--input-border)] hover:text-white'
                          : 'bg-[var(--teal)] text-white hover:bg-[var(--teal-hover)]'
                      }`}
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* legend */}
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[var(--teal)]" />
          <span className="text-xs text-[var(--input-border)]">Confirmed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[var(--card-border)]" />
          <span className="text-xs text-[var(--input-border)]">Completed</span>
        </div>
      </div>

      {/* popup */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-[var(--header)] border border-[var(--card-border)] rounded-lg shadow-xl p-5 w-full max-w-sm mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-[var(--text)]">{popup.name}</p>
                <p className="text-xs text-[var(--input-border)]">{popup.email ?? "—"}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  popup.status === 'completed'
                    ? 'bg-[var(--card-border)] text-[var(--text)]'
                    : 'bg-[var(--teal)] text-white'
                }`}>
                  {popup.status}
                </span>
                <button
                  onClick={() => setPopup(null)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-border)] transition-colors text-[var(--text)]"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {popup.proposed_pickup && (
              <p className="text-xs text-[var(--input-border)] mb-3 flex items-center gap-1.5 flex-nowrap">
                <CalendarDays size={12} />{popup.proposed_pickup}
              </p>
            )}

            <div className="border-t border-[var(--card-border)] pt-3 mb-3">
              <p className="text-xs uppercase tracking-widest text-[var(--input-border)] mb-2">Items</p>
              <div className="space-y-1">
                {popup.reservation_items.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text)]">{item.product_name}</span>
                    <span className="text-[var(--input-border)]">
                      ×{item.quantity} · ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[var(--card-border)]">
              <span className="text-sm font-medium text-[var(--text)]">Total</span>
              <span className="text-sm font-semibold text-[var(--text)]">
                ${(popup.final_cost ?? popup.reservation_items.reduce((s, i) => s + i.price * i.quantity, 0)).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}