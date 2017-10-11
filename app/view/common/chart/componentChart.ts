importJS('app/view/util/util');
importJS('app/view/common/component/component');

class ComponentChart extends Component {
  arrayData: Array<any>;
  options: any;
  chartType: string;

  view: ComponentView;
  pageBody: ComponentPageBody;
  header: ComponentHeader;
  footer: ComponentFooter;

  pageBodyChecked: boolean;
  headerChecked: boolean;
  footerChecked: boolean;

  page: string;

  language: any;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, "chart");
  }

  renderAfterUpdateJSON() {
    if (this.language == undefined) {
      this.getLanguage();
    }
    // Load google charts
    var charts;
    eval ("charts = google.charts;");
    charts.load('current', { 'packages': ['corechart'] });
    let _self = this;
    charts.setOnLoadCallback(() => { _self.drawChart(); });
    // Draw the chart and set the chart values

  }

  protected getLanguage() {
    if (this.getPage() != undefined) {
      // console.log("PAGE:" + this.item.getPage());
      this.getJSONLanguagePromise(this.getPage() + "L");
    }
  }

  protected updateLanguage(jSON) {
    var property;
    for (property in jSON) {
      if (property != undefined) {
        if (!jSON.hasOwnProperty(property)) {
          continue;
        }

        if (jSON[property]["language"] == Util.getCurrentLanguage()) {
          // console.log("LANG:"+jSON[property]["language"]);
          break;
        }
      }
    }
    // console.log("selected lan:"+property);
    var subJSON = jSON[property];
    for (var languageProperty in subJSON) {
      if (languageProperty != undefined) {
        if (!subJSON.hasOwnProperty(languageProperty)) {
          continue;
        }
        

        for (var index = 0; index < this.arrayData.length; index++) {
          if (languageProperty == this.arrayData[index]) {
            if (subJSON[languageProperty].constructor === Array) {
              this.arrayData[index] = "";
              subJSON[languageProperty].forEach(element => {
                this.arrayData[index] += element + "<br/>";
              });
            } else {
              this.arrayData[index] = subJSON[languageProperty];
            }
            // console.log("INNER:"+subJSON[languageProperty]);
          }
          for (var index2 = 0; index2 < this.arrayData[index].length; index2++) {
            if (languageProperty == this.arrayData[index][index2]) {
              if (subJSON[languageProperty].constructor === Array) {
                this.arrayData[index][index2] = "";
                subJSON[languageProperty].forEach(element => {
                  this.arrayData[index][index2] += element + "<br/>";
                });
              } else {
                this.arrayData[index][index2] = subJSON[languageProperty];
              }
              // console.log("INNER:"+subJSON[languageProperty]);
            }
          }
        }

        if (languageProperty == this.options.title) {
          if (subJSON[languageProperty].constructor === Array) {
            this.options.title = "";
            subJSON[languageProperty].forEach(element => {
              this.options.title += element + "<br/>";
            });
          } else {
            this.options.title = subJSON[languageProperty];
          }
          // console.log("INNER:"+subJSON[languageProperty]);
        }
        
      }
    }
  }

  drawChart() {
    var visualization;
    eval ("visualization = google.visualization;");
    var data = visualization.arrayToDataTable(this.arrayData);
    // Display the chart inside the <div> element with id="piechart"
    // console.log(this.element.id);
    var chart;
    eval ("chart = new google.visualization."+this.chartType+"(this.element);");
    chart.draw(data, this.options);
  }

  private setPageBody() {
    this.pageBody = <ComponentPageBody>this.seekFatherComponent("ComponentPageBody");
    this.pageBodyChecked=true;
  }

  private setHeader() {
    this.header = <ComponentHeader>this.seekFatherComponent("ComponentHeader");
    this.headerChecked=true;
  }

  private setFooter() {
    this.footer = <ComponentFooter>this.seekFatherComponent("ComponentFooter");
    this.footerChecked=true;
  }

  private setView() {
    if (this.getPageBody() != undefined) {
      this.view = <ComponentView>this.pageBody.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getHeader() != undefined) {
      this.view = <ComponentView>this.header.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    if (this.getFooter() != undefined) {
      this.view = <ComponentView>this.footer.seekFatherComponent("ComponentView");
      if (this.view != undefined) {
        return;
      }
    }

    this.view = <ComponentView>this.seekFatherComponent("ComponentView");
  }

  private setPage() {
    if (this.getPageBody() != undefined) {
      this.page = this.pageBody.nextPageName;
      return;
    }

    if (this.getHeader() != undefined) {
      this.page = this.header.getTag();
      return;
    }

    if (this.getFooter() != undefined) {
      this.page = this.footer.getTag();
      return;
    }
  }

  public getView() {
    if (this.view == undefined) {
      this.setView();
    }
    return this.view;
  }

  public getPage() {
    if (this.page == undefined) {
      this.setPage();
    }
    return this.page;
  }

  public getPageBody() {
    if (!this.pageBodyChecked){
      this.setPageBody();
    }
    return this.pageBody;
  }

  public getHeader() {
    if (!this.headerChecked) {
      this.setHeader();
    }
    return this.header;
  }

  public getFooter() {
    if (!this.footerChecked) {
      this.setFooter();
    }
    return this.footer;
  }
}