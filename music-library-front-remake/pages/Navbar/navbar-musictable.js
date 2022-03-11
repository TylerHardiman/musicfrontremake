import Link from 'next/link'
import { useRouter } from react-useRouter

function DisplayMusicTable({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: 'http://127.0.0.1:8000/music/',  
              query: { 'music_library_database': ''},
              query: { 'music_library_database': ''},
              query: { 'music_library_database': ''},
              query: { 'music_library_database': ''},
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default DisplayMusicTable;
//Wrapping slug in brackets will tell Next.js that this is a dynamic route, and the slug will be passed to the lambda function. pages/api/index.ts — the request body API route. 
//This route accepts a JSON object, so there is no need to make it a dynamic route. Inside both of these files, we will create a basic API route: