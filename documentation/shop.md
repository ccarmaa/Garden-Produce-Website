Common updates you might need to make to the shop :)

---

## 1. Stock Warning Threshold

The "Only X left!" warning shows on a card when an item is in the cart **and** stock is at or below a set number.

**File:** `components/shop/ProductCard.tsx`

Find this comment:
```
{/*TO CHANGE WHEN WARNING SHOWS, CHANGE THE NUMBER AFTER STOCK <= BELOW*/}
```

Change the `5` to whatever number you want:
```tsx
{quantity > 0 && stock <= 5 && (   // change 5 to your threshold
```

> The message always shows the real stock number automatically. You're only changing *when* the warning triggers.

---

## 2. Adding / Removing Categories


**File:** `app/shop/page.tsx`


Find this comment:
```
{/*TO ADD MORE CATEGORIES, ADD TO LIST BELOW*/}
```

Add or remove strings from the array:
```tsx
{['Vegetables', 'Plants', 'Flowers'].map(category => (
// example: add 'Herbs'
{['Vegetables', 'Plants', 'Flowers', 'Herbs'].map(category => (
```


> The database may have to be changed to match what's in the filter list.

---

## 3. Adding / Removing Types

Types work the same as categories, except a product can have **multiple types**.

**File:** `app/shop/page.tsx`


Find this comment:
```
{/*TO ADD MORE TYPES, ADD TO LIST BELOW*/}
```

Add or remove strings from the array:
```tsx
{['Shade', 'Partial Shade', 'Full Sun', 'Seedlings'].map(type => (
// example: add 'Indoor'
{['Shade', 'Partial Shade', 'Full Sun', 'Seedlings', 'Indoor'].map(type => (
```


---

## 4. Adding / Removing Availability Options

**File:** `app/shop/page.tsx`

Find this comment:
```
{/*TO ADD DIFFERENT AVAILABILITY, ADD TO LIST BELOW*/}
```

The current options in the filter are:
```tsx
{['Ready Now', 'Coming Soon'].map(availability => (
```

> **Note:** `Out of Stock` is not in the filter list on purpose. Customers can't filter for it, but the state still works on cards. It also triggers automatically if a product's `stock` hits `0`, regardless of what `availability` is set to.

Each product's `availability` field accepts: `'Ready Now'`, `'Coming Soon'`, or `'Out of Stock'`. The database will need to be changed.

---

## 5. Items Per Page

**File:** `app/shop/page.tsx`

Find this line:
```tsx
const itemsPerPage = 10;
```

Change `10` to however many products you want shown per page. Pagination updates automatically.

---
