// Quiz data array of objects
const quizData = [
  {
    question: "Which sleep stage is primarily associated with vivid dreaming?",
    choices: ["NREM Stage 1", "NREM Stage 3", "REM Sleep", "Wakefulness"],
    answer: 2
  },
  {
    question: "Which part of the brain is most active during REM sleep?",
    choices: ["Hippocampus", "Prefrontal Cortex", "Visual Cortex", "Cerebellum"],
    answer: 2
  }
]; 

// Load quiz into the page
function loadQuiz() {
  const quizContainer = document.getElementById('quiz');
  quizData.forEach((item, i) => {
    const div = document.createElement('div');
    div.classList.add('quiz-question');
    const h3 = document.createElement('h3');
    h3.textContent = `Q${i+1}. ${item.question}`;
    div.appendChild(h3);
    const ul = document.createElement('ul');
    item.choices.forEach((c, j) => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${i}`;
      input.value = j;
      label.appendChild(input);
      label.append(` ${c}`);
      li.appendChild(label);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    quizContainer.appendChild(div);
  });
}

// Check quiz answers
function checkQuiz() {
  let score = 0;
  quizData.forEach((item, i) => {
    const sel = document.querySelector(`input[name=q${i}]:checked`);
    if (sel && parseInt(sel.value) === item.answer) score++;
  });
  alert(`You scored ${score} out of ${quizData.length}`);
} 
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quiz')) {
    loadQuiz();
    document.getElementById('submit-quiz')
            .addEventListener('click', checkQuiz);
  }
});
