import React from 'react';
import "../../assets/main.scss";

class MainPage extends React.Component {

  render() {
    return (
      <div className='main'>
        <section className='main-section'>
          <h1>An App To Help You Study Chinese</h1>
          <h2>Features Include:</h2>

          <p>Pinyin Search</p>
          <p className='indented'>--Use pinyin search to find chinese characters via pinyin</p>

          <p>Character Diary</p>
          <p className='indented'>--Use the character diary to store all of your learned characters</p>

          
        </section>
        
        <footer>
          Copyright &copy; 2022 ChineseHelper
        </footer>
      </div>
    );
  }
}

export default MainPage;