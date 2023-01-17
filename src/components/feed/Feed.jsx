import Post from '../post/Post';
import Share from '../share/Share';
import './style.css';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
