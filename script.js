// Image Rotation
const images = ["images/book1.png","images/book2.png","images/book3.png"];
let idx=0, el=document.getElementById("rotating-image");
setInterval(() => {
  idx=(idx+1)%images.length;
  el.src=images[idx];
},4000);

// Modal Controls
const aboutBtn=document.getElementById("about-btn");
const modal=document.getElementById("about-modal");
const closeBtn=document.getElementById("modal-close");
aboutBtn.onclick=e=>{e.preventDefault();modal.style.display="flex";}
closeBtn.onclick=()=>modal.style.display="none";

// Fetch Amazon Reviews (placeholder)
fetch("https://your-amazon-reviews-endpoint") // replace with a real API
  .then(r=>r.json())
  .then(data=>{
    const container=document.getElementById("amazon-reviews");
    container.innerHTML="";
    data.reviews.forEach(r=>{
      const el=document.createElement("div"); el.className="review";
      el.innerHTML=`<div class="stars">${"★".repeat(r.stars)}</div>
                    <blockquote>${r.text}</blockquote>
                    <cite>${r.author}</cite>`;
      container.appendChild(el);
    });
  })
  .catch(()=>document.getElementById("amazon-reviews").innerHTML="<p>Reviews unavailable right now.</p>");