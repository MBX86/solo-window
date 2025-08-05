function autoRank() {
  const strength = parseInt(document.getElementById('strength').value);
  const stamina = parseInt(document.getElementById('stamina').value);
  const speed = parseInt(document.getElementById('speed').value);
  const agility = parseInt(document.getElementById('agility').value);
  const intelligence = parseInt(document.getElementById('intelligence').value);
  const sense = parseInt(document.getElementById('sense').value);

  const total = strength + stamina + speed + agility + intelligence + sense;
  let rank = 'E';
  let level = 0;

  if (total > 500) { rank = 'S'; level = 100; }
  else if (total > 400) { rank = 'A'; level = 80; }
  else if (total > 300) { rank = 'B'; level = 60; }
  else if (total > 200) { rank = 'C'; level = 40; }
  else if (total > 100) { rank = 'D'; level = 20; }
  else { rank = 'E'; level = 0; }

  document.getElementById('rank').value = rank;
  document.getElementById('level').value = level;
}

function saveStats() {
  const fields = ['level', 'rank', 'health', 'strength', 'stamina', 'speed', 'agility', 'intelligence', 'sense', 'notes'];
  const data = {};
  fields.forEach(field => {
    data[field] = document.getElementById(field).value;
  });
  localStorage.setItem('soloStats', JSON.stringify(data));
  alert('تم حفظ الإحصائيات ✅');
}

window.onload = function () {
  const saved = localStorage.getItem('soloStats');
  if (saved) {
    const data = JSON.parse(saved);
    for (const field in data) {
      if (document.getElementById(field)) {
        document.getElementById(field).value = data[field];
      }
    }
  }
}