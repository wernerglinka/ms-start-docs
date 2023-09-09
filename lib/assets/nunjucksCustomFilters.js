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