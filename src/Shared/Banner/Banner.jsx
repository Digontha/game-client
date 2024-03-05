import { useCallback, useEffect, useState } from "react";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = ['https://th.bing.com/th/id/R.b051b8b78b7fd9128df63f94278df371?rik=XO7FSYr3VjGM7g&pid=ImgRaw&r=0','https://gameranx.com/wp-content/uploads/2018/06/rage2_preview3-noscale.jpg','https://images.pushsquare.com/70f40118780e1/best-ps4-single-player-story-games-playstation-4-1.original.jpg','https://th.bing.com/th/id/R.53c970f44ec54735af1a8a2933af3dca?rik=aaxdl5npeV%2bGrw&riu=http%3a%2f%2fimages.pushsquare.com%2f84cbdbc0701d5%2fbest-ps4-games-2019-playstation-4-1.original.jpg&ehk=Y471q8OfHiKMzt5av2dBELeoenkbRme45VsYlCb48gk%3d&risl=&pid=ImgRaw&r=0','https://th.bing.com/th/id/R.5a904bea1bb5d22377de7a04ba267d76?rik=JIDbQYlyM0t%2bqg&riu=http%3a%2f%2fimages.nintendolife.com%2f053a3528e052b%2fbest-nintendo-switch-games-of-2017.original.jpg&ehk=rjGyQkqeRYpOYK7%2fG7Q0sAIFmXChZh4Q7y6n6LQGhp4%3d&risl=&pid=ImgRaw&r=0'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1), [sliderImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-[240px] w-full md:h-[470px] lg:h-[670px] relative overflow-hidden">
        
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-300 bg-white ${currentSlider === inx ? "w-8" : "w-2"} h-2`}></button>
          ))}
        </div>
        {/* Banner container */}
        <div className="ease-linear duration-300 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <img key={slide} src={slide} className="min-w-full h-72 bg-black/20 sm:h-96 md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>
  );
};
