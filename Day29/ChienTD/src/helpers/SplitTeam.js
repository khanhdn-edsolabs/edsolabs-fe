function SplitTeam(list) {
  return list.sort((a, b) => a.rank - b.rank);
}

function group(list) {
  let group = list.reduce((r, a) => {
    r[a.rank] = [...(r[a.rank] || []), a];
    return r;
  }, []);
  let rf = [];
  for (let i = 0; i < 5; i++) {
    let gr = [];
    for (let j = 1; j < 6; j++) {
      gr.push(group[j][i]);
    }
    rf.push(gr);
  }

  return rf;
}

export default group;
