const mdToHTML = mdString => {
  try {
    return marked.parse(mdString,{
      mangle: false,
      headerIds: false
    });
  } catch (e) {
    console.error("Error parsing markdown:", e);
    return mdString;
  }
};

const getSelections = (list, selections) => {
  const filterredList = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < selections.length; j++) {
      if (list[i].id === selections[j]) {
        filterredList.push(list[i]);
      }
    }
  }
  return filterredList;
};