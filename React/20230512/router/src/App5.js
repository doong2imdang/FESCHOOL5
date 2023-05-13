import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom'

export default function App5() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/products/1"> products1 </Link>
      <Link to="/products/2"> products2 </Link>
      <Link to="/products/3"> products3 </Link>
      <Link to="/users"> users </Link>
      <Link to="/users/coupon"> userscoupon </Link>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Outlet />} />
        <Route path="/users/*" element={<Users />} />
          <Route path="coupon/" element={<UsersCoupon />} />

      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>hello home</h1>
}

function Products() {
  const location = useLocation();
  console.log(location);
  return <h1>hello products</h1>
}

function Users() {
  return <h1>hello users</h1>
}

function UsersCoupon() {
  const location = useLocation();
  console.log(location)
  return <h1>hello usercoupon</h1>
}