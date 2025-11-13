// search.js - EarnYou Premium (front-end search)
const posts = [
  { title: "How to Earn Online", url: "posts/post1.html" },
  { title: "Top 5 Money Making Apps: Ghar Baithe Baithe Paise Kamane Ke Tareeke", url: "posts/post2.html" },
  { title: "12th November", url: "posts/spin1/about.html" },
  { title: "13th November", url: "posts/flappy1/about.html" },
  { title: "Ways to Earn Without Investment", url: "posts/post3.html" },
  // add new posts here:
  // { title: "Your Post Title", url: "post4.html" },
];

function searchPosts(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  resultsEl.innerHTML = '';
  if(!q){
    resultsEl.innerHTML = '<div class="results-panel"><p style="color:var(--muted)">Type to search posts...</p></div>';
    return;
  }
  const found = posts.filter(p=>p.title.toLowerCase().includes(q));
  if(found.length===0){
    resultsEl.innerHTML = '<div class="results-panel"><p style="color:var(--muted)">No posts found.</p></div>';
    return;
  }
  const wrap = document.createElement('div'); wrap.className='results-panel';
  found.forEach(item=>{
    const a = document.createElement('a');
    a.className='result-item';
    a.href = item.url;
    a.textContent = item.title;
    wrap.appendChild(a);
  });
  resultsEl.appendChild(wrap);
}

// Expose to global (for inline oninput)
window.searchPosts = searchPosts;
