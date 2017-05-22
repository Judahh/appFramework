importJS('app/view/header/header');
importJS('app/view/body/body');
importJS('app/view/footer/footer');

class View{
  render() {
    let header=new ComponentHeader();
    let body=new ComponentBody();
    let footer=new ComponentFooter();
    return header.render()+body.render()+footer.render();
  }
}