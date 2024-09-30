import React, { useState } from 'react';
import '../Styles/Faq.css'; 

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Online Trivia App?",
      answer:
        "The Online Trivia App allows players to test their knowledge by answering trivia questions across various categories. Players can win daily and monthly cash rewards by participating in trivia challenges.",
    },
    {
      question: "How do I play the trivia games?",
      answer:
        "To play, simply select a question pack based on your preference:\n\nN50 Pack: 2 questions\nN100 Pack: 5 questions\nN200 Pack: 10 questions\nN500 Pack: 20 questions\n\nEach pack comes with a corresponding number of trivia questions.Answer them correctly to increase your chances of winning rewards!",
    },
    {
      question: "How are the winnings structured?",
      answer:
        "Daily Rewards:\n1st Place: N10,000\n2nd Place: N5,000\n3rd Place: N3,000\n\nMonthly Rewards:\n1st Place: N100,000\n2nd Place: N70,000\n3rd Place: N50,000\n\nYou can check the leaderboard after completing your question packs to see your position.",
    },
    {
      question: "How do I win daily or monthly rewards?",
      answer:
        "Players who score the highest points by answering questions correctly in a given day or month  will be ranked on the leaderboard. The top 3 players daily and monthly will win the  prizes.",
    },
    {
      question: "Can I purchase multiple question packs in a day?",
      answer:
        "Yes, you can purchase and play multiple question packs in a single day. Each packs gives you more opportunities to score points and improve your ranking on the leaderboard.",
    },
    {
        question: "How do i check my score and ranking?",
        answer:
          "You can check your current score and ranking on the leaderboard page, which is updated in real-time as players complete their question packs..",
      },
      {
        question: "How can I claim my rewards if I win?",
        answer:
          "If you win a daily or monthly reward, you'll be notified through the app. The winnings will be credited to your account, and you can withdraw them using your preferred payment method.",
      },
      {
        question: "What are the categories of trivia questions available?",
        answer:
        " We offer a variety of trivia categories, including:\n Sports\nMovies\nMusic\nPolitics\n\n  You can choose a category before starting your question pack.",
      },
      {
        question: "What happens if I get disconnected during a game?",
        answer:
          "If you get disconnected, you can resume the game from where you left off when you reconnect. However, ensure you have a stable internet connection to avoid interruptions during gameplay.",
      },
      {
        question: "How do I purchase question packs?",
        answer:
          "You can purchase question packs directly through the app using the available payment methods (credit card, ussd transfer, etc.).",
      },
      {
        question: "How is my privacy protected?",
        answer:
          "Your privacy is important to us. All personal information is securely stored and used only for the purposes of game functionality and rewards distribution. Please see our Privacy Policy for more details.",
      },
      {
        question: "How often is the leaderboard updated?",
        answer:
          "The leaderboard is updated in real-time as players complete their questions and submit their answers.",
      },
  ];
 

 


 

  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="faq-container">
      <h1>FAQ - Online Trivia App</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
