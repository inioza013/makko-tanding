const header=document.getElementById('header'),menu=document.getElementById('menu');if(menu){menu.type='button';menu.setAttribute('aria-label','Buka menu navigasi');menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.textContent=open?'×':'☰';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup menu navigasi':'Buka menu navigasi')})}document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');if(menu){menu.textContent='☰';menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka menu navigasi')}}));const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

/* Google Analytics 4 — MAKKO TANDING */
(function(){
  var measurementId='G-TQ2FGN585D';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());
  window.gtag('config',measurementId);
  var gaScript=document.createElement('script');
  gaScript.async=true;
  gaScript.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);
  document.head.appendChild(gaScript);
  document.addEventListener('click',function(event){
    var link=event.target.closest('a[href]');
    if(!link)return;
    var href=link.href||'';
    if(!/wa\\.me\\/|api\\.whatsapp\\.com/i.test(href))return;
    window.gtag('event','whatsapp_click',{
      link_url:href,
      link_text:(link.innerText||link.getAttribute('aria-label')||'WhatsApp').trim().slice(0,100),
      page_location:window.location.href,
      page_title:document.title,
      transport_type:'beacon'
    });
  },true);
})();
