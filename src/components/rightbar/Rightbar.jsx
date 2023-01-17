import './style.css';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Sergio</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/5.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Lidia Cartagena</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/5.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Lidia Cartagena</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/5.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Lidia Cartagena</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='/assets/person/5.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Lidia Cartagena</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
