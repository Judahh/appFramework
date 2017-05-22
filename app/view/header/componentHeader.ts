importJS('app/view/util/util');

importCSS('app/view/header/componentHeader');

class ComponentHeader{
  render() {
    return Util.elementHTML("header","nasidas");
  }
}