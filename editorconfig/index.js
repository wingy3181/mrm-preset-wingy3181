const { ini } = require('mrm-core');

function task() {
  // .editorconfig
  const editorconfig = ini('.editorconfig', 'editorconfig.org');
  editorconfig.set('_global', { root: true }).set('*', {
    indent_style: 'space',
    indent_size: 2,
    end_of_line: 'lf',
    charset: 'utf-8',
    trim_trailing_whitespace: true,
    insert_final_newline: true,
  });

  // set md section
  editorconfig.set('*.md', {
    trim_trailing_whitespace: false,
  });

  editorconfig.save();
}

task.description = 'Adds EditorConfig';
module.exports = task;