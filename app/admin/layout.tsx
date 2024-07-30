import { Nav, NavLink } from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
                <NavLink href="/admin/ordersw">Sales</NavLink>
            </Nav>
            <div
                className="container my-6">
                {children}
            </div>
        </section>
    );
}