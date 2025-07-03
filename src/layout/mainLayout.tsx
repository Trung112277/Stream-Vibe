import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
