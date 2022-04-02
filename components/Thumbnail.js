import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ item }) => {
  console.log(item);
  const Base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        alt={item.title}
        src={
          `${Base_url}${item.backdrop_path || item.poster_path}` ||
          `${Base_url}${item.poster_path}`
        }
        height={1080}
        width={1920}
        layout='responsive'
      />
      <div className='p-2'>
        <p className='truncate maxW-md'>{item.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {item.title || item.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {item.media_type && `${item.media_type} * `}{" "}
          {item.release_date || item.first_air_date} *{" "}
          <ThumbUpIcon className='h-5 mx-2' /> {item.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
