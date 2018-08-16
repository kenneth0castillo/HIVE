// for(let i=0;i>11;i++){
//     const para = document.createElement("div")
//     const text = document.createTextNode("randomuser")
//     para.appendChild(text)
//   }

  const toAdd = document.createDocumentFragment();
  for(let i=0;i<11;i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r'+i;
    newDiv.className = 'ansbox';
    toAdd.appendChild(newDiv);
  }
  document.appendChild(toAdd)