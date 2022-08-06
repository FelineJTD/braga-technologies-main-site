export const toLink = (str) => {
  return str.replace(/ /g, '-').replace(/\//g, '&sol;').replace(/\\/g, '&bsol;').toLowerCase();
}

export const toTitle = (str) => {
  return str.replace(/\-/g, ' ').replace(/\&sol;/g, '/').replace(/\&bsol;/g, '\\');
}