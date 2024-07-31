import { Nav, NavLink } from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/users">My Orders</NavLink>
            </Nav>
            <div
                className="container my-6">
                {children}
            </div>
        </section>
    );
}