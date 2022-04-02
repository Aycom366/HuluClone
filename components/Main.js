import Thumbnail from "./Thumbnail";

const Main = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((item) => (
        <Thumbnail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Main;
