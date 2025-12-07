// search.js - EarnYou Premium (front-end search)
const posts = [
  { title: "How to Earn Online", url: "posts/post1.html" },
  { title: "Top 5 Money Making Apps: Ghar Baithe Baithe Paise Kamane Ke Tareeke", url: "posts/post2.html" },
  { title: "12th November", url: "posts/spin1/about.html" },
  { title: "13th November", url: "posts/flappy1/about.html" },
  { title: "Ways to Earn Without Investment", url: "posts/post3.html" },
  { title: "Earn Money Online in 2025", url: "posts/post4.html" },
  { title: "Top 10 Genuine Ways to Earn Money Online in 2025", url: "posts/post5.html" },
  { title: "Students के लिए Best Online Earning Methods 2025", url: "posts/post7.html" },
  { title: "AI का उपयोग करके कमाएँ: ₹1 लाख/महीना Passive Income Blueprint | EarnYou", url: "posts/post6.html" },
  { title: "AI Earning Tools 2025 – Best Ways to Make Money Using Artificial Intelligence", url: "posts/post8.html" },
  { title: "Best Pay-Per-Task Websites 2025 – Earn Money Completing Simple Tasks", url: "posts/post9.html" },
  { title: "Top AI Jobs That Pay Daily", url: "posts/post12.html" },
  { title: "Best Side Hustles for Students in 2025", url: "posts/post13.html" },
  { title: "How to Earn Using AI Chatbots in 2025", url: "posts/post14.html" },
  { title: "Top AI Side Hustles in 2025 – Earn ₹500 to ₹3000 Daily", url: "posts/post16.html" },
  { title: "Best Zero-Investment Online Businesses to Start in 2025", url: "posts/post17.html" },
  { title: "Top AI Tools to Make Money in 2025 (Zero Skills Needed)", url: "posts/post18.html" },
  { title: "How to Build Multiple Income Streams Online in 2025", url: "posts/post19.html" },
  { title: "Top AI Side Hustles in 2025 (Zero Investment) – EarnYou", url: "posts/post20.html" },
  { title: "Top 10 Evergreen Blog Niches for 2025 – EarnYou", url: "posts/post21.html" },
  { title: "AeroAI – The New Viral AI Tool of 2025 | Full Review, Features & Guide - EarnYou", url: "posts/post22.html" },
  { title: "Top Emerging AI Tools & Apps in 2025 – EarnYou", url: "posts/post23.html" },
   { title: "Future AI Jobs in 2025 No One Is Talking Abou – EarnYou", url: "posts/post24.html" },
   { title: "Best AI Chrome Extensions of 2025 – EarnYou", url: "posts/post25.html" },
  { title: "🔥 Top AI Smartphone Features of 2025 (New Hidden Features Explained) – EarnYou", url: "posts/post26.html" },
  { title: "Best New AI Mobile Apps of 2025 (Ultra-Fast, Smart & Free Tools Everyone Is Downloading) – EarnYou", url: "posts/post27.html" },
  { title: "Top 10 AI Chrome Extensions You Must Use in 2025 – EarnYou", url: "posts/post28.html" },
  { title: "Best New AI Apps in 2025 – EarnYou", url: "posts/post29.html" },
  { title: "Free Fire 4K/8K Wallpapers HD | Ultra HD Gaming Backgrounds – EarnYou", url: "posts/post30.html" },
  { title: "Top 10 AI Chrome Extensions in 2025 That Will Change Your Digital Life – EarnYou", url: "posts/post31.html" },
  { title: "Best New AI Money-Making Tools in 2025 (Free + No Investment) – EarnYou", url: "posts/post32.html" },
  
  
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
