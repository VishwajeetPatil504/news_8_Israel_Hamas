import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Israel-Hamas War Highlights: 130 Hamas tunnel shafts destroyed in Gaza, claims IDF; Al Quds hospital nearing shutdown amid severe fuel shortage",
    date: '09 Nov 2023',
    time: '09:30 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `More than 10,300 Palestinians, including 4,200 children have been killed in the war so far, said the Gaza health ministry. On the Israeli side, more than 1,400 people in Israel have been killed and 242 hostages have been taken from Israel into Gaza by the militant group.`,
    content: `Israel-Hamas War News Highlights: The Israel Defense Forces said troops found and destroyed 130 tunnel shafts in the Gaza Strip since the ground operation began last month, the Times of Israel reported. Thousands fled northern Gaza as an evacuation corridor was opened for five hours, a measure that comes at a time when the strip’s health infrastruture is buckling under mounting injuries. The Al Quds Hospital said in a statement that it is nearing shutdown amid severe shortage of fuel.

    The Israeli military said today that a top Hamas weapons maker, Mahsein Abu Zina, and several fighters engaged in anti-tank or ground-to-ground rocket fire, were killed in airstrikes on the Gaza Strip. There have been clashes between militants and Israeli forces near the al-Shati (Beach) refugee camp in Gaza City, reported Palestinian media. Israeli ground troops have battled Palestinian militants inside Gaza for over a week, cutting the territory in half and encircling Gaza City.
    
    What is the death toll? More than 10,300 Palestinians, including 4,200 children have been killed in the war so far, said the Gaza health ministry. On the Israeli side, more than 1,400 people in Israel have been killed and 242 hostages have been taken from Israel into Gaza by the militant group.
    An Israeli mobile artillery unit fires a shell from southern Israel towards the Gaza Strip, in a position near the Israel-Gaza border. 
    Italy sending a hospital ship to be stationed off Gaza coast
    Italy is sending a hospital ship that will be stationed off the coast of Gaza to aid the Palestinian population, Defense Minister Guido Crosetto announced. Crosetto said the mission is a concrete sign of Italy’s “closeness to the Palestinian people, distance from the Hamas terrorists.”

    The ship Vulcano has 170 people on board, including medical and military personnel, and includes operating rooms. It will first head to Cyprus and then as close as possible to the conflict zone to provide emergency medical support, Crosetto said.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
