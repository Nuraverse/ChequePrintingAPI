import{A as se,B as W,C as $,D as T,F as ee,G as te,H as ie,I as ne,J as oe,K as re,d as O,g as x,h as Y,j as z,k as j,m as V,n as Q,o as X,p as U,q as G,r as R,s as H,t as J,v as K,w as Z}from"./chunk-JCOYJQZF.js";import{$a as v,Bb as p,Cb as m,Db as u,Fb as q,Gb as g,Na as d,Oa as y,ba as L,cb as a,f as le,fb as _,hb as i,ib as o,ja as A,jb as c,ka as P,nb as B,ob as l,pb as w,pc as F,tb as E,ub as N,vb as I,xb as s,yb as k}from"./chunk-S75CAB2Z.js";var f=le(se());var b=()=>({width:"300px"}),D=()=>({width:"254px"});function pe(C,S){if(C&1){let r=B();i(0,"div",115)(1,"p-button",116),l("onClick",function(){A(r);let e=w();return P(e.toggleBold())}),c(2,"i",117),o(),i(3,"p-button",116),l("onClick",function(){A(r);let e=w();return P(e.toggleItalic())}),c(4,"i",118),o(),i(5,"p-button",119),l("onClick",function(){A(r);let e=w();return P(e.toggleUnderline())}),c(6,"i",120),o()()}if(C&2){let r=w();d(),a("text",!0)("raised",!0)("disabled",!r.isTextNavigation),d(2),a("text",!0)("raised",!0)("disabled",!r.isTextNavigation),d(2),a("text",!0)("raised",!0)("disabled",!r.isTextNavigation)}}function me(C,S){C&1&&c(0,"img",121)}function ue(C,S){C&1&&c(0,"img",121)}function he(C,S){C&1&&c(0,"img",121)}function ce(C,S){C&1&&c(0,"img",121)}var Qe=(()=>{class C{amountToWordsService;chequeService;agreementService;messageService;confirmationService;router;banks;selectedBank;firstChequeDate=new Date;lastChequeDate;period1Checked=!1;period2Checked=!1;period3Checked=!1;period4Checked=!1;fontSize=10;dateChecked=!0;payeeChecked=!0;aiwChecked=!0;ainChecked=!0;acpayeeChecked=!0;showBackgroundColor=!0;amountInWords1="";amountInWords2="";amountInWords3="";amountInWords4="";period1Amount=0;period1LastAmount=0;period1Periods=1;period2Amount=0;period2LastAmount=0;period2Periods=1;period3Amount=0;period3LastAmount=0;period3Periods=1;period4Amount=0;period4LastAmount=0;period4Periods=1;amountDisplay="";agreementNo;selectedChequeObject;autoMode=!0;agreementInfo;viewDataFlag=!1;isTextNavigation=!1;printOptions=[{label:"Both",value:"both"},{label:"Front",value:"front"},{label:"Back",value:"back"}];frequencyOptions=[{label:"Monthly",value:"M"},{label:"Bi-Monthly",value:"BIM"},{label:"Quarterly",value:"Q"},{label:"Half-Yearly",value:"H"},{label:"Annually",value:"A"}];printValue="both";selectedFrequency={label:"Monthly",value:"M"};imageComponent;constructor(r,h,e,n,t,M){this.amountToWordsService=r,this.chequeService=h,this.agreementService=e,this.messageService=n,this.confirmationService=t,this.router=M}ngOnInit(){this.fetchBanks()}fetchBanks(){this.chequeService.getBanks().subscribe({next:r=>{this.banks=r},error:r=>{console.error("Error fetching banks:",r)},complete:()=>{console.log("Fetching banks complete.")}})}fetchContract(){this.agreementNo&&(this.viewDataFlag=!1,this.agreementService.getAgreement(this.agreementNo).subscribe({next:r=>{if(r.agreementNo!=null){this.agreementInfo=r,this.firstChequeDate=(0,f.default)(r.firstInstallmentDate,"YYYY-MM-DD").toDate(),this.period1Amount=r.firstInstallmentAmount,this.period1LastAmount=r.lastInstallmentAmount,this.period1Periods=r.numberOfInstallment;let h=W.generateDatePeriods((0,f.default)(this.firstChequeDate).format("DD-MM-YYYY"),r.numberOfInstallment,this.selectedFrequency?.value),e=this.frequencyOptions.find(n=>n.value===r.frequency);e?this.selectedFrequency=e:this.selectedFrequency={label:"Monthly",value:"M"},this.lastChequeDate=(0,f.default)(h[h.length-1],"DD-MM-YYYY").toDate(),this.messageService.add({severity:"success",summary:"success",detail:"Agreement information retrieved successfully!"})}else this.messageService.add({severity:"warn",summary:"warn",detail:"Agreement information not available ["+this.agreementNo+"]"}),this.clearPeriod1()},error:r=>{console.error("Error fetching Contract:",r)},complete:()=>{console.log("Fetching Contract complete.")}}))}fetchCheque(){this.selectedBank&&(this.viewDataFlag=!1,this.chequeService.getCheque(this.selectedBank?.id).subscribe({next:r=>{this.selectedChequeObject=r,this.imageComponent&&this.imageComponent.resizeAndLoadCanvas(r),this.messageService.add({severity:"success",summary:"success",detail:"Cheque information retrieved successfully!"}),this.period1Checked=!0,this.calculateLastPeriodDate()},error:r=>{console.error("Error fetching cheque:",r)},complete:()=>{console.log("Fetching cheque complete.")}}))}convertAmountInWords(r){r==="period1"&&this.period1Amount!=0?this.amountInWords1=this.amountToWordsService.convert(this.period1Periods==1?this.period1LastAmount:this.period1Amount):r==="period2"&&this.period2Amount!=0?this.amountInWords2=this.amountToWordsService.convert(this.period2Amount):r==="period3"&&this.period3Amount!=0?this.amountInWords3=this.amountToWordsService.convert(this.period3Amount):r==="period4"&&this.period4Amount!=0&&(this.amountInWords4=this.amountToWordsService.convert(this.period4Amount))}clearAll(){this.selectedBank=null,this.clearPeriod1(),this.clearPeriod2(),this.clearPeriod3(),this.clearPeriod4(),this.viewDataFlag=!1,this.imageComponent.resetCanvas()}resetCanvas(){this.imageComponent&&(this.selectedBank=null,this.viewDataFlag=!1,this.imageComponent.resetCanvas())}printPreviewCanvas(){if(this.imageComponent){let r=(0,f.default)(this.firstChequeDate).format("DD-MM-YYYY"),h=this.generatePeriods();this.agreementNo&&this.imageComponent.printPreviewCanvas(r,h,this.agreementNo,this.autoMode,this.printValue,this.selectedFrequency?.value)}}printCanvas(){this.imageComponent&&this.confirmationService.confirm({message:'Are you sure you want to print the cheques on <b style="font-size: 18px;">'+this.printValue+" side? </b>",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-success ml-2",rejectButtonStyleClass:"p-button-warning",accept:()=>{let r=(0,f.default)(this.firstChequeDate).format("DD-MM-YYYY"),h=this.generatePeriods();this.agreementNo&&this.imageComponent.printCanvas(r,h,this.agreementNo,this.autoMode,this.printValue,this.selectedFrequency?.value)},reject:()=>{this.messageService.add({severity:"info",summary:"Cancelled",detail:"Cheque printing has been cancelled."})}})}generatePeriods(){let r=[];return this.period1Checked&&this.period1Amount!=0&&r.push({periodAmount:this.period1Amount,periodLastAmount:this.period1LastAmount,periods:this.period1Periods}),this.period2Checked&&this.period2Amount!=0&&r.push({periodAmount:this.period2Amount,periodLastAmount:this.period2LastAmount,periods:this.period2Periods}),this.period3Checked&&this.period3Amount!=0&&r.push({periodAmount:this.period3Amount,periodLastAmount:this.period3LastAmount,periods:this.period3Periods}),this.period4Checked&&this.period4Amount!=0&&r.push({periodAmount:this.period4Amount,periodLastAmount:this.period4LastAmount,periods:this.period4Periods}),r}moveText(r){this.imageComponent&&this.imageComponent.moveText(r)}increaseTextboxWidth(){this.imageComponent&&this.imageComponent.increaseTextboxWidth()}decreaseTextboxWidth(){this.imageComponent&&this.imageComponent.decreaseTextboxWidth()}increaseFontSize(){this.imageComponent&&this.imageComponent.increaseFontSize()}decreaseFontSize(){this.imageComponent&&this.imageComponent.decreaseFontSize()}toggleBold(){this.imageComponent&&this.imageComponent.toggleBold()}toggleItalic(){this.imageComponent&&this.imageComponent.toggleItalic()}toggleUnderline(){this.imageComponent&&this.imageComponent.toggleUnderline()}hideShowTextbox(r,h){this.imageComponent&&this.imageComponent.hideShowTextbox(r,h)}toggleBackgroundColor(){this.imageComponent&&this.imageComponent.toggleBackgroundColor(this.showBackgroundColor)}viewData1(){if(this.imageComponent){this.amountDisplay="Total ";let r=0;this.amountInWords1=this.amountToWordsService.convert(this.period1Periods==1?this.period1LastAmount:this.period1Amount);let h=(0,f.default)(this.firstChequeDate).format("DD-MM-YYYY");this.imageComponent.updateText(h,0),this.imageComponent.splitTextBetweenTwoObjects(this.amountInWords1,2,3),this.imageComponent.updateText((this.period1Periods==1?this.period1LastAmount:this.period1Amount)+"/",4),this.imageComponent.updateText("---",5),this.period1Checked&&(this.amountDisplay+=this.period1Amount!=0?this.period1Amount+" X "+(this.period1Periods-1)+" + "+this.period1LastAmount:"",r+=this.period1Amount*(this.period1Periods-1)+this.period1LastAmount),this.period2Checked&&(this.amountDisplay+=this.period2Amount!=0?" & "+this.period2Amount+" X "+(this.period2Periods-1)+" + "+this.period2LastAmount:"",r+=this.period2Amount*(this.period2Periods-1)+this.period2LastAmount),this.period3Checked&&(this.amountDisplay+=this.period3Amount!=0?" & "+this.period3Amount+" X "+(this.period3Periods-1)+" + "+this.period3LastAmount:"",r+=this.period3Amount*(this.period3Periods-1)+this.period3LastAmount),this.period4Checked&&(this.amountDisplay+=this.period4Amount!=0?" & "+this.period4Amount+" X "+(this.period4Periods-1)+" + "+this.period4LastAmount:"",r+=this.period4Amount*(this.period4Periods-1)+this.period4LastAmount),this.amountDisplay+=" => "+r,this.agreementNo!=0&&this.imageComponent.updateTextBack(this.agreementNo+"",0),this.showBackgroundColor=!1,this.toggleBackgroundColor(),this.viewDataFlag=!0,this.messageService.add({severity:"success",summary:"success",detail:"The view has been applied successfully!"})}}viewData(){if(this.imageComponent){this.amountDisplay="";let r=0;this.amountInWords1=this.amountToWordsService.convert(this.period1Periods==1?this.period1LastAmount:this.period1Amount);let h=(0,f.default)(this.firstChequeDate).format("DD-MM-YYYY");this.imageComponent.updateText(h,0),this.imageComponent.splitTextBetweenTwoObjects(this.amountInWords1,2,3),this.imageComponent.updateText((this.period1Periods==1?this.period1LastAmount:this.period1Amount)+"/",4),this.imageComponent.updateText("---",5),[{amount:this.period1Amount,periods:this.period1Periods,lastAmount:this.period1LastAmount,checked:this.period1Checked},{amount:this.period2Amount,periods:this.period2Periods,lastAmount:this.period2LastAmount,checked:this.period2Checked},{amount:this.period3Amount,periods:this.period3Periods,lastAmount:this.period3LastAmount,checked:this.period3Checked},{amount:this.period4Amount,periods:this.period4Periods,lastAmount:this.period4LastAmount,checked:this.period4Checked}].forEach((n,t)=>{if(n.checked){let M=n.amount;if(n.periods===1)M=n.lastAmount||n.amount,this.amountDisplay+=`${t>0?" & ":""}${M}`,r+=M;else if(n.periods>1){if(n.amount!==0){let ae=n.periods-1,de=n.lastAmount!==void 0?` + ${n.lastAmount}`:"";this.amountDisplay+=`${t>0?" & ":""}${n.amount} X ${ae}${de}`}r+=M*(n.periods-1)+(n.lastAmount||0)}}}),this.amountDisplay+=` => Total Amount: ${r}`,this.agreementNo!==0&&this.imageComponent.updateTextBack(this.agreementNo+"",0),this.showBackgroundColor=!1,this.toggleBackgroundColor(),this.viewDataFlag=!0,this.messageService.add({severity:"success",summary:"success",detail:"The view has been applied successfully!"})}}exportJSON(){this.imageComponent&&this.imageComponent.exportJSON()}onAutoMode(){this.autoMode?(this.period2Checked=!1,this.period3Checked=!1,this.period4Checked=!1):this.clearPeriod1(),this.calculateLastPeriodDate()}clearPeriod1(){this.amountDisplay="",this.agreementNo=null,this.firstChequeDate=new Date,this.period1Amount=0,this.period1LastAmount=0,this.lastChequeDate=null,this.period1Periods=1,this.amountInWords1="",this.viewDataFlag=!1,this.selectedFrequency={label:"Monthly",value:"M"}}clearPeriod2(){this.amountDisplay="",this.period2Amount=0,this.period2LastAmount=0,this.period2Periods=1,this.amountInWords2=""}clearPeriod3(){this.amountDisplay="",this.period3Amount=0,this.period3LastAmount=0,this.period3Periods=1,this.amountInWords3=""}clearPeriod4(){this.amountDisplay="",this.period4Amount=0,this.period4LastAmount=0,this.period4Periods=1,this.amountInWords4=""}calculateLastPeriodDate(){if(!this.autoMode&&this.firstChequeDate){this.viewDataFlag=!1;let r=0;if(this.period1Checked&&(r=this.period1Periods),this.period2Checked&&(r+=this.period2Periods),this.period3Checked&&(r+=this.period3Periods),this.period4Checked&&(r+=this.period4Periods),r!=0){let h=W.generateDatePeriods((0,f.default)(this.firstChequeDate).format("DD-MM-YYYY"),r,this.selectedFrequency?.value);this.lastChequeDate=(0,f.default)(h[h.length-1],"DD-MM-YYYY").toDate()}}}onTextObjectSelection(r){r?this.isTextNavigation=!0:this.isTextNavigation=!1}navigateToPrintSettings(){this.imageComponent&&this.imageComponent.disposeCanvas(),this.router.navigate(["/cheque-print-settings"])}static \u0275fac=function(h){return new(h||C)(y($),y(ee),y(oe),y(Y),y(x),y(O))};static \u0275cmp=L({type:C,selectors:[["app-master"]],viewQuery:function(h,e){if(h&1&&E(T,5),h&2){let n;N(n=I())&&(e.imageComponent=n.first)}},standalone:!0,features:[q],decls:257,vars:195,consts:[["position","top"],[1,"grid"],[1,"col-12","md:col-2"],[1,"col","p-0"],["src","icon/logo-3.png","alt","Image","width","230","styleClass"," border-round",1,"ml-1"],[1,"col","p-0","mt-2"],[1,"text-center","font-bold","mb-2"],[1,"remote-control","ios-style"],["icon","pi pi-arrow-up",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"middle-row"],["icon","pi pi-arrow-left",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"empty-space"],["icon","pi pi-arrow-right",1,"circle-btn","ios-btn",3,"onClick","disabled"],["icon","pi pi-arrow-down",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"border-top-1","my-2"],[1,"flex","justify-content-around","align-items-center"],["icon","pi pi-search-minus","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-search-plus","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-minus-circle","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-plus-circle","size","small",3,"onClick","rounded","outlined","disabled"],["class","flex justify-content-center align-items-center mt-3 mb-2",4,"ngIf"],[1,"flex","flex-column"],["label","Date","name","date",1,"mb-2",3,"ngModelChange","onChange","binary","ngModel"],["label","Payee","name","payee","value","Payee",1,"mb-2",3,"ngModelChange","onChange","binary","ngModel"],["label","Amount in words","name","AIW","value","AIW",1,"mb-2",3,"ngModelChange","onChange","binary","ngModel"],["label","Amount in numbers","name","AIN","value","AIN",1,"mb-2",3,"ngModelChange","onChange","binary","ngModel"],["label","AC PAYEE","name","acpayee","value","AC Payee",1,"mb-2",3,"ngModelChange","onChange","binary","ngModel"],[1,"col-12","md:col-10"],[1,"col","grid","p-0","mb-1"],["for","bankName",1,"font-bold","col-fixed","mt-2",2,"width","131px"],[1,"col","flex"],["optionLabel","bankName","filterBy","bankName","placeholder","Select a Bank","inputId","bankName",3,"ngModelChange","onChange","options","ngModel","filter","showClear","checkmark"],[1,"ml-2",2,"margin-top","-4px"],["icon","pi pi-cog ","size","small","severity","info","label","Go to Cheque Print Settings",1,"custom",3,"onClick"],[1,"col-12","p-0","mb-3"],["header","Period 1"],[1,"grid","col-6","md:col-2"],["for","period1",1,"font-bold","col-fixed"],[1,"col"],["inputId","period1",3,"ngModelChange","onChange","ngModel","binary","disabled"],["for","automode",1,"font-bold","col-fixed"],["inputId","automode",3,"ngModelChange","onChange","binary","ngModel"],[1,"grid","col","flex","justify-content-start"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],[1,"border-1","border-round","p-2"],[1,"col","grid","mt-2"],["for","conractNo",1,"font-bold","mt-2",2,"width","200px"],[1,""],["inputId","conractNo",3,"ngModelChange","ngModel","disabled","useGrouping"],["label","Apply","size","small","severity","info",1,"ml-3","mt-1",3,"onClick","raised","disabled"],[1,"grid","col","p-0"],[1,"col-12","md:col-6"],[1,"col","grid","p-0"],["for","firstChequeDate",1,"font-bold","col-fixed","mt-2",2,"width","200px"],["dateFormat","DD, dd MM,yy","inputId","firstChequeDate",3,"ngModelChange","onBlur","ngModel","iconDisplay","showIcon","disabled"],["for","period1amount",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period1amount","min","0",3,"ngModelChange","ngModel","disabled"],["for","lastChequeDate",1,"font-bold","col-fixed","mt-2",2,"width","200px"],["dateFormat","DD, dd MM,yy","inputId","lastChequeDate",3,"ngModelChange","ngModel","iconDisplay","showIcon","disabled"],["for","period1LastAmount",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period1LastAmount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period1Periods",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period1Periods","min","1",3,"ngModelChange","onBlur","showButtons","ngModel","disabled"],["for","frequency",1,"font-bold","col-fixed",2,"width","200px"],["optionLabel","label","placeholder","Frequency","inputId","frequency",3,"ngModelChange","options","ngModel","disabled"],[1,"col","flex","justify-content-end","align-items-center"],["id","username-help",1,"font-bold","text-cyan-300"],["size","large","severity","info",1,"mr-2",3,"onClick","text","raised","disabled"],["pTemplate","icon"],["size","large","icon","pi pi-trash","severity","danger",1,"mr-2",3,"onClick","text","raised","disabled"],["size","large","icon","pi pi-home",1,"mr-2",3,"onClick","text","raised","disabled"],["header","Period 2",3,"disabled"],["for","period2Checked",1,"font-bold","col-fixed"],["inputId","period2Checked",3,"ngModelChange","onChange","ngModel","binary"],[1,"grid","mt-2"],["for","period2Amount",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period2Amount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period2LastAmount",1,"font-bold","col-fixed","mt-2",2,"width","200px"],["inputId","period2LastAmount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period2Periods",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period2Periods","inputStyle","254px","min","1",3,"ngModelChange","onBlur","showButtons","inputStyle","ngModel","disabled"],["header","Period 3",3,"disabled"],["for","period3Checked",1,"font-bold","col-fixed"],["inputId","period3Checked",3,"ngModelChange","onChange","ngModel","binary"],["for","period3Amount",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period3Amount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period3LastAmount",1,"font-bold","col-fixed","mt-2",2,"width","200px"],["inputId","period3LastAmount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period3Periods",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period3Periods","inputStyle","254px","min","1",3,"ngModelChange","onBlur","showButtons","inputStyle","ngModel","disabled"],["header","Period 4",3,"disabled"],["for","period4Checked",1,"font-bold","col-fixed"],["inputId","period4Checked",3,"ngModelChange","onChange","ngModel","binary"],["for","period4Amount",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period4Amount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period4LastAmount",1,"font-bold","col-fixed","mt-2",2,"width","200px"],["inputId","period4LastAmount","min","0",3,"ngModelChange","ngModel","disabled"],["for","period4Periods",1,"font-bold","col-fixed",2,"width","200px"],["inputId","period4Periods","inputStyle","254px","min","1",3,"ngModelChange","onBlur","showButtons","inputStyle","ngModel","disabled"],[1,"col-12","p-0"],[1,"custom"],[1,"flex"],["severity","info",1,"mr-2",3,"onClick","text","raised","disabled"],[1,"flex","flex-column","align-items-center"],["src","icon/view-cheque.png","alt","icon","width","25"],[1,"text-sm","mt-1"],[1,"pi","pi-print","text-2xl"],[1,"pi","pi-eye","custom-icon"],[1,"mr-2",3,"onClick","text","raised","disabled"],["severity","danger",1,"mr-2",3,"onClick","text","raised","disabled"],[1,"pi","pi-trash","text-2xl"],[1,"grid","p-2","my-2"],["label","Show BackgroundColor","name","filed","value","SB",3,"ngModelChange","onChange","binary","ngModel"],[1,"disabled-text","col","ml-5","col","text-green-900"],[3,"objectSelected"],[1,"flex","justify-content-center","align-items-center","mt-3","mb-2"],["size","small",1,"mr-2",3,"onClick","text","raised","disabled"],[1,"fas","fa-bold"],[1,"fas","fa-italic"],["size","small",3,"onClick","text","raised","disabled"],[1,"fas","fa-underline"],["src","icon/file-write.png","alt","icon",1,"custom-icon-pen"]],template:function(h,e){h&1&&(c(0,"p-toast")(1,"p-confirmDialog",0),i(2,"div",1)(3,"div",2)(4,"div",3),c(5,"p-image",4),o(),i(6,"div",5)(7,"p-card")(8,"div",6),s(9,"Postion"),o(),i(10,"div",7)(11,"p-button",8),l("onClick",function(){return e.moveText("up")}),o(),i(12,"div",9)(13,"p-button",10),l("onClick",function(){return e.moveText("left")}),o(),c(14,"div",11),i(15,"p-button",12),l("onClick",function(){return e.moveText("right")}),o()(),i(16,"p-button",13),l("onClick",function(){return e.moveText("down")}),o()(),c(17,"div",14),i(18,"div",6),s(19,"Box Size"),o(),i(20,"div",15)(21,"p-button",16),l("onClick",function(){return e.decreaseTextboxWidth()}),o(),i(22,"p-button",17),l("onClick",function(){return e.increaseTextboxWidth()}),o()(),c(23,"div",14),i(24,"div",6),s(25,"Text Size"),o(),i(26,"div",15)(27,"p-button",18),l("onClick",function(){return e.decreaseFontSize()}),o(),i(28,"p-button",19),l("onClick",function(){return e.increaseFontSize()}),o()(),v(29,pe,7,9,"div",20),c(30,"div",14),i(31,"div",6),s(32,"Field"),o(),i(33,"div",21)(34,"p-checkbox",22),u("ngModelChange",function(t){return m(e.dateChecked,t)||(e.dateChecked=t),t}),l("onChange",function(){return e.hideShowTextbox(0,e.dateChecked)}),o(),i(35,"p-checkbox",23),u("ngModelChange",function(t){return m(e.payeeChecked,t)||(e.payeeChecked=t),t}),l("onChange",function(){return e.hideShowTextbox(1,e.payeeChecked)}),o(),i(36,"p-checkbox",24),u("ngModelChange",function(t){return m(e.aiwChecked,t)||(e.aiwChecked=t),t}),l("onChange",function(){return e.hideShowTextbox(2,e.aiwChecked),e.hideShowTextbox(3,e.aiwChecked)}),o(),i(37,"p-checkbox",25),u("ngModelChange",function(t){return m(e.ainChecked,t)||(e.ainChecked=t),t}),l("onChange",function(){return e.hideShowTextbox(4,e.ainChecked),e.hideShowTextbox(5,e.ainChecked)}),o(),i(38,"p-checkbox",26),u("ngModelChange",function(t){return m(e.acpayeeChecked,t)||(e.acpayeeChecked=t),t}),l("onChange",function(){return e.hideShowTextbox(6,e.acpayeeChecked)}),o()()()()(),i(39,"div",27)(40,"div",28)(41,"label",29),s(42,"Bank Name:"),o(),i(43,"div",30)(44,"p-dropdown",31),u("ngModelChange",function(t){return m(e.selectedBank,t)||(e.selectedBank=t),t}),l("onChange",function(){return e.fetchCheque()}),o(),i(45,"div",32)(46,"p-button",33),l("onClick",function(){return e.navigateToPrintSettings()}),o()()()(),i(47,"div",34)(48,"p-tabView")(49,"p-tabPanel",35)(50,"div",1)(51,"div",36)(52,"label",37),s(53,"Period 1"),o(),i(54,"div",38)(55,"p-checkbox",39),u("ngModelChange",function(t){return m(e.period1Checked,t)||(e.period1Checked=t),t}),l("onChange",function(){return e.calculateLastPeriodDate()}),o()()(),i(56,"div",36)(57,"label",40),s(58,"Auto Mode"),o(),i(59,"div",38)(60,"p-checkbox",41),u("ngModelChange",function(t){return m(e.autoMode,t)||(e.autoMode=t),t}),l("onChange",function(){return e.onAutoMode()}),o()()(),i(61,"div",42)(62,"label",40),s(63,"Print Options"),o(),i(64,"p-selectButton",43),u("ngModelChange",function(t){return m(e.printValue,t)||(e.printValue=t),t}),o()()(),i(65,"div",44)(66,"div",45)(67,"label",46),s(68,"Contract No:"),o(),i(69,"div",47)(70,"p-inputNumber",48),u("ngModelChange",function(t){return m(e.agreementNo,t)||(e.agreementNo=t),t}),o()(),i(71,"p-button",49),l("onClick",function(){return e.fetchContract()}),o()(),i(72,"div",50)(73,"div",51)(74,"div",52)(75,"label",53),s(76,"First Cheque Date:"),o(),i(77,"div",38)(78,"p-calendar",54),u("ngModelChange",function(t){return m(e.firstChequeDate,t)||(e.firstChequeDate=t),t}),l("onBlur",function(){return e.calculateLastPeriodDate()}),o()()()(),i(79,"div",51)(80,"div",1)(81,"label",55),s(82,"First Cheque Amount:"),o(),i(83,"div",38)(84,"p-inputNumber",56),u("ngModelChange",function(t){return m(e.period1Amount,t)||(e.period1Amount=t),t}),o()()()()(),i(85,"div",50)(86,"div",51)(87,"div",52)(88,"label",57),s(89,"Last Cheque Date:"),o(),i(90,"div",38)(91,"p-calendar",58),u("ngModelChange",function(t){return m(e.lastChequeDate,t)||(e.lastChequeDate=t),t}),o()()()(),i(92,"div",51)(93,"div",1)(94,"label",59),s(95,"Last Cheque Amount:"),o(),i(96,"div",38)(97,"p-inputNumber",60),u("ngModelChange",function(t){return m(e.period1LastAmount,t)||(e.period1LastAmount=t),t}),o()()()()(),i(98,"div",50)(99,"div",51)(100,"div",50)(101,"label",61),s(102,"Period:"),o(),i(103,"div",38)(104,"p-inputNumber",62),u("ngModelChange",function(t){return m(e.period1Periods,t)||(e.period1Periods=t),t}),l("onBlur",function(){return e.calculateLastPeriodDate()}),o()()()(),i(105,"div",51)(106,"div",50)(107,"label",63),s(108,"Frequency:"),o(),i(109,"div",38)(110,"p-dropdown",64),u("ngModelChange",function(t){return m(e.selectedFrequency,t)||(e.selectedFrequency=t),t}),o()()()()(),i(111,"div",50)(112,"div",65)(113,"span",66),s(114),o()(),i(115,"div",65)(116,"p-button",67),l("onClick",function(){return e.convertAmountInWords("period1")}),v(117,me,1,0,"ng-template",68),o(),i(118,"p-button",69),l("onClick",function(){return e.clearPeriod1()}),o(),i(119,"p-button",70),l("onClick",function(){return e.clearAll()}),o()()()()(),i(120,"p-tabPanel",71)(121,"div",1)(122,"label",72),s(123,"Period 2"),o(),i(124,"div",38)(125,"p-checkbox",73),u("ngModelChange",function(t){return m(e.period2Checked,t)||(e.period2Checked=t),t}),l("onChange",function(){return e.calculateLastPeriodDate()}),o()()(),i(126,"div",44)(127,"div",74)(128,"div",51)(129,"div",1)(130,"label",75),s(131,"First Cheque Amount:"),o(),i(132,"div",38)(133,"p-inputNumber",76),u("ngModelChange",function(t){return m(e.period2Amount,t)||(e.period2Amount=t),t}),o()()()(),i(134,"div",51)(135,"div",52)(136,"label",77),s(137,"Last Cheque Amount:"),o(),i(138,"div",38)(139,"p-inputNumber",78),u("ngModelChange",function(t){return m(e.period2LastAmount,t)||(e.period2LastAmount=t),t}),o()()()()(),i(140,"div",3)(141,"div",1)(142,"label",79),s(143,"Period:"),o(),i(144,"div",38)(145,"p-inputNumber",80),u("ngModelChange",function(t){return m(e.period2Periods,t)||(e.period2Periods=t),t}),l("onBlur",function(){return e.calculateLastPeriodDate()}),o()()()(),i(146,"div",50)(147,"div",65)(148,"span",66),s(149),o()(),i(150,"div",65)(151,"div",47)(152,"p-button",67),l("onClick",function(){return e.convertAmountInWords("period2")}),v(153,ue,1,0,"ng-template",68),o(),i(154,"p-button",69),l("onClick",function(){return e.clearPeriod2()}),o(),i(155,"p-button",70),l("onClick",function(){return e.clearAll()}),o()()()()()(),i(156,"p-tabPanel",81)(157,"div",1)(158,"label",82),s(159,"Period 3"),o(),i(160,"div",38)(161,"p-checkbox",83),u("ngModelChange",function(t){return m(e.period3Checked,t)||(e.period3Checked=t),t}),l("onChange",function(){return e.calculateLastPeriodDate()}),o()()(),i(162,"div",44)(163,"div",74)(164,"div",51)(165,"div",1)(166,"label",84),s(167,"First Cheque Amount:"),o(),i(168,"div",38)(169,"p-inputNumber",85),u("ngModelChange",function(t){return m(e.period3Amount,t)||(e.period3Amount=t),t}),o()()()(),i(170,"div",51)(171,"div",52)(172,"label",86),s(173,"Last Cheque Amount:"),o(),i(174,"div",38)(175,"p-inputNumber",87),u("ngModelChange",function(t){return m(e.period3LastAmount,t)||(e.period3LastAmount=t),t}),o()()()()(),i(176,"div",3)(177,"div",1)(178,"label",88),s(179,"Period:"),o(),i(180,"div",38)(181,"p-inputNumber",89),u("ngModelChange",function(t){return m(e.period3Periods,t)||(e.period3Periods=t),t}),l("onBlur",function(){return e.calculateLastPeriodDate()}),o()()()(),i(182,"div",50)(183,"div",65)(184,"span",66),s(185),o()(),i(186,"div",65)(187,"div",47)(188,"p-button",67),l("onClick",function(){return e.convertAmountInWords("period3")}),v(189,he,1,0,"ng-template",68),o(),i(190,"p-button",69),l("onClick",function(){return e.clearPeriod3()}),o(),i(191,"p-button",70),l("onClick",function(){return e.clearAll()}),o()()()()()(),i(192,"p-tabPanel",90)(193,"div",1)(194,"label",91),s(195,"Period 4"),o(),i(196,"div",38)(197,"p-checkbox",92),u("ngModelChange",function(t){return m(e.period4Checked,t)||(e.period4Checked=t),t}),l("onChange",function(){return e.calculateLastPeriodDate()}),o()()(),i(198,"div",44)(199,"div",74)(200,"div",51)(201,"div",1)(202,"label",93),s(203,"First Cheque Amount:"),o(),i(204,"div",38)(205,"p-inputNumber",94),u("ngModelChange",function(t){return m(e.period4Amount,t)||(e.period4Amount=t),t}),o()()()(),i(206,"div",51)(207,"div",52)(208,"label",95),s(209,"Last Cheque Amount:"),o(),i(210,"div",38)(211,"p-inputNumber",96),u("ngModelChange",function(t){return m(e.period4LastAmount,t)||(e.period4LastAmount=t),t}),o()()()()(),i(212,"div",3)(213,"div",1)(214,"label",97),s(215,"Period:"),o(),i(216,"div",38)(217,"p-inputNumber",98),u("ngModelChange",function(t){return m(e.period4Periods,t)||(e.period4Periods=t),t}),l("onBlur",function(){return e.calculateLastPeriodDate()}),o()()()(),i(218,"div",50)(219,"div",65)(220,"span",66),s(221),o()(),i(222,"div",65)(223,"div",47)(224,"p-button",67),l("onClick",function(){return e.convertAmountInWords("period4")}),v(225,ce,1,0,"ng-template",68),o(),i(226,"p-button",69),l("onClick",function(){return e.clearPeriod4()}),o(),i(227,"p-button",70),l("onClick",function(){return e.clearAll()}),o()()()()()()()(),i(228,"div",99)(229,"p-card",100)(230,"div",101)(231,"p-button",102),l("onClick",function(){return e.viewData()}),i(232,"div",103),c(233,"img",104),i(234,"span",105),s(235,"View"),o()()(),i(236,"p-button",102),l("onClick",function(){return e.printPreviewCanvas()}),i(237,"div",103),c(238,"i",106)(239,"i",107),i(240,"span",105),s(241,"Preview"),o()()(),i(242,"p-button",108),l("onClick",function(){return e.printCanvas()}),i(243,"div",103),c(244,"i",106),i(245,"span",105),s(246,"Print"),o()()(),i(247,"p-button",109),l("onClick",function(){return e.resetCanvas()}),i(248,"div",103),c(249,"i",110),i(250,"span",105),s(251,"Clear"),o()()()(),i(252,"div",111)(253,"p-checkbox",112),u("ngModelChange",function(t){return m(e.showBackgroundColor,t)||(e.showBackgroundColor=t),t}),l("onChange",function(){return e.toggleBackgroundColor()}),o(),i(254,"span",113),s(255),o()(),i(256,"app-image-manipulation",114),l("objectSelected",function(t){return e.onTextObjectSelection(t)}),o()()()()()),h&2&&(d(11),a("disabled",!e.isTextNavigation),d(2),a("disabled",!e.isTextNavigation),d(2),a("disabled",!e.isTextNavigation),d(),a("disabled",!e.isTextNavigation),d(5),a("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),d(),a("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),d(5),a("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),d(),a("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),d(),a("ngIf",!1),d(5),a("binary",!0),p("ngModel",e.dateChecked),d(),a("binary",!0),p("ngModel",e.payeeChecked),d(),a("binary",!0),p("ngModel",e.aiwChecked),d(),a("binary",!0),p("ngModel",e.ainChecked),d(),a("binary",!0),p("ngModel",e.acpayeeChecked),d(6),_(g(178,b)),a("options",e.banks),p("ngModel",e.selectedBank),a("filter",!0)("showClear",!1)("checkmark",!0),d(11),p("ngModel",e.period1Checked),a("binary",!0)("disabled",e.selectedBank==null),d(5),a("binary",!0),p("ngModel",e.autoMode),d(4),a("options",e.printOptions),p("ngModel",e.printValue),d(6),_(g(179,b)),p("ngModel",e.agreementNo),a("disabled",!e.period1Checked||e.selectedBank==null)("useGrouping",!1),d(),a("raised",!0)("disabled",!e.period1Checked||e.agreementNo==null||e.agreementNo==0||!e.autoMode||e.selectedBank==null),d(7),_(g(180,b)),p("ngModel",e.firstChequeDate),a("iconDisplay","input")("showIcon",!0)("disabled",!e.period1Checked||e.autoMode||e.agreementNo==null||e.agreementNo==null),d(6),_(g(181,b)),p("ngModel",e.period1Amount),a("disabled",!e.period1Checked||e.autoMode||e.agreementNo==null||e.agreementNo==null),d(7),_(g(182,b)),p("ngModel",e.lastChequeDate),a("iconDisplay","input")("showIcon",!0)("disabled",!0),d(6),_(g(183,b)),p("ngModel",e.period1LastAmount),a("disabled",!e.period1Checked||e.autoMode||e.agreementNo==null||e.agreementNo==null),d(7),_(g(184,b)),a("showButtons",!0),p("ngModel",e.period1Periods),a("disabled",!e.period1Checked||e.autoMode||e.agreementNo==null||e.agreementNo==null),d(6),_(g(185,b)),a("options",e.frequencyOptions),p("ngModel",e.selectedFrequency),a("disabled",!e.period1Checked||e.autoMode||e.agreementNo==null||e.agreementNo==null),d(4),k(e.amountInWords1),d(2),a("text",!0)("raised",!0)("disabled",!e.period1Checked),d(2),a("text",!0)("raised",!0)("disabled",!e.period1Checked),d(),a("text",!0)("raised",!0)("disabled",!e.period1Checked),d(),a("disabled",e.autoMode||!e.period1Checked),d(5),p("ngModel",e.period2Checked),a("binary",!0),d(8),_(g(186,b)),p("ngModel",e.period2Amount),a("disabled",!e.period2Checked),d(6),_(g(187,b)),p("ngModel",e.period2LastAmount),a("disabled",!e.period2Checked),d(6),a("showButtons",!0)("inputStyle",g(188,D)),p("ngModel",e.period2Periods),a("disabled",!e.period2Checked),d(4),k(e.amountInWords2),d(3),a("text",!0)("raised",!0)("disabled",!e.period2Checked),d(2),a("text",!0)("raised",!0)("disabled",!e.period2Checked),d(),a("text",!0)("raised",!0)("disabled",!e.period2Checked),d(),a("disabled",e.autoMode||!e.period1Checked),d(5),p("ngModel",e.period3Checked),a("binary",!0),d(8),_(g(189,b)),p("ngModel",e.period3Amount),a("disabled",!e.period3Checked),d(6),_(g(190,b)),p("ngModel",e.period3LastAmount),a("disabled",!e.period3Checked),d(6),a("showButtons",!0)("inputStyle",g(191,D)),p("ngModel",e.period3Periods),a("disabled",!e.period3Checked),d(4),k(e.amountInWords3),d(3),a("text",!0)("raised",!0)("disabled",!e.period3Checked),d(2),a("text",!0)("raised",!0)("disabled",!e.period3Checked),d(),a("text",!0)("raised",!0)("disabled",!e.period3Checked),d(),a("disabled",e.autoMode||!e.period1Checked),d(5),p("ngModel",e.period4Checked),a("binary",!0),d(8),_(g(192,b)),p("ngModel",e.period4Amount),a("disabled",!e.period4Checked),d(6),_(g(193,b)),p("ngModel",e.period4LastAmount),a("disabled",!e.period4Checked),d(6),a("showButtons",!0)("inputStyle",g(194,D)),p("ngModel",e.period4Periods),a("disabled",!e.period4Checked),d(4),k(e.amountInWords4),d(3),a("text",!0)("raised",!0)("disabled",!e.period4Checked),d(2),a("text",!0)("raised",!0)("disabled",!e.period4Checked),d(),a("text",!0)("raised",!0)("disabled",!e.period4Checked),d(4),a("text",!0)("raised",!0)("disabled",!e.selectedBank||e.amountInWords1===""||e.period1Amount===0||e.period1Amount===null||e.period1LastAmount===0||e.period1LastAmount===null||e.agreementNo==null||e.agreementNo==null),d(5),a("text",!0)("raised",!0)("disabled",!e.selectedBank||e.amountInWords1===""||e.period1Amount===0||e.period1Amount===null||e.period1LastAmount===0||e.period1LastAmount===null||!e.viewDataFlag||e.agreementNo==null||e.agreementNo==null),d(6),a("text",!0)("raised",!0)("disabled",!e.selectedBank||e.amountInWords1===""||e.period1Amount===0||e.period1Amount===null||e.period1LastAmount===0||e.period1LastAmount===null||!e.viewDataFlag||e.agreementNo==null||e.agreementNo==null),d(5),a("text",!0)("raised",!0)("disabled",!e.selectedBank||e.amountInWords1===""||e.period1Amount===0||e.period1Amount===null||e.period1LastAmount===0||e.period1LastAmount===null),d(6),a("binary",!0),p("ngModel",e.showBackgroundColor),d(2),k(e.amountDisplay))},dependencies:[re,j,z,X,V,Q,G,U,H,R,J,K,Z,T,F,te,ie,ne],styles:["[_nghost-%COMP%]     .remote-control{display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]     .middle-row{display:flex;justify-content:center;align-items:center;gap:10px}[_nghost-%COMP%]     .ios-btn .p-button{width:40px;height:40px;border-radius:50%;padding:0;background:linear-gradient(145deg,#f2f2f2,#e0e0e0);box-shadow:0 4px 6px #0000001a,0 1px 3px #00000014;transition:box-shadow .2s ease,transform .2s ease}[_nghost-%COMP%]     .ios-btn .p-button:hover{transform:scale(1.05);box-shadow:0 8px 12px #0003}[_nghost-%COMP%]     .ios-btn .p-button:active{background:linear-gradient(145deg,#e0e0e0,#d0d0d0)}[_nghost-%COMP%]     .ios-btn .p-button-icon{font-size:15px;color:#333}[_nghost-%COMP%]     .empty-space{width:10px;height:10px;visibility:hidden}[_nghost-%COMP%]     .p-card .p-card-body{padding:.5rem}[_nghost-%COMP%]     .custom .p-card .p-card-body{padding:1rem}[_nghost-%COMP%]     .p-card .p-card-content{padding:0}[_nghost-%COMP%]     .p-slider .p-slider-handle{height:20px;width:20px;background:#e2e8f0;border:0 none;border-radius:50%;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s,outline-color .2s}[_nghost-%COMP%]     .custom-icon{position:absolute;margin-top:13px;font-size:10px}[_nghost-%COMP%]     button.p-ripple.p-element.p-button.p-component.p-button-icon-only.p-button-rounded.p-button-outlined.p-button-sm{height:2rem;width:2rem}[_nghost-%COMP%]     .p-inputtext{padding:.4rem}[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link{padding:.75rem}[_nghost-%COMP%]     .p-button.p-button-sm{font-size:.775rem;padding:.35rem .5rem}.custom-icon-pen[_ngcontent-%COMP%]{position:absolute;width:35px;height:35px}.disabled-text[_ngcontent-%COMP%]{font-size:13px;opacity:.5}[_nghost-%COMP%]     span.border-round.p-image.p-component img{border-radius:10px}[_nghost-%COMP%]     .p-toast{width:auto}[_nghost-%COMP%]     .p-inputtext:disabled{opacity:.5;background-color:#e2e8f0;color:#64748b}[_nghost-%COMP%]     .custom-image-width{width:230px!important}[_nghost-%COMP%]     .p-selectbutton .p-button{background:#f1f5f9;border:1px solid #f1f5f9;color:#64748b;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s,outline-color .2s}[_nghost-%COMP%]     .p-selectbutton .p-button.p-highlight{background:#3b82f6;border-color:#3b82f6;color:#fff}[_nghost-%COMP%]     .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover{background:#fce3f5;border-color:#fce3f5;color:#4b5563}[_nghost-%COMP%]     .p-selectbutton .p-button.p-highlight:hover{background:#2563eb;border-color:#2563eb;color:#fff}[_nghost-%COMP%]     .custom .p-button.p-button-sm .p-button-icon{font-size:1.5rem}"]})}return C})();export{Qe as MasterComponent};
