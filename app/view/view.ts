importJS('app/view/header/componentHeader');
importJS('app/view/body/componentPageBody');
importJS('app/view/footer/componentFooter');

class View{
  constructor(body) {
    let header=new ComponentHeader(body);
    let body=new ComponentPageBody(body);
    let footer=new ComponentFooter(body);
  }
}