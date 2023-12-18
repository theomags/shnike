import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max:xl:col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div>
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-lg ">
          👟 Elevate your style with our exclusive deals. on
          Limited-time offer: Unleash the extraordinary comfort and
          fashion-forward designs of Nike at unbeatable prices. 🎁
          Treat your feet to the perfect blend of style and comfort
          with our specially curated collection.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          🏃‍♂️ Hurry, this offer is valid until New year. Don't miss out
          on the chance to step into fashion and comfort with [Shoe
          Brand]. Upgrade your shoe game today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
