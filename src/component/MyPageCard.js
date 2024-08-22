import React from 'react';

const MyPageCard = ({data}) => {
  return (
      <div className={"myPageCard"}>
        <img src={data.img}></img>
        <div className={"myPageCardInfo"}>
          <h5>PRICE : ₩{data.price}</h5>
          <h5>SIZE : {data.size}</h5>
        </div>
      </div>
  );
}

export default MyPageCard;