# Online Store — FSDI 109, Cohort 69

A multi-page online store built with React and Vite. It has a product catalog,
a working shopping cart backed by global state, an admin page for adding
products and coupons, and a custom 404 page.

**Repo:** https://github.com/jeylofton/My-React-Store-cohort-69

---

## Tech stack

| Tool               | Why I used it                                 |
| ------------------ | --------------------------------------------- |
| **React 19**       | Component-based UI, hooks for state           |
| **Vite 8**         | Dev server with hot reload, production builds |
| **React Router 8** | Client-side routing between pages             |
| **Zustand 5**      | Global state for the cart and the user name   |
| **Bootstrap 5.3**  | Layout utilities, cards, forms, navbar        |
| **Tabler Icons**   | Icons on the contact page and the cart link   |

---

## Features

- **Catalog** — products come from a service, one `<Product>` per item
- **Quantity picker** — reusable component, recalculates the total per product
- **Add to Cart** — writes into a global Zustand store
- **Cart page** — line totals, quantity editing, remove, clear, grand total
- **Admin page** — forms to add products and coupons, with live lists
- **Responsive navbar** — hamburger menu on mobile, cart icon with a live count
- **Custom 404** — a recreation of the GitHub 404 page
- **Black / purple / white theme** — one file drives the whole palette

### Routes

| Path            | Page          |
| --------------- | ------------- |
| `/` and `/home` | Home          |
| `/about`        | About         |
| `/catalog`      | Catalog       |
| `/contact`      | Contact       |
| `/admin`        | Admin         |
| `/cart`         | Cart          |
| `*`             | 404 Not Found |

---

## Project structure

```
src/
├── components/       Navbar, Footer, Products, QuantityPicker
├── pages/            Home, About, Catalog, Contact, Admin, Cart, NotFound
├── services/
│   └── dataService.js    mock catalog data
├── store/
│   └── useStore.js       Zustand global store
├── theme.css         the whole color palette
├── index.css         base styles
└── App.jsx           routes
public/image/         product images
```

---

## Running it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

---

## How I built it

**1. Catalog first.** I started with `dataService.js` returning a hardcoded
array, a `Catalog` page that maps over it, and a `Product` component that
receives each item through props.

**2. Quantity and totals.** The `QuantityPicker` owns its own count, but
`Product` needs that number to compute a total. I passed a callback down as a
prop so the picker reports upward:

```jsx
// QuantityPicker.jsx
function handleIncrease() {
  let newVal = quantity + 1;
  setQuantity(newVal);
  props.onQuantityChange(newVal); // tell the parent
}
```

**3. Routing.** Added React Router with a `<Route>` per page and `*` for the 404.

**4. Bootstrap and theming.** Rather than override Bootstrap with `!important`
everywhere, I retuned its CSS variables in `theme.css`:

```css
:root,
[data-bs-theme] {
  --bs-body-bg: #000000;
  --bs-primary: #a855f7;
  --bs-body-color: #ffffff;
}
```

Because it's variables, every Bootstrap component I add later comes out on
palette automatically.

**5. Global state with Zustand.** The cart needed to be readable from the
navbar, the catalog, and the cart page — three places that aren't parent and
child. Passing props would have meant threading them through everything, so I
used a Zustand store instead:

```js
const useStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity) => set((state) => { ... }),
}));
```

Any component subscribes to just the slice it needs:

```jsx
const cartCount = useStore((state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0),
);
```

---

## Problems I ran into

This is the part I learned the most from.

### The build broke because a package was never installed

I wrote `import "bootstrap/dist/css/bootstrap.min.css"` but never ran
`npm install bootstrap`. The whole build failed:

```
Rolldown failed to resolve import "bootstrap/dist/css/bootstrap.min.css"
```

**Lesson:** importing from a package doesn't install it. The error names the
exact missing module — read it instead of guessing.

### Importing `Link` from the wrong package

```jsx
import { Link } from "react-dom"; // wrong
import { Link } from "react-router"; // right
```

`react-dom` has no `Link` export. This one was sneaky because it _didn't_ crash
at first — I hadn't used `Link` yet, so it sat there as `undefined`. It would
have blown up the moment I did.

### `class` instead of `className`

Pasting Bootstrap examples straight from the docs brings `class="..."` with it,
and React logs `Invalid DOM property 'class'. Did you mean 'className'?` for
every one. Bootstrap still styled it, so it _looked_ fine while the console
filled with errors.

### Inline styles from the docs don't work in JSX

Same cause, worse symptom:

