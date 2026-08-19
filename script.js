document.addEventListener('DOMContentLoaded', function() {

  // 1. HAMBURGER
  document.querySelector('.hamburger')?.addEventListener('click', function() {
    alert('मेन्यू — जल्द आ रहा है!');
  });

  // 2. NOTIFICATION
  document.querySelector('.notif-btn')?.addEventListener('click', function() {
    alert('आपके पास 3 नई सूचनाएँ हैं!');
  });

  // 3. PROFILE
  document.querySelector('.profile-avatar')?.addEventListener('click', function() {
    alert('आपकी प्रोफाइल — जल्द आ रही है!');
  });

  // 4. LOCATION
  document.querySelector('.location-pill')?.addEventListener('click', function() {
    alert('अपना शहर/इलाका चुनें — यहाँ सेट करें!');
  });

  // 5. SEARCH ICON
  document.querySelector('.search-bar svg')?.addEventListener('click', function() {
    const input = document.querySelector('.search-bar input');
    if (input.value.trim() === '') {
      alert('कृपया काम, कंपनी या कौशल लिखें!');
    } else {
      alert('खोज रहे हैं: "' + input.value.trim() + '"');
    }
  });

  // 6. SEARCH ENTER
  document.querySelector('.search-bar input')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const val = this.value.trim();
      if (val === '') {
        alert('कृपया कुछ खोजें!');
      } else {
        alert('खोज रहे हैं: "' + val + '"');
      }
    }
  });

  // 7. HERO DOTS
  const dots = document.querySelectorAll('.hero-dots .dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      dots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
      alert('बैनर ' + (index+1) + ' दिखाया जा रहा है');
    });
  });

  // 8. HERO CTA
  document.querySelector('.cta-yellow')?.addEventListener('click', function() {
    alert('आपके आसपास के काम खोजे जा रहे हैं...');
  });

  // 9. ACTION CARDS
  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('.action-text h3')?.textContent || '';
      alert('"' + title + '" — जल्द शुरू हो रहा है!');
    });
  });

  // 10. CATEGORY CARDS
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const name = this.querySelector('.cat-name')?.textContent || '';
      const count = this.querySelector('.cat-count')?.textContent || '';
      alert(name + ' — ' + count + ' उपलब्ध हैं!');
    });
  });

  // 11. VIEW ALL LINKS
  document.querySelectorAll('.view-all').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.closest('.section-header')?.querySelector('.section-title h2')?.textContent || 'सभी';
      alert('"' + parent + '" — पूरी सूची देखें!');
    });
  });

  // 12. PROMO CTA
  document.querySelector('.promo-cta')?.addEventListener('click', function() {
    alert('आपका रजिस्ट्रेशन शुरू हो रहा है! पहली कमाई के लिए तैयार हो जाइए।');
  });

  // 13. APPLY BUTTONS
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const jobTitle = this.closest('.job-card')?.querySelector('h3')?.textContent || 'जॉब';
      alert('"' + jobTitle + '" के लिए आपका आवेदन भेज दिया गया है! हम जल्द संपर्क करेंगे।');
    });
  });

  // 14. FAVOURITE BUTTONS
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      const isActive = this.classList.contains('active');
      if (isActive) {
        this.querySelector('svg')?.setAttribute('fill', '#E74C3C');
        alert('जॉब पसंद की सूची में जोड़ा गया!');
      } else {
        this.querySelector('svg')?.setAttribute('fill', 'none');
        alert('जॉब पसंद की सूची से हटा दिया गया!');
      }
    });
  });

  // 15. BOTTOM NAVIGATION
  const pages = ['होम', 'खोजें', 'मेरे काम', 'चैट', 'प्रोफाइल'];
  document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      alert('"' + pages[index] + '" पर जा रहे हैं...');
    });
  });

  console.log('✅ Rojgar — सभी बटन काम कर रहे हैं!');
});