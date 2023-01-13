import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import UserPost from "../../components/Timeline/UserPost";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import CreatPost from "../../components/Timeline/CreatePost";
import FbCard from "../../components/FbCard/FbCard";
import icon from '../../assets/icons/profile.png'

const Profile = () => {
  return <>

    <MainHeader />
    <ProfileHeader />

    <div class="fb-profile-body">

      <div className="fb-body-wrapper">
        <div className="user-profile-personal-info">
          <FbCard>
            <div className="user-personal-info">
              <h3>Intro</h3>
              <div className="bio">
                <p>herakfj is bio</p>
                <button className="personal-info-button">Edit bio</button>
              </div>
              <div className="personail-details">
                <ul>

                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj " alt="" />
                    <span> <span className="bold-text">Profile</span> - Digital Creator</span>
                  </li>



                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeFdJ0HlPIzlyMknSfScRrn5QE0O-ZdJm-NATQ75l0mb4-Q2M_FlPnXsc4uVnEQoDfv0yNoErKR7l8qpJtj2iioL " alt="" />
                    <span>Former Front-end Developer at  <span className="bold-text">DigitalGregg</span></span>
                  </li>


                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                    <span>Studied at <span className="bold-text">Madhupur College</span></span>
                  </li>

                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHiEfVg0GAKCAOWnl7JyzaOC7xezJFSLOkLvF7MkVIs6RxQJycIuQ-JMwraGhfo1TWsIqwyPaijkFaqu119vcBj" alt="" />
                    <span>Lives in <span className="bold-text">Tangail</span></span>
                  </li>

                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeFm9rLjLQKnoFo3jHm5bOPLyuB9xaeJwC_K4H3Fp4nAL5vmsvA1DmgA2fA9F7xB1v1gyqTNysrUs225zt0ZzlSc" alt="" />
                    <span>From <span className="bold-text">Madhupur</span></span>
                  </li>
                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png?_nc_eui2=AeE9pH04Cpot7IW1lywmUZ2HrlG3yvH4CWGuUbfK8fgJYeWXnsUqJY6CAr8B2lDgzOpsRMAXBYky0JpiOm0-6pOt" alt="" />
                    <span>Single</span>
                  </li>


                  <li>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/BQdeC67wT9z.png?_nc_eui2=AeFTPsXUG1ZQumUkWdQYJ-DIC-BjLWjhL2AL4GMtaOEvYI6BP3QMKIeTu6tq_qsFyMnmPCEDMFQBAZxZKJ5ukQOQ" alt="" />
                    <span><a href="/me" target="_blank" style={{ color: "#3c44d6" }}>developermahir.com</a></span>
                  </li>







                </ul>
                <button className="personal-info-button">Edit Details</button>
              </div>
              <div className="hobbies">

                <div className="hobbies-list">

                  <div className="hobbies-list-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                    <span>Traveling</span>
                  </div>
                  <div className="hobbies-list-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                    <span>Traveling</span>
                  </div>
                  <div className="hobbies-list-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                    <span>Traveling</span>
                  </div>
                  <div className="hobbies-list-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                    <span>Coding</span>
                  </div>
                  <div className="hobbies-list-item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png" alt="" />
                    <span>Traveling</span>
                  </div>

                </div>


                <button className="personal-info-button">Edit hobbies</button>
              </div>


              <div className="profile-featured">
                <div className="profile-featured-gallery">

                  <div className="profile-featured-item">
                    <div style={{ backgroundImage: `url('https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/325217908_475384531450974_296854693882673217_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeGC0ex4OQV37yyNB1cOcGR4Gy8IA9l7DlUbLwgD2XsOVavC5g0KMXR-Cge7UrWaaqjd--OT5jPYxNrAzbAV9VZJ&_nc_ohc=BT6z9Is2QygAX-SRKCg&_nc_ht=scontent.fdac27-2.fna&oh=00_AfDRz-5WCRqH1ZwVgLPXRn72GusJalj7lOea2cIhHrHjeg&oe=63C4F5CB')` }} className="profile-featured-photo">
                    </div>
                    <span className="featured-count">+35</span>
                  </div>
                  <div className="profile-featured-item">
                    <div style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg/220px-Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg')` }} className="profile-featured-photo">
                    </div>
                    <span className="featured-count">+35</span>
                  </div>
                  <div className="profile-featured-item">
                    <div style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg/220px-Dirili%C5%9F_Ertu%C4%9Frul_S1.jpg')` }} className="profile-featured-photo">
                    </div>
                    <span className="featured-count">+35</span>
                  </div>




                </div>

                <button className="personal-info-button">Add  Featured</button>
              </div>


            </div>
          </FbCard>



          <FbCard>
            <div className="profile-gallery">
              <div className="profile-header">
                <h3>Photos</h3>
                <a href="">See all photos</a>
              </div>

              <div className="gallery-area">
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>
                <a href="">
                  <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                </a>

              </div>
            </div>


          </FbCard>



          <FbCard>
            <div className="profile-friends">

              <div className="profile-header">
                <h3>Friends</h3>
                <a href="">See all friends</a>
              </div>
              <span className="friends-count ">430 friends</span>
            </div>

            <div className="profile-friends-item">


              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman
                  </h3>
                </div>
              </a>



              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman 
                  </h3>
                </div>
              </a>
              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman
                  </h3>
                </div>
              </a>
              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman 
                  </h3>
                </div>
              </a>
              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman Junu
                  </h3>
                </div>
              </a>
              <a href="">
                <div className="friends-card">
                  <div className="card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/10/05/06/46/asia-2818566__340.jpg" alt="" />
                  </div>
                  <h3 className="friends-name">
                    Junaid Aman Junu
                  </h3>
                </div>
              </a>

            </div>

          </FbCard>







        </div>
        <div className="user-profile-posts">
          <div className="fb-home-timeline">
            <CreatPost />
            <UserPost />
          </div>
        </div>
      </div>

    </div>

  </>;
};

export default Profile;
