import React from 'react'

const clickHandler2 = (author) => {
  console.log(author)
}

const Book = ({img, title, author})=>{
  //const {img, title, author} = props
  /*
    Events and Handler
    onClick and onMouseOver
  */
  const clickHandler = ()=>{
    alert('Hello World');
  };
  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt="legend of zelda"
      />
      <h1 onClick={()=> console.log('oi')}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Btn</button>
      <button type='button' onClick={()=>clickHandler2(author)}>New Btn</button>
    </article>
  );
}

export default Book