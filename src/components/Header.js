import React from 'react';


const MyHeader = ({ title }) => {
  return (
    <header>
      <h1>
        {title}
      </h1>
    </header>
  );
};

export const FavouriteColor = (props) => {
  const { color } = props;
  const { text } = props;
  return (
    <div>
      <h3 id="favourite">
        {text}
        {color}
      </h3>
    </div>
  );
};
export default MyHeader;
