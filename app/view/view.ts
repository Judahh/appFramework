importJS('app/view/header/componentHeader');
importJS('app/view/body/componentPageBody');
importJS('app/view/footer/componentFooter');

class View{
  constructor(body) {
    body.innerHTML="";
    let header=new ComponentHeader(body);
    let pageBody=new ComponentPageBody(body);
    let footer=new ComponentFooter(body);
  }
}