import { Container } from "../component/Container";

export const SplitSection = ({
  title,
  mobileImage,
  desktopImage,
  imageAlt,
  contentBlocks,
  imagePosition = "left", // 'left' or 'right'
  sectionClasses = "py-16",
  imageClasses = "",
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <section className={`w-full relative ${sectionClasses}`}>
      <Container>
        {title && (
          <h2 className="text-4xl text-gray-600 text-center font-bold mb-16">
            {title}
          </h2>
        )}

        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          {/* Image Column */}
          <picture
            className={`flex justify-center ${
              isImageRight ? "md:order-2" : "md:order-1"
            } ${imageClasses}`}
          >
            <source media="(max-width: 768px)" srcSet={mobileImage} />
            <source media="(min-width: 769px)" srcSet={desktopImage} />
            <img
              src={mobileImage}
              alt={imageAlt}
              className="w-full max-w-sm md:max-w-none h-auto object-contain mx-auto"
            />
          </picture>

          {/* Text Content Column */}
          <div
            className={`flex flex-col justify-center gap-8 relative z-10 ${
              isImageRight
                ? "md:order-1 md:col-start-1"
                : "md:order-2 md:col-start-2"
            }`}
          >
            {contentBlocks.map((block, index) => (
              <div key={index}>
                <h3 className="text-blue-900 text-3xl font-semibold mb-3">
                  {block.heading}
                </h3>
                <p className="text-gray-800 text-xl">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
