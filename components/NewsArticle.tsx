const NewsArticle = () => {
  const articles = [
    {
      header: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      header: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation",
    },
    {
      header: "Is VS Funding Drying Up?",
      desc: "Private funding the VS firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <>
      {articles.map((article, index) => (
        <section className="text-off-white mb-5">
          <h3 className="text-lg font-bold mb-3 hover:text-orange hover:cursor-pointer">
            {article.header}
          </h3>
          <p className="text-grayish-blue-100 ">{article.desc}</p>
          {index != articles.length - 1 && (
            <hr className="text-grayish-blue-100 mt-10" />
          )}
        </section>
      ))}
    </>
  );
};

export default NewsArticle;
