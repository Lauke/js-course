const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
return sentence.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);