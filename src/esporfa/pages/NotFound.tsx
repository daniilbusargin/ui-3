import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="container-page py-24 md:py-40">
        <div className="mx-auto max-w-xl text-center">
          <div className="eyebrow">404</div>
          <h1 className="mt-4 font-serif text-5xl italic text-terracotta md:text-6xl">
            ¡Ay!
          </h1>
          <p className="mt-6 text-base text-ink/70">
            Такой страницы нет — но есть много других хороших. Вернись на
            главную.
          </p>
          <Link to="/" className="btn-primary mt-8">
            На главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
