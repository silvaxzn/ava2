const $ = id => document.getElementById(id),
      inpt = $('task-input'), 
      err = $('error-message'),
      cnt = $('task-counter'), 
      lst = $('task-list'),
      form = $('task-form');

const add = (e) => {
  if (e) e.preventDefault(); 
  
  const txt = inpt.value.trim();
  
  
  if (!txt) {
    err.classList.remove('error-hidden');
    return;
  }
  
  err.classList.add('error-hidden');

  // Cria o item da lista
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${txt}</span>
    <button class="delete-btn" type="button">Excluir</button>
  `;
  
 
  li.onclick = e => {
    if (e.target.classList.contains('task-text')) {
      li.classList.toggle('completed');
    }
    if (e.target.classList.contains('delete-btn')) {
      li.remove();
      count(-1);
    }
  };

  lst.appendChild(li);
  count(1);

  
  inpt.value = '';
  inpt.focus();
};

const count = val => cnt.textContent = +cnt.textContent + val;


form.onsubmit = add;