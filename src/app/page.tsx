import Image from 'next/image'

const mockUrls = [
    'https://i.ytimg.com/vi/l4Iu3YB0pTs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY3rFFNiVZ7OE7u5--K-AmnenTKw',
    'https://i.ytimg.com/vi/TKi1de9UuB8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNmixOeP3161PgMgJggvhE5mju3g',
    'https://i.ytimg.com/vi/bRIhKox8VNQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXKFzJzXLAUWleMV3BG6gtGFFREg',
    'https://i.ytimg.com/vi/NZulDyerzrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTyQgmmErw_0UoDI6nO8hmF-Q2rA'
]

const mockImages = mockUrls.map((url, i) => ({id: i + 1, url}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
          {mockImages.map((image, i) => (
              <div key={image.id} className="p-4">
                  <Image src={image.url} width={300} height={250} alt="1"/>
              </div>
          ))}
      </div>
    </main>
  );
}
