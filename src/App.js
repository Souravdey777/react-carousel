import Carousel from "./carousel/carousel";

function App() {
  // Given JSON format
  const CarouselObj = [
    {
      title: "First Block",
      images: ["url1", "url2", "url3", "url4"],
    },
    {
      title: "Second Block",
      images: ["url5", "url6", "url7", "url8"],
    },
    {
      title: "Third Block",
      images: ["url5", "url6", "url7", "url8"],
    },
  ];
  return (
    <div>
      <Carousel CarouselObj={CarouselObj} />
    </div>
  );
}

export default App;
