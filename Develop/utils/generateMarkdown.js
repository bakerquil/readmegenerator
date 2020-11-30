// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Project Description:
  ${data.des}

  ## Table of Contents
  *[Installation](##installation)
  *[Usage](##usage)
  *[Contributing](##contributing)
  *[Questions](##questions)
  *[Liscense](##liscense)
  *[Author](##author)
  *[Badges](##badges)

  ##Installation
  ${data.install}

  ## Usage
  ${data.use}

  ## License
  ${data.Liscense}

  #Author
  https://github.com/${data.username}

  #Questions
  For any further questions you can reach out to ${data.email}

`;
}

module.exports = generateMarkdown;
