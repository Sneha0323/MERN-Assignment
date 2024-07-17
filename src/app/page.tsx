import Login from "./login/page";

export const metadata = {
  title:"ECommerce"
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <Login />
    </main>
  );
}
