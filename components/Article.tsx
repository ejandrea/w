import Image from "next/image";

const Article = () => {
  const cardsInfo = [
    {
      image: "/images/image-retro-pcs.jpg",
      header: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: "/images/image-top-laptops.jpg",
      header: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    },
    {
      image: "/images/image-gaming-growth.jpg",
      header: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities",
    },
  ];
  return (
    <section>
      {cardsInfo.map((card, index) => (
        <article className="flex gap-8">
          <Image
            src={card.image}
            width={100}
            height={50}
            alt="Gaming and PC Peripheral"
            className="mb-8"
          />
          <div className="space-y-2">
            <p className="text-3xl text-grayish-blue-100 font-bold">
              {`0${index + 1}`}
            </p>
            <h4 className="font-bold text-xl">{card.header}</h4>
            <p className="text-grayish-blue-900 text-md">{card.desc}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Article;
