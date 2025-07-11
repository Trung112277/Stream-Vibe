import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="container mx-auto px-5">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
