const tagElement = document.getElementById('tags');
const textArea = document.querySelector('.textarea');

// automatically focus on text area
textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    },10)
    randomSelect();
  }
})

function createTags(input) {
  // console.log(input);
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

  tagElement.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagElement.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)

  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 30)
};

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')

  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}

