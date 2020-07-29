const headings =
  '# This is a React Markdown Previewer\n## This is a sub-heading example.';
const inlineCode =
  '\nTo make inline code, you can wrap it between backticks, like this: `<div></div>`.\n';
const multilineCode =
  '\nFor multiline code, wrap code between 3 backticks. \n\n```\n\n //multi-line code \n\nconst myFunc = (x, y) => {\n\nreturn x + y;\n\n}; \n```\n';
const links =
  '\nThere is also [links](https://www.freecodecamp.com), and \n> Block Quotes!\n';
const lists =
  '\n1. You can also make lists\n1. That is right\n1. This is indeed a list\n';
const boldText =
  '\nYou can wrap text between two asterisks to make it **bold**\n';
const embeddedImg =
  '\nAnd to wrap things up, there are embedded images \n\n![React Logo w/ Text](https://goo.gl/Umyytc)';

const initialState =
  headings +
  inlineCode +
  multilineCode +
  links +
  lists +
  boldText +
  embeddedImg;

export default initialState;