```jsx
<div className="card" style="width: 18rem;">      // throws
<div className="card" style={{width: "18rem"}}>   // correct
```

JSX expects an object, not a CSS string.

### My own CSS was fighting Bootstrap

My `Navbar.css` had rules for `.navbar` — which is **Bootstrap's own class
name**. So my file was silently overriding `bg-dark` and re-centering the
navbar, and I couldn't work out why Bootstrap "wasn't working." I renamed my
classes with a `store-` prefix and left a comment in the file so I don't repeat
it.

Bootstrap also sets `body { background-color: ... }` in its reset, which
painted white over my dark theme — `html` was black and `body` was white at the
same time.

### A form input that wouldn't accept typing

```jsx
<input value={couponCode} /> // read-only
```

Binding `value` to state without an `onChange` makes React lock the field.
Nothing I typed appeared. React warns about it clearly:

> You provided a `value` prop to a form field without an `onChange` handler.

Adding `onChange={(e) => setCouponCode(e.target.value)}` fixed it.

### A button that ignored my theme

`className="btn-primary"` on its own renders a plain gray button. Bootstrap
keeps the actual button styling in `.btn` — `.btn-primary` only supplies colors
through variables that `.btn` consumes. It needs **both**: `btn btn-primary`.

### Missing images don't 404 in development

This one cost me real time. I typed an image path that didn't exist and checked
it — the server returned **200 OK**, so I assumed the file was fine. It wasn't:
Vite's dev server falls back to serving `index.html` for unknown paths, so a
missing image returns an HTML page with a success code. The browser can't
decode it and shows a broken image.

Checking the content type is what exposed it:

```
200 image/png  103670   <- /image/keyboard.png   (real image)
200 text/html  621      <- /image/Mice.png       (missing!)
```

Related: files in `public/` are served from the site root, so
`public/image/mug.png` is `/image/mug.png` in code — not `public/image/mug.png`.

### A casing error that wasn't in my code at all

After renaming a component file, VS Code showed:

```
ts(1149) File name 'Contact.jsx' differs from already included file name
only in casing
```

There was only one file on disk. My drive is case-insensitive, so the editor
had both the old and new spelling cached and thought they were two files.
Restarting the TS server cleared it. Git _is_ case-sensitive even when the
filesystem isn't, so a case-only rename can create a phantom duplicate in the
repo.

### `1rem` wasn't 16px

I set my product cards to `18rem` expecting 288px and got 324px. My `index.css`
sets the root font to **18px**, so every `rem` in the project is 12.5% bigger
than the default. Two cards wouldn't fit in a column I'd measured for them.

### `d-flex` silently broke my centering

My contact info was centered by inherited `text-align: center`. The moment I
added `d-flex`, it jumped left. Flex children aren't positioned by
`text-align` — they're positioned by `justify-content`, which defaults to
`flex-start`. I needed `justify-content-center`.

I also had `className="d-flex center gap-2"` — `center` isn't a Bootstrap
class, so it did nothing at all.

### CSS Grid that refused to center

```css
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
justify-content: center; /* had no effect */
```

`1fr` makes columns stretch to fill all available space, and `auto-fill` keeps
empty columns alive — so there was never any leftover space to center. Capping
the column width and switching to `auto-fit` (which collapses empty columns)
fixed it.

### Bootstrap's hamburger needs JavaScript I never imported

`data-bs-toggle="collapse"` does nothing with only Bootstrap's CSS imported —
the button was decorative. Instead of pulling in the JS bundle, I drive the
menu with React state and just toggle Bootstrap's `show` class:

```jsx
const [menuOpen, setMenuOpen] = useState(false);

<div className={menuOpen ? "collapse navbar-collapse show"
                         : "collapse navbar-collapse"}>
```

---

## Known limitations

- **The cart empties on refresh.** Zustand keeps state in memory, so a hard
  reload clears it. Zustand's `persist` middleware would fix this.
- **Admin products aren't connected to the catalog yet.** They live in local
  component state and disappear on navigation. The two also store image paths
  differently — `dataService` keeps just the filename while the admin form
  keeps the full path — so that needs reconciling first.
- **Deploying needs server config.** `BrowserRouter` means loading `/about`
  directly 404s on a static host unless it's set to serve `index.html` for all
  paths.
- **`router` is an unused dependency** in `package.json` — an accidental
  `npm i router` instead of `react-router`. Safe to remove.

---

## What I'd add next

- Persist the cart to localStorage
- Move admin products into the shared store so they show on the catalog
- A checkout page and coupon codes applied to the cart total
- Real login instead of a hardcoded user name
