import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import CardHome from '../components/CardHome';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  function showDetails(id) {
    navigate(`./${id}`);
  }
  function deleteItem(id) {
    setdata(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function fetchData() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
        setloading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap justify-center items-center gap-16 my-5 mx-4">
        {loading === true && (
          <>
            {' '}
            <div className="text-2xl">Wait a moment</div>
            <span className="loading loading-dots loading-lg"></span>
          </>
        )}

        {loading === false &&
          data.map((item) => {
            return (
              <CardHome
                key={item.id}
                name={item.title}
                price={item.price}
                img_url={item.image}
                onClick={() => {
                  showDetails(item.id);
                }}
                onClickDelete={() => {
                  deleteItem(item.id);
                }}
              />
            );
          })}

        {/* <CardHome
          name={'Gary Goodspeed'}
          img_url={
            'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png'
          }
        /> */}
      </div>
    </div>
  );
}

export default Home;
