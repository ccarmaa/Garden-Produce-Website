# Adding New Fields to the Product Modal

You will need to update 4 files and the Supabase db.

This walkthrough is adding the field 'Soil'.

---

## 1. Supabase Database
I will fill this out whenever the DB is setup :)

---

## 2. `ProductModal.tsx`
**Add to the interface:**
```tsx
soil?: string; // always optional with ?
```

**Add to the destructured props:**
```tsx
export default function ProductModal({ ..., soil }: ProductModalProps)
```

**Add to the JSX inside the care info block:**
```tsx
{soil && (
  <div className="flex items-center gap-2 text-sm text-[var(--text)]">
    <span className="text-base">[add some icon here if you'd like :)]</span>
    <span className="font-medium">Soil:</span>
    <span>{soil}</span>
  </div>
)}
```

---

## 3. `ProductCard.tsx`
**Add to the interface:**
```tsx
soil?: string;
```

**Add to the destructured props:**
```tsx
export default function ProductCard({ ..., soil }: ProductCardProps)
```

**Pass it into the modal:**
```tsx
<ProductModal ... soil={soil} />
```

---

## 4. `page.tsx`
Add it to any mock products you want to test with. 
This is only useful until the DB is setup.
```tsx
{ id: '1', name: 'Test Product', ..., soil: 'Well-draining' }
```
