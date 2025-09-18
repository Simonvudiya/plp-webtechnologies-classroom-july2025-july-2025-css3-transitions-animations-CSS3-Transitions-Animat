/* General styles */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 30px;
}

/* Part 1: CSS Hover Effects */
.fancy-btn {
  background: linear-gradient(45deg, #ff7eb3, #ff758c);
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.4s ease, background 0.4s ease;
}
.fancy-btn:hover {
  transform: scale(1.1) rotate(3deg);
  background: linear-gradient(45deg, #42e695, #3bb2b8);
}

/* Animated Box */
.animated-box {
  margin: 40px auto;
  width: 100px;
  height: 100px;
  background: cornflowerblue;
  border-radius: 12px;
  animation: bounce 2s infinite alternate;
}
@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-40px); }
}

/* Part 3: Card Flip */
.card {
  perspective: 1000px;
  margin: 20px auto;
  width: 150px;
  height: 200px;
}
.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}
.card.flipped .card-inner {
  transform: rotateY(180deg);
}
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  color: white;
}
.card-front { background: #ff6f61; }
.card-back { background: #3bb2b8; transform: rotateY(180deg); }

/* Popup */
.popup {
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
}
.popup.show { display: flex; }
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  animation: slideIn 0.5s forwards;
}
@keyframes slideIn {
  from { transform: translateY(-200px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
