let allissues = [];

const url = ('https://phi-lab-server.vercel.app/api/v1/lab/issues');
fetch (url)
.then (res => (res.json()))
.then((data) => {
  allissues = (data.data)
  displayCards(allissues);
});
const displayCards = (cards) => {
    const container = document.getElementById('card-container');
     const Total  = document.getElementById('total-value');
     if(Total) {
      Total.innerText = cards.length ;
    }
    container.innerHTML ="";
    cards.forEach((issue)=>{
      if (issue.status === 'open'){
          let Total = cards.length ; 
      }
    })


    cards.forEach ((issue) => {
        const card = document.createElement('div');
       
            const IsOpen = issue.status === 'open';

            const badgeBorder = IsOpen ? 'border-t-emerald-500' : 'border-t-purple-500';

        card.innerHTML = `<div class="bg-white rounded-xl border border-gray-200 border-t-4 ${badgeBorder} p-5 shadow-sm space-y-4 flex flex-col justify-between h-full">
  
  <!-- Title & Description Section -->
  <div class="space-y-2">
    <h3 class="font-bold text-slate-800 text-base leading-snug">
      ${issue.title}
    </h3>
    <p class="text-xs text-slate-400 line-clamp-2">
      ${issue.description}
    </p>
  </div>

  <!-- Tags / Badges Section -->
  <div class="flex flex-wrap gap-2 pt-1">
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-50 text-red-500 border border-red-200">
      <i class="fa-solid fa-bug text-[10px]"></i> BUG
    </span>
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-600 border border-amber-200">
      <i class="fa-solid fa-life-ring text-[10px]"></i> HELP WANTED
    </span>
  </div>

  <!-- Divider & Meta Footer -->
  <div class="border-t border-gray-100 pt-3 text-[11px] text-slate-400 space-y-1">
    <p>#1 by <span class="font-medium text-slate-500">john_doe</span></p>
    <p>1/15/2024</p>
  </div>
`;
container.append(card);
    });
}

const All = document.getElementById('all-btn');
const Open = document.getElementById('open-btn');
const Closed = document.getElementById('closed-btn');

All.addEventListener('click',  () => {
     displayCards(allissues);
});
Open.addEventListener('click', () => {
  const openIssues = allissues.filter((issue) => issue.status === 'open');
  displayCards(openIssues);
});


Closed.addEventListener('click', () => {
  const closedIssues = allissues.filter((issue) => issue.status === 'closed');
  displayCards(closedIssues);
});

