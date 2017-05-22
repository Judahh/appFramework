importCSS('app/view/common/image/componentImage');
// importJSON('app/view/jSON/test');
var test = require('app/view/jSON/test');

class ComponentImage{
  render() {
    
    return test.mad+Util.elementHTML("image","nasidas2");
  }
}