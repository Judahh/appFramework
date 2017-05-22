importJS('app/view/header/componentHeader');
importJS('app/view/body/componentBody');
importJS('app/view/footer/componentFooter');

class View{
  render() {
    let header=new ComponentHeader();
    let body=new ComponentBody();
    let footer=new ComponentFooter();
    return header.render()+body.render()+footer.render();
  }
}