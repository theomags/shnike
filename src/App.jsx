import {
  Hero,
  PopularProducts,
  CustomerReviews,
  Subscribe,
  SuperQuality,
  Footer,
  Services,
  SpecialOffer,
} from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide-padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x padding-y">
      <Services />
    </section>
    <section className="padding bg-pale-blue ">
      <SpecialOffer />
    </section>
    <section className="padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);
export default App;
