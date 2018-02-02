module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js + Δ micro project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: `{{#inPlace}}To get started:
  
  npm install # Or yarn
  npm run dev # Or yarn dev{{else}}To get started:
  
  cd {{destDirName}}
  npm install # Or yarn
  npm run dev # Or yarn dev{{/inPlace}}`
};
