import tanyaImg from '../assets/image-tanya.jpg';
import johnImg from '../assets/image-john.jpg';

export function loadTestimony() {
  return [
    {
      testimonies: [
        {
          id: 1,
          name: "Tanya Sinclair",
          occupation: "UX Engineer",
          testimony: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
          photo: tanyaImg
        },
        {
          id: 2,
          name: "John Tarkpor",
          occupation: "Junior Front-end Developer",
          testimony: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
          photo: johnImg
        },
      ]
    },
  ];
}
